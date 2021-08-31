import { Model, Schema, SchemaType } from "mongoose";
import {
  ProductSimpleDocument,
  ProductCategoryType,
  ProductCustomDocument,
  ICustomProductCategory,
  SingleProductCategory,
  MultipleProductCategory,
  QuntifiableProductCategory,
} from "./types";



const product_type_options = { descriminatorKey:"product_type", versionKey: false };

export const simpleProductSchema = new Schema<ProductSimpleDocument>(
  {
    _id: { type: String, required: true },
    type: { type: String, required: true, enum: ["simple"] },
    storeId: { type: String, required: true },
    title: { type: String, required: true },
    descriptionHtml: { type: String, required: true },
    options: [{ type: String, required: true }],
    media: [{ type: String, required: true }],
    handle: { type: String, required: true },
    isArchived: { type: Boolean, required: true },
    isVisible: { type: Boolean, required: true },
    isDeleted: { type: Boolean, required: true },
    locale: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    shortDescription: { type: String, required: true },
    collectionIds: [{ type: String, required: true }],
  },
  product_type_options
);



//   type: { type:String , enum:["single","multiple","quantifiable"], required:true },
//   settings:{ type:Object },
//   products: [{ type:Object, required:true }]

/**
 * 
 */

 const category_type_options = { descriminatorKey:"category_type", versionKey: false };
 export const singleProductCategorySchema = new Schema<SingleProductCategory>({
   name: {type:String},
   isRequired:{type:Boolean},
   image:{type:String},
 },category_type_options);
 
 export const multipleProductCategorySchema = new Schema<MultipleProductCategory>({
   name: {type:String},
   isRequired:{type:Boolean},
   image:{type:String},
   settings:{type:Object,required:true}
 },category_type_options);
 
 export const quntifiablesetting = new Schema({
     settings: {type:Object, required:true},
     variant_id : {type:String,required:true}
 })
 export const quntifiableProductCategorySchema = new Schema<QuntifiableProductCategory>({
   name: {type:String},
   isRequired:{type:Boolean},
   image:{type:String},
   products:[quntifiablesetting]
 },category_type_options);
 
 
 const CustomProductCategoryShema = new Schema({
    name: { type:String, required:true },
    isRequired: {type:Boolean, required:true },
    image: { type:String },
    additionalFields:[singleProductCategorySchema]
  }); 
const attachArray:SchemaType=CustomProductCategoryShema.path("additionalFields")

export const customProductSchema = new Schema<ProductCustomDocument>(
  {
    _id: { type: String, required: true },
    type: { type: String, required: true, enum: ["custom"] },
    storeId: { type: String, required: true },
    title: { type: String, required: true },
    descriptionHtml: { type: String, required: true },
    options: [{ type: String, required: true }],
    media: [{ type: String, required: true }],
    handle: { type: String, required: true },
    isArchived: { type: Boolean, required: true },
    isVisible: { type: Boolean, required: true },
    isDeleted: { type: Boolean, required: true },
    locale: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    shortDescription: { type: String, required: true },
    collectionIds: [{ type: String, required: true }],
    categories:{type:[CustomProductCategoryShema], required: true,validate: [(value:any) => value.length > 0, 'categories not found']}
  },
  product_type_options
);


