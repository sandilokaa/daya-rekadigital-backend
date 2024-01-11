const { pool } = require("../config/config");

const createTransactionsTableQuery = `
    CREATE TABLE IF NOT EXISTS Transaction (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_id INT,
        menu VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        qty INT NOT NULL,
        payment VARCHAR(255) NOT NULL,
        total INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (customer_id) REFERENCES Customer(id)
    )
`;

const createTable = async () => {
    try {
        const connection = await pool.promise();
        const [results] = await connection.query(createTransactionsTableQuery);
        console.log('Transactions table created successfully:', results);
        connection.end();
    } catch (error) {
        console.error('Error creating transactions table:', error);
    }
};

createTable();