drop table if exists department, role, employee;

CREATE TABLE "department" (
    "id" serial   NOT NULL,
    "name" varchar(30)   NOT NULL,
    CONSTRAINT "pk_department" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "role" (
    "id" serial   NOT NULL,
    "title" varchar(30)   NOT NULL,
    "salary" decimal   NOT NULL,
    "department" integer   NOT NULL,
    CONSTRAINT "pk_role" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "employee" (
    "id" serial   NOT NULL,
    "first_name" varchar(30)   NOT NULL,
    "last_name" varchar(30)   NOT NULL,
    "role_id" integer   NOT NULL,
    "manager_id" integer,
    CONSTRAINT "pk_employee" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "role" ADD CONSTRAINT "fk_role_department" FOREIGN KEY("department")
REFERENCES "department" ("id");

ALTER TABLE "employee" ADD CONSTRAINT "fk_employee_role_id" FOREIGN KEY("role_id")
REFERENCES "role" ("id");

ALTER TABLE "employee" ADD CONSTRAINT "fk_employee_manager_id" FOREIGN KEY("manager_id")
REFERENCES "employee" ("id");

