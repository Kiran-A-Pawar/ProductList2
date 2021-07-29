
const express = require ('express');
const  Mongoose = require('mongoose');

const ProductSchema = new Mongoose.Schema({

       productId:{
          type :Number  
        },

       productName :{
           type : String  
       },
    
       qtyPerUnit :{
            type : Number
        },

        unitPrice  :{
            type : Number
        },

        unitInStock   :{
            type : Number
        },

        discontinued   :{
            type : Boolean
        },
        categoryId :{
            type : Number
        },
        categoryName :{
            type : String
        }
})

const Product = new Mongoose.model("Product", ProductSchema )
module.exports =  Product;

 
