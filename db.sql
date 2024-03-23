CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2),
    stock INT,
    model  VARCHAR(255),
    image VARCHAR(255)
);
INSERT INTO cars (name, price, stock, model) VALUES ('Ford Mustang', 36000.00, 5, 'GT');
INSERT INTO cars (name, price, stock, model) VALUES ('Chevrolet Camaro', 31500.00, 3, 'LT');
INSERT INTO cars (name, price, stock, model) VALUES ('Toyota Corolla', 20000.00, 10, 'SE');
INSERT INTO cars (name, price, stock, model) VALUES ('Honda Accord', 24000.00, 7, 'Sport');
INSERT INTO cars (name, price, stock, model) VALUES ('BMW 3 Series', 41000.00, 4, '330i');
INSERT INTO cars (name, price, stock, model) VALUES ('Mercedes-Benz C-Class', 43000.00, 6, 'C300');
INSERT INTO cars (name, price, stock, model) VALUES ('Audi A4', 39000.00, 5, 'Premium');
INSERT INTO cars (name, price, stock, model) VALUES ('Tesla Model 3', 48000.00, 2, 'Standard Range Plus');

CREATE TABLE `users` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    deleted_at timestamp NULL DEFAULT NULL
)

CREATE TABLE `contacts` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    deleted_at timestamp NULL DEFAULT NULL
)
