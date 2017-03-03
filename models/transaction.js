const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

// Transaction Schema
const transactionSchema = mongoose.Schema({
    item: {
        type: ObjectId,
        ref: 'Item',
        required: true
    },
    transaction_date: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    buying_price: {
        type: Number,
        required: true
    },
    selling_price_TR: {
        type: Number,
        required: true
    },
    selling_price_direct: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Transaction = module.exports = mongoose.model('Transaction', transactionSchema);

// Get Summay Transactions
module.exports.getSummaryTransactions = (date, callback) => {
    Transaction.aggregate(
        [{
            $match: {
                transaction_date: date
            }
        }, {
            $group: {
                _id: "$item",
                total_qty: {
                    $sum: "$qty"
                },
                avg_buying_price: {
                    $avg: "$buying_price"
                },
                avg_selling_price_TR: {
                    $avg: "$selling_price_TR"
                },
                avg_selling_price_direct: {
                    $avg: "$selling_price_direct"
                }
            }
        }], callback);
}

// Get Transactions
module.exports.getTransactions = (callback, limit) => {
    Transaction.find(callback).populate({
        path: 'item',
        populate: {
            path: 'category'
        }
    }).limit(limit).exec(function(err, conversation) {

    });
}

// Get Transaction
module.exports.getTransactionById = (id, callback) => {
    Transaction.findById(id, callback).populate({
        path: 'item',
        populate: {
            path: 'category'
        }
    }).exec(function(err, conversation) {
        //console.log();
    });
}

// Add Transaction
module.exports.addTransaction = (transaction, callback) => {
    Transaction.create(transaction, callback);
}

// Update Transaction
module.exports.updateTransaction = (id, transaction, options, callback) => {
    var query = {
        _id: id
    };
    var update = {
        item: transaction.item,
        transaction_date: transaction.transaction_date,
        qty: transaction.qty,
        buying_price: transaction.buying_price,
        selling_price_TR: transaction.selling_price_TR,
        selling_price_direct: transaction.selling_price_direct
    }
    Transaction.findOneAndUpdate(query, update, options, callback);
}

// Delete Transaction
module.exports.removeTransaction = (id, callback) => {
    var query = {
        _id: id
    };
    Transaction.remove(query, callback);
}