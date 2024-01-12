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
                    transactionHandler: createdNewTransaction,
                },
            };
            
        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    transactionHandler: null,
                },
            };
            
        }

    };
    
    /* ------------------- End Create New Transaction ------------------- */



    /* ------------------- Get List Transaction ------------------- */

    static async getListTransaction({ menu, price, name }){

        try {

            const getedListTransaction = await transactionRepository.getListTransaction({ menu, price, name });

            return {
                status: true,
                status_code: 201,
                message: "Data displayed successfully",
                data: {
                    searchTransactionHandle: getedListTransaction,
                },
            };
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    searchTransactionHandle: null,
                },
            };

        }

    };

    /* ------------------- End Get List Transaction ------------------- */


};

module.exports = TransactionService;