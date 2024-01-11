const transactionRepository = require("../repositories/transactionRepository");

class TransactionService {


    /* ------------------- Create New Transaction ------------------- */

    static async createNewTransaction({ customer_id, menu, price, qty, payment, total }) {

        try {

            const createdNewTransaction = await transactionRepository.createNewTransaction({
                customer_id, 
                menu, 
                price, 
                qty, 
                payment, 
                total
            });

            return {
                status: true,
                status_code: 201,
                message: "New transaction created successfully",
                data: {
                    createdNewTransaction: createdNewTransaction,
                },
            };
            
        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    createdNewTransaction: null,
                },
            };
            
        }

    };
    
    /* ------------------- End Create New Transaction ------------------- */


};

module.exports = TransactionService;