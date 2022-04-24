const express=require("express");
const CreateEntity=require("../models/CreateModels")

const router=express.Router();

router.get("/all",async(req,res)=>{
    try{
        const entity=await CreateEntity.find().lean().exec();
        return res.send(entity)
    }
    catch(err){
        return res.send(err)
    }
})

router.post("/create",async(req,res)=>{
    try{
        const entity=await CreateEntity.create(req.body);
        return res.send(entity)
    }
    catch(err){
        return res.send(err)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const entity=await CreateEntity.findById(req.params.id).lean().exec();
        return res.send(entity)
    }
    catch(err){
        return res.send(err)
    }
})




module.exports=router;


