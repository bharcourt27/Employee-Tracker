import { pool } from './connection.js';
import inquirer from 'inquirer';

export async function viewAllEmployees(next: any) {
    const sql = 'SELECT * FROM employee';
    const response = await pool.query(sql);
    console.table(response.rows)
    await next();
}

export async function addEmployee(next: any) {
    const role_sql = 'SELECT title as name, id as value FROM role';
    const role_response = await pool.query(role_sql);
    const roles = role_response.rows

    const manager_sql = `select id as value, concat(first_name,' ', last_name) as name from employee where manager_id is null;`;
    const manager_response = await pool.query(manager_sql);
    const managers = manager_response.rows
    managers.push({name: 'None', value: null})
    const {first_name, last_name, role_id, manager_id} = await inquirer.prompt([
        {
        type: 'input',
        name: 'first_name',
        message: 'Enter first name:',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter last name:',
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Select role for new employee:',
        choices: roles,
    },
    {
        type: 'list',
        name: 'manager_id',
        message: 'Select manager for new employee:',
        choices: managers,
    },
]);
    const sql = ' insert into employee (first_name, last_name, role_id, manager_id) values ($1, $2, $3, $4)';
    const params = [first_name, last_name, role_id, manager_id];
    await pool.query(sql, params);
    await viewAllEmployees(next);
}
export async function updateEmployeeRole(next: any) {
    const role_sql = 'SELECT title as name, id as value FROM role';
    const role_response = await pool.query(role_sql);
    const roles = role_response.rows

    const employee_sql = `select id as value, concat(first_name,' ', last_name) as name from employee`;
    const employee_response = await pool.query(employee_sql);
    const employees = employee_response.rows
    const {role_id, employee_id} = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select employee:',
            choices: employees,
        },
   
        {
        type: 'list',
        name: 'role_id',
        message: 'Select new role for employee:',
        choices: roles,
    },

]);
    const sql = 'update employee set role_id = $1 where id = $2;';
    const params = [role_id, employee_id];
    await pool.query(sql, params);
    await viewAllEmployees(next);
}