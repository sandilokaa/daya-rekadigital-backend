const { pool } = require("../config/config");

const createCustomersTableQuery = `
    CREATE TABLE IF NOT EXISTS Customer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`;

const createTable = async () => {
    try {
        const connection = await pool.promise();
        const [results] = await connection.query(createCustomersTableQuery);
        console.log('Customers table created successfully:', results);
        connection.end();
    } catch (error) {
        console.error('Error creating customers table:', error);
    }
};

createTable();
