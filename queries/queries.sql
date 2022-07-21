-- Active: 1658421390163@@127.0.0.1@3306
CREATE TABLE contents(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT,
    author INTEGER NOT NULL,
    FOREIGN KEY(author) REFERENCES users(id)
);

CREATE TABLE users(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL UNIQUE,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (userName, name, email, password) VALUES ("asrabir", "Ashikuzzaman Abir", "asrabirphone@gmail.com", "unhashed");

SELECT * FROM users;
SELECT * FROM contents;