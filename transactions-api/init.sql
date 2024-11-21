/*INIT SQL*/

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;

CREATE TABLE transaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO transaction (description, amount, date) VALUES
('Transacción Octubre 1', 100.50, '2024-10-01'),
('Transacción Octubre 2', 200.75, '2024-10-02'),
('Transacción Octubre 3', 150.00, '2024-10-03'),
('Transacción Octubre 4', 300.00, '2024-10-04'),
('Transacción Octubre 5', 250.25, '2024-10-05'),
('Transacción Octubre 6', 180.30, '2024-10-06'),
('Transacción Octubre 7', 220.40, '2024-10-07'),
('Transacción Octubre 8', 190.20, '2024-10-08'),
('Transacción Octubre 9', 210.10, '2024-10-09'),
('Transacción Octubre 10', 250.00, '2024-10-10'),
('Transacción Octubre 11', 270.50, '2024-10-11'),
('Transacción Octubre 12', 160.80, '2024-10-12'),
('Transacción Octubre 13', 220.60, '2024-10-13'),
('Transacción Octubre 14', 200.90, '2024-10-14'),
('Transacción Octubre 15', 210.00, '2024-10-15'),
('Transacción Octubre 16', 230.00, '2024-10-16'),
('Transacción Octubre 17', 240.00, '2024-10-17'),
('Transacción Octubre 18', 210.20, '2024-10-18'),
('Transacción Octubre 19', 260.00, '2024-10-19'),
('Transacción Octubre 20', 270.00, '2024-10-20'),
('Transacción Octubre 21', 250.50, '2024-10-21'),
('Transacción Octubre 22', 230.00, '2024-10-22'),
('Transacción Octubre 23', 220.00, '2024-10-23'),
('Transacción Octubre 24', 210.50, '2024-10-24'),
('Transacción Octubre 25', 190.75, '2024-10-25'),
('Transacción Octubre 26', 250.75, '2024-10-26'),
('Transacción Octubre 27', 260.25, '2024-10-27'),
('Transacción Octubre 28', 200.50, '2024-10-28'),
('Transacción Octubre 29', 210.75, '2024-10-29'),
('Transacción Octubre 30', 220.50, '2024-10-30'),
('Transacción Octubre 31', 250.00, '2024-10-31'),

('Transacción Noviembre 1', 110.50, '2024-11-01'),
('Transacción Noviembre 2', 210.00, '2024-11-02'),
('Transacción Noviembre 3', 140.75, '2024-11-03'),
('Transacción Noviembre 4', 180.60, '2024-11-04'),
('Transacción Noviembre 5', 220.50, '2024-11-05'),
('Transacción Noviembre 6', 190.00, '2024-11-06'),
('Transacción Noviembre 7', 210.30, '2024-11-07'),
('Transacción Noviembre 8', 230.00, '2024-11-08'),
('Transacción Noviembre 9', 250.25, '2024-11-09'),
('Transacción Noviembre 10', 180.75, '2024-11-10'),
('Transacción Noviembre 11', 240.60, '2024-11-11'),
('Transacción Noviembre 12', 200.50, '2024-11-12'),
('Transacción Noviembre 13', 220.30, '2024-11-13'),
('Transacción Noviembre 14', 210.50, '2024-11-14'),
('Transacción Noviembre 15', 250.75, '2024-11-15'),
('Transacción Noviembre 16', 270.50, '2024-11-16'),
('Transacción Noviembre 17', 200.75, '2024-11-17'),
('Transacción Noviembre 18', 210.00, '2024-11-18'),
('Transacción Noviembre 19', 230.50, '2024-11-19'),
('Transacción Noviembre 20', 240.25, '2024-11-20'),
('Transacción Noviembre 21', 250.75, '2024-11-21'),
('Transacción Noviembre 22', 200.00, '2024-11-22'),
('Transacción Noviembre 23', 210.50, '2024-11-23'),
('Transacción Noviembre 24', 220.25, '2024-11-24'),
('Transacción Noviembre 25', 240.60, '2024-11-25'),
('Transacción Noviembre 26', 200.75, '2024-11-26'),
('Transacción Noviembre 27', 230.00, '2024-11-27'),
('Transacción Noviembre 28', 220.50, '2024-11-28'),
('Transacción Noviembre 29', 250.25, '2024-11-29'),
('Transacción Noviembre 30', 240.00, '2024-11-30');

