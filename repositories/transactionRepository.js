const mysql = require('mysql2');
const pool = require("../config/config");

class TransactionRepository {

    static async createNewTransaction({ customer_id, menu, price, qty, payment }) {
    
        const total = price * qty;

        const [result] = await pool.query(
            'INSERT INTO Transaction (customer_id, menu, price, qty, payment, total ) VALUES (?, ?, ?, ?, ?, ?)', 
            [customer_id, menu, price, qty, payment, total ]
        );

        return result.insertId;

    };

};

module.exports = TransactionRepository;
