import { connectToDb } from './connection.js';
import { viewAllDepartments, addDepartment } from './department.js';
import { viewAllRoles, addRoles } from './role.js'; // assuming these are in role.js
import { viewAllEmployees, addEmployee, updateEmployeeRole} from './employee.js'; // adjust as needed
import inquirer from 'inquirer';

await connectToDb();

async function main() {
    // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
     const answers = await inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    }]);

    switch (answers.action) {
        case 'View all departments':
            await viewAllDepartments(main);
            break;
        case 'View all roles':
            await viewAllRoles(main);
            break;
        case 'View all employees':
            await viewAllEmployees(main);
            break;
            case 'Add a department':
                await addDepartment(main);
                break;
        case 'Add a role':
            await addRoles(main);
            break;
            case 'Add an employee':
                await addEmployee(main);
                break;
        case 'Update an employee role':
            await updateEmployeeRole(main);
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
    }
}

// Call the main function
main();