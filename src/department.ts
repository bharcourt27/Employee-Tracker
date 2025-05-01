import { pool } from './connection.js';
import inquirer from 'inquirer';

export async function viewAllDepartments(next: any) {
    const sql = 'SELECT * FROM department';
    const response = await pool.query(sql);
    console.table(response.rows)
    await next();
}

export async function addDepartment(next: any) 
{
    const { departmentName } = await inquirer.prompt([{
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the new department:',
    }]);
    const sql = 'INSERT INTO department (name) VALUES ($1)';
    const params = [departmentName];
    await pool.query(sql, params);
    await viewAllDepartments(next);
}