const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
// Item Schema
const itemSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	category:{
		type: ObjectId, 
		ref: 'Category',
		required: true
	},
	description:{
		type: String
	},
	image_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Item = module.exports = mongoose.model('Item', itemSchema);

// Get Items
module.exports.getItems = (callback, limit) => {
	Item.find(callback).populate('category').limit(limit).exec(function(err, conversation){
    	//console.log();
	});
}

// Get Item
module.exports.getItemById = (id, callback) => {
	Item.findById(id, callback).populate('category').exec(function(err, conversation){
    	//console.log();
	});
}

// Add Item
module.exports.addItem = (item, callback) => {
	Item.create(item, callback);
}

// Update Item
module.exports.updateItem = (id, item, options, callback) => {
	var query = {_id: id};
	var update = {
		name: item.name,
		category: item.category,
		description: item.description,
		image_url: item.image_url
	}
	Item.findOneAndUpdate(query, update, options, callback);
}

// Delete Item
module.exports.removeItem = (id, callback) => {
	var query = {_id: id};
	Item.remove(query, callback);
}
