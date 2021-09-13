import { Schema  ,model} from "mongoose";
import {
  HomeProductsSubDocument,
  HomeCollectionsSubDocument,
  StoreHomeCatalogDocument,
  ProductCollectionSEO,
  ProductCollectionDocument,
  ProductOptionDocument,
  ProductOptionValueDocument,
  Money,
  ProductVariantDocument,
  ProductSimpleDocument,
  ProductCategoryType,
  ProductCustomDocument,
  ProductSEO,
  PendingProductVariantDocument,
  ICustomProductCategory,
  SingleProductCategory,
  MultipleProductCategory,
  QuntifiableProductCategory,
} from "./types";

export const homeProductsSchema = new Schema<HomeProductsSubDocument>(
  {
    id: String,
    headerText: String,
    fromCollectionId: String,
    productsDisplayNumber: Number,
    locale: { type: String, required: true },
    translations: { type: Schema.Types.Mixed, required: true },
  },
  { versionKey: false, _id: false }
);

export const homeCollectionsSchema = new Schema<HomeCollectionsSubDocument>(
  {
    id: String,
    headerText: String,
    collectionsPerRow: Number,
    collectionsId: [String],
    locale: { type: String, required: true },
    translations: { type: Schema.Types.Mixed, required: true },
  },
  { versionKey: false, _id: false }
);

export const storeHomeCatalogSchema = new Schema<StoreHomeCatalogDocument>(
  {
    _id: { type: String, required: true },
    collections: homeCollectionsSchema,
    products: homeProductsSchema,
  },
  { versionKey: false }
);

export const productCollectionSeoSchema = new Schema<ProductCollectionSEO>(
  {
    title: String,
    description: String,
  },
  { versionKey: false, _id: false, id: false }
);
export const productCollectionSchema = new Schema<ProductCollectionDocument>(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    storeId: { type: String, required: true },
    handle: { type: String, required: true },
    productIds: [{ type: String, required: true }],
    description: {
      type: String,
      required: true,
    },
    descriptionHtml: { type: String, required: true },
    isArchived: { type: Boolean, required: true },
    isVisible: { type: Boolean, required: true },
    isDeleted: { type: Boolean, required: true },
    imageId: { type: String, default: null },
    locale: { type: String, required: true },
    seo: { type: productCollectionSeoSchema, required: true },
    translations: Schema.Types.Mixed,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    shortDescription: { type: String },
  },
  { versionKey: false }
);

export const productOptionSchema = new Schema<ProductOptionDocument>(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    handle: { type: String, required: true },
    storeId: { type: String, required: true },
    type: { type: String, required: true, enum: ["string", "number", "type"] },
    allValues: [{ type: String, required: true }],
    locale: { type: String, required: true },
    translations: { type: Schema.Types.Mixed, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { versionKey: false }
);

export const productOptionValueSchema = new Schema<ProductOptionValueDocument>(
  {
    _id: { type: String, required: true },
    handle: { type: String, required: true },
    name: { type: String, required: true },
    translations: { type: Schema.Types.Mixed, required: true },
    locale: { type: String, required: true },
    storeId: { type: String, required: true },
    optionId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { versionKey: false }
);

export const moneySchema = new Schema<Money>(
  {
    amount: { type: Number, required: true },
  
  },
  { versionKey: false, _id: false, id: false }
);

export const productVariantSchema = new Schema<ProductVariantDocument>(
  {
    _id: { type: String, required: true },
    type: { type: String, required: true, enum: ["variant"] },
    productId: { type: String, required: true },
    storeId: { type: String, required: true },
    sku: { type: String, required: true },
    trackQuantity: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
    price: { type: moneySchema, required: true },
    compareAtPrice: { type: moneySchema, required: true },
    selectedOptionsIds: [{ type: String, required: true }],
    selectedOptionValuesIds: [{ type: String, required: true }],
    imageId: { type: String, required: true },
    isDeleted: { type: Boolean, required: true },
  },
  { versionKey: false }
);

export const productSeoSchema = new Schema<ProductSEO>(
  {
    title: String,
    description: String,
  },
  { versionKey: false, _id: false, id: false }
);


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
    seo: { type: productSeoSchema, required: true },
    locale: { type: String, required: true },
    translations: Schema.Types.Mixed,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    shortDescription: { type: String, required: true },
    collectionIds: [{ type: String, required: true }],
  },
  product_type_options
);

/**
 * --------------------------
 * CustomProductCategorySchema
 * --------------------------- 
 * Schema descripe categories section in 
 * the custom product build 
 */
const customProductCategorySchema = new Schema({
  name: { type:String, required:true },

  category_type: { type:String , enum:["single","multiple","quantifiable"], required:true },
  isRequired: {type:Boolean, required:true },
  image: { type:String },
}, { discriminatorKey: 'category_type', _id: false }); 

/**
 * ----------------------
 * CustomProductSchema
 * ----------------------
 * Schema descripe Custom Product 
 */
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
    seo: { type: productSeoSchema, required: true },
    locale: { type: String, required: true },
    translations: Schema.Types.Mixed,
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    shortDescription: { type: String, required: true },
    collectionIds: [{ type: String, required: true }],
    categories:{type:[customProductCategorySchema], required: true}

    // categories:{type:[customProductCategorySchema], required: true,validate: [(value:any) => value.length > 0, 'categories mandatory but found']}
  },
  product_type_options
);
const categories:any = customProductSchema.path(`categories`);
  
categories.discriminator(`multiple`,
 new Schema<{settings:object}>({ settings: {type:Object,required:true}  }, { _id: false })
);

export const SimpleProduct = model<ProductSimpleDocument>(
  "Product",
  simpleProductSchema,
  "Products")
const Collection = SimpleProduct.discriminator('Collection', customProductSchema);
new Collection({
    _id:13,
        type:"custom",
        seo:{
            title: "String",
            description: "String", 
        },
        storeId: "0",
        title: "custom product title",
        descriptionHtml: "custom product description",
        options:"custom product options",
        media:"custom product media",
        handle: "custom product",
        isArchived:true,
        isVisible:true,
        isDeleted: true,
        locale: "custom",
        createdAt: "2005-12-12",
        updatedAt: "2005-12-12",
        shortDescription: "simple",
        collectionIds: ["custom"],
    categories:[{
        name: "category name",
        category_type:"single",
        isRequired: true,
        image:"",
     
       
    },{
        name: "category name", 
        category_type:"multiple",
        isRequired: true,
        image:""   
       
    }]
}).save((err,d)=>{
    console.log(err,d)
})
const category_type_options = { descriminatorKey:"category_type", versionKey: false };
export const singleProductCategorySchema = new Schema<SingleProductCategory>({
  name: {type:String},
  isRequired:{type:Boolean},
  image:{type:String},
},category_type_options);

export const multipleProductCategorySchema = new Schema<MultipleProductCategory>({

},category_type_options);

export const quntifiableProductCategorySchema = new Schema<QuntifiableProductCategory>({
  name: {type:String},
  isRequired:{type:Boolean},
  image:{type:String},
},category_type_options);

export const pendingProductSchema = new Schema<PendingProductVariantDocument>(
  {
    _id: { type: String, required: true },
    endDate: { type: Date, required: true },
    expireIn: { type: String, required: true },
    createdAt: { type: Date, required: true },
    isDeleted: { type: Boolean, required: true },
    variants: [
      {
        id: { type: String, required: true },
        quantity: { type: String, required: true },
      },
    ],
    orderId: { type: String, required: true },
  },
  { versionKey: false }
);
