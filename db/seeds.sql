insert into department (name) values 
('HR'),-- 1
('Finance'),-- 2
('Engineering'),-- 3
('Sales');-- 4

 
 insert into role (title, salary, department) values
('HR Manager', 60000, 1),-- 1
('HR Assistant', 40000, 1),-- 2
('Finance Manager', 70000, 2),-- 3
('Finance Assistant', 45000, 2),-- 4
('Engineer', 80000, 3),-- 5
('Sales Manager', 65000, 4),-- 6
('Sales Associate', 50000, 4);-- 7

 
 insert into employee (first_name, last_name, role_id, manager_id) values
('John', 'Doe', 1, NULL),-- 1
('Jane', 'Smith', 2, 1),-- 2
('Bob', 'Johnson', 3, NULL),-- 3
('Alice', 'Williams', 4, 3),-- 4
('Charlie', 'Brown', 5, null),-- 5
('David', 'Jones', 5, null),-- 6
('Emily', 'Davis', 6, null),-- 7
('Frank', 'Garcia', 7, 7);-- 8

