
CREATE DATABASE todo_amesite;


create TABLE tasks(
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(64),
    description VARCHAR(255),
    due_date TIMESTAMP NOT NULL,
    tags text[]
);

