'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 1 },
  description: String
});

// VIRTUALS Example
/* Returns the products's first name, which we will define
 * to be everything up to the first space in the name.
 * For instance, "Baked Beans" -> "Baked" */
ProductSchema.virtual('firstName').get(function () {
    var names = this.name.split(' ');
    return names[0];
});

/* Returns the products's last name, which we will define
 * to be everything after the last space in the name.
 * For instance, "Baked Beans" -> "Beans" */
ProductSchema.virtual('lastName').get(function () {
    var names = this.name.split(' ');
    return names[names.length - 1];
});

export default mongoose.model('Product', ProductSchema);
