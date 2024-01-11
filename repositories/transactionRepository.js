const mysql = require('mysql2');
const { pool } = require("../config/config");

class TransactionRepository {

    static async createNewTransaction({ customer_id, menu, price, qty, payment }) {
    
        const total = price * qty;

        const [result] = await pool.promise().query(
            'INSERT INTO Transaction (customer_id, menu, price, qty, payment, total ) VALUES (?, ?, ?, ?, ?, ?)', 
            [customer_id, menu, price, qty, payment, total ]
        );

        const insertedTransactionId = result.insertId;

        const [insertedTransaction] = await pool.promise().query(
            'SELECT * FROM Transaction WHERE id = ?',
            [insertedTransactionId]
        );

        return insertedTransaction;

    };

};

module.exports = TransactionRepository;
