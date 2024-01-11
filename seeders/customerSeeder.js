const mysql = require('mysql2/promise');
const { pool } = require('../config/config');

async function seedCustomers() {
    try {
        const connection = await pool.promise();

        const customersData = [
            { name: 'Sandi' },
            { name: 'Loka' },
            { name: 'Ananta' }
        ];

        for (const customer of customersData) {
            try {
                const [result] = await connection.execute(
                    'INSERT INTO Customer (name) VALUES (?)',
                    [customer.name]
                );
                console.log(`Customer inserted with ID: ${result.insertId}`);
            } catch (error) {
                console.error('Error inserting customer:', error);
            }
        }

        connection.end();

    } catch (err) {
        console.error('Error opening or closing database connection:', err);
    }
}

seedCustomers();
