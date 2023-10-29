CREATE TABLE testtable1 (
                            id serial PRIMARY KEY,
                            first VARCHAR(100),
                            last VARCHAR(100),
                            email text UNIQUE NOT NULL,
                            phone VARCHAR(100),
                            location VARCHAR(100),
                            hobby VARCHAR(100),
                            added TIMESTAMP NOT NULL
);

INSERT INTO testtable1 (first, last, email, phone, location, hobby, added)
VALUES ('John', 'Doe', 'john@example.com', '555-1234', 'New York', 'Programming', NOW());
