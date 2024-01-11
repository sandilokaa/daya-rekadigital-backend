const transactionService = require("../services/transactionService");

/* ------------------- Create New Transaction ------------------- */

const createNewTransaction = async(req, res) => {

    const { customer_id, menu, price, qty, payment, total } = req.body;

    const { status, status_code, message, data} = await transactionService.createNewTransaction({
        customer_id,
        menu,
        price,
        qty,
        payment,
        total
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Create New Transaction ------------------- */


module.exports = { createNewTransaction };