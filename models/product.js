/**
 * imports 
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * model Schema
 */
const ProductSchema = Schema({
    name: String,
    price: { type: Number, default: 0},
    category: { type: String, enum: ['foods','technology','home'] },
    image: String 
})

/**
 * export teh model
 */
module.exports = mongoose.model('Product',ProductSchema)