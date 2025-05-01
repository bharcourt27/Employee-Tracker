import { pool } from './connection.js';
import inquirer from 'inquirer';

export async function viewAllRoles(next: any) {
    const sql = 'SELECT * FROM role';
    const response = await pool.query(sql);
    console.table(response.rows)
    await next();
}

export async function addRoles(next: any) {
    const department_sql = 'SELECT name, id as value FROM department';
    const department_response = await pool.query(department_sql);
    const departments = department_response.rows
    const { title, salary, department } = await inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Enter the name of the new role:',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Enter salary:',
    },
    {
        type: 'list',
        name: 'department',
        message: 'Select department for new role:',
        choices: departments,
    },
]);
    const sql = ' insert into role (title, salary, department) values ($1, $2, $3)';
    const params = [title, salary, department];
    await pool.query(sql, params);
    await viewAllRoles(next);
}