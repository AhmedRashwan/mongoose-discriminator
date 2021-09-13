import { Schema } from "mongoose";
const button
const appearanceSchema=new Schema({
  hero:{
    buttons:[buttonSchema]
  }
})
const storeSchema=new Schema({
  appearance:appearanceSchema,
  name:String
})