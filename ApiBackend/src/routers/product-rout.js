const express = require("express");
const  Product = require("../models/product")
const router = new express.Router();

//Insert product api
router.post("/Product",async(req,res)=>{
    try{

      var newProduct =new Product();
      newProduct.productId= req.body.productId;
      newProduct.productName= req.body.productName;
      newProduct.qtyPerUnit= req.body.qtyPerUnit;
      newProduct.unitPrice= req.body.unitPrice;
      newProduct.unitInStock= req.body.unitInStock;
      newProduct.discontinued= req.body.discontinued;
      newProduct.categoryId= req.body.categoryId;
      newProduct.categoryName= req.body.categoryName;

     console.log(req.body)
     const inserProduct = await newProduct.save();
     res.send(inserProduct)
    }catch(e){
      res.status(400).send(e)
    }
})

// Read product api
router.get("/Product",async(req,res)=>{
    try{
       const getProduct = await Product.find({});
   res.send(getProduct)
 
    }catch(e){
      res.status(201).send(e)
    }
})

// Read particular product api
router.get("/Product/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getProduct = await Product.findById(_id);
   res.send(getProduct)
    }catch(e){
      res.status(201).send(e)
    }
})

// update product list api
router.patch("/Product/:_id",async(req,res)=>{
    try{
       const  _id = req.params._id;
       console.log(req.body)
       const getProduct = await Product.findByIdAndUpdate(_id,req.body, { new : true  
       });
   res.send(getProduct)
    }catch(e){
      res.status(500).send(e)
    }
})

// delete product list api
router.delete("/Product/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getProduct = await Product.findByIdAndDelete(req.params.id);
   res.send(getProduct)
 
    }catch(e){
      res.status(500).send(e)
    }
})

module.exports = router;

