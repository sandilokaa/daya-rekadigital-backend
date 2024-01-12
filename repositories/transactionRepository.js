const mysql = require('mysql2');
const { pool } = require("../config/config");

class TransactionRepository {


    /* ------------------- Create New Transaction ------------------- */

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


    /* ------------------- End Create New Transaction ------------------- */


    /* ------------------- Get List Transaction ------------------- */

    static async getListTransaction({ menu, price, name }) {
        let query = 'SELECT Transaction.*, Customer.name AS customer_name FROM Transaction';
        query += ' LEFT JOIN Customer ON Transaction.customer_id = Customer.id';
        query += ' WHERE 1';

        const values = [];

        if (menu) {
            query += ' AND Transaction.menu = ?';
            values.push(menu);
        }

        if (price) {
            query += ' AND Transaction.price = ?';
            values.push(price);
        }

        if (name) {
            query += ' AND Customer.name LIKE ?';
            values.push(name);
        }

        const [transactions] = await pool.promise().query(query, values);

        return transactions;
    }

    /* ------------------- End Get List Transaction ------------------- */

};

module.exports = TransactionRepository;
