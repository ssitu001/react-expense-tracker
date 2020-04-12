const Transaction = require('../models/Transaction')

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find()
        
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

const addTransaction = async (req, res) => {
    try {
        const { amount, text } = req.body

        const transaction = await Transaction.create({ text, amount })

        return res.status(201).json({
            success: true,
            data: transaction,
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }

}

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params

        const transaction = await Transaction.deleteOne({ _id: id })

        return res.status(200).json({
            success: true,
            data: transaction,
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports = {
    getTransactions,
    addTransaction,
    deleteTransaction,
}