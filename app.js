const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

Category = require('./models/category');
Item = require('./models/item');
Transaction = require('./models/transaction');

// Connect to Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rudi:mongo123@ds145379.mlab.com:45379/meanstock');
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

/*
================================================= Category ===========================================================
*/
app.get('/api/categories', (req, res) => {
    Category.getCategories((err, categories) => {
        if (err) {
            throw err;
        }
        res.json(categories);
    });
});

app.get('/api/categories/:_id', (req, res) => {
    Category.getCategoryById(req.params._id, (err, category) => {
        if (err) {
            throw err;
        }
        res.json(category);
    });
});

app.post('/api/categories', (req, res) => {
    var category = req.body;
    Category.addCategory(category, (err, category) => {
        if (err) {
            throw err;
        }
        res.json(category);
    });
});

app.put('/api/categories/:_id', (req, res) => {
    var id = req.params._id;
    var category = req.body;
    Category.updateCategory(id, category, {}, (err, category) => {
        if (err) {
            throw err;
        }
        res.json(category);
    });
});

app.delete('/api/categories/:_id', (req, res) => {
    var id = req.params._id;
    Category.removeCategory(id, (err, category) => {
        if (err) {
            throw err;
        }
        res.json(category);
    });
});

/*
============================================================== Item ===================================================
*/

app.get('/api/items', (req, res) => {
    Item.getItems((err, items) => {
        if (err) {
            throw err;
        }
        res.json(items);
    });
});

app.get('/api/items/:_id', (req, res) => {
    Item.getItemById(req.params._id, (err, item) => {
        if (err) {
            throw err;
        }
        res.json(item);
    });
});

app.post('/api/items', (req, res) => {
    var item = req.body;
    Item.addItem(item, (err, item) => {
        if (err) {
            throw err;
        }
        res.json(item);
    });
});

app.put('/api/items/:_id', (req, res) => {
    var id = req.params._id;
    var item = req.body;
    Item.updateItem(id, item, {}, (err, item) => {
        if (err) {
            throw err;
        }
        res.json(item);
    });
});

app.delete('/api/items/:_id', (req, res) => {
    var id = req.params._id;
    Item.removeItem(id, (err, item) => {
        if (err) {
            throw err;
        }
        res.json(item);
    });
});

/*
=============================================== Transaction ===========================================================
*/
app.get('/api/summary/transactions/:date', (req, res) => {
    Transaction.getSummaryTransactions(req.params.date, (err, transactions) => {
        if (err) {
            throw err;
        }
        res.json(transactions);
    });
});

app.get('/api/transactions', (req, res) => {
    Transaction.getTransactions((err, transactions) => {
        if (err) {
            throw err;
        }
        res.json(transactions);
    });
});

app.get('/api/transactions/:_id', (req, res) => {
    Transaction.getTransactionById(req.params._id, (err, transaction) => {
        if (err) {
            throw err;
        }
        res.json(transaction);
    });
});

app.post('/api/transactions', (req, res) => {
    var transaction = req.body;
    Transaction.addTransaction(transaction, (err, transaction) => {
        if (err) {
            throw err;
        }
        res.json(transaction);
    });
});

app.put('/api/transactions/:_id', (req, res) => {
    var id = req.params._id;
    var transaction = req.body;
    Transaction.updateTransaction(id, transaction, {}, (err, transaction) => {
        if (err) {
            throw err;
        }
        res.json(transaction);
    });
});

app.delete('/api/transactions/:_id', (req, res) => {
    var id = req.params._id;
    Transaction.removeTransaction(id, (err, transaction) => {
        if (err) {
            throw err;
        }
        res.json(transaction);
    });
});

app.listen(3000);
console.log('Running on port 3000...');