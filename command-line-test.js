var mongoose = require('mongoose'),Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/meanshop_cli');

var ProductSchema = new Schema({
description : String,
published : Boolean,
stock : { type: Number, min: 0 },
title : { type: String, required: true },
price : { type: Number, required: true },
updated_at : { type: Date, default: Date.now },
});

var Product = mongoose.model('Product', ProductSchema);