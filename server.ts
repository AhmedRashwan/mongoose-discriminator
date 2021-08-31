import { CustomProduct, SimpleProduct } from "./models/products";

const mongoose = require('mongoose')
const data = 
main().then(()=>{
    console.log("Connected successfully")
}).catch((err)=>{
    console.log("Error",err);
})

// let simpleProduct = new SimpleProduct({
//     _id:1,
//     type:"simple",
//     storeId: "0",
//     title: "simple product title",
//     descriptionHtml: "simple product description",
//     options:"simple product options",
//     media:"simple product media",
//     handle: "simple product",
//     isArchived:true,
//     isVisible:true,
//     isDeleted: true,
//     locale: "simple",
//     createdAt: "2005-12-12",
//     updatedAt: "2005-12-12",
//     shortDescription: "simple",
//     collectionIds: ["simple"]
// });

let customProduct = new CustomProduct({
    _id:10,
    type:"custom",
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
        type: "q",
        isRequired: true,
        image:"",
        settings:{},
        products: [{ variant_id:"" }]
    }]
});

// simpleProduct.save().then(()=>{
// console.log("simple product saved succesfully");

// })
// .catch((err)=>{
// console.log("ERROR :- ",err);
// })

customProduct.save().then(()=>{
    console.log("custom product saved succesfully");
    })
    .catch((error:any)=>{
    console.log("ERROR :- ",error);
    })

// const options = {discriminatorKey:"Product_type"}
// enum ProductType{
//     simple="simple",
//     custom="custom"
// }
// let ProductSchema = new mongoose.Schema({
//     name : String,
//     descripion: String
// },options);


// let CustomProductSchema = new mongoose.Schema({
//     category:[{
//         name: {type: String, required: true},
//         type: {type:String, required: true},
//         isRequired:{type: Boolean, required: true}
//     }]
// },options);

// ProductSchema.methods.getDetails = function getDetails(){
//  console.log(`
//  Hello this product name is : ${this.name}
//  and the description is : ${this.descripion}`)
// };

// const Product = mongoose.model("productModel",ProductSchema);
// const CustomProduct = Product.discriminator("customProductModel", CustomProductSchema);

// const product = new Product({
//     name:"normal product",
//     descripion:"normal product description",
//     category:[{
//         name:"category name",
//         type:ProductType.custom,
//         isValid:false,
//         here:false
//     }]
// });

// const customProduct = new CustomProduct({
//     name:"custom product 2",
//     descripion:"custom product 2 description",
//     category:[{
//         name:"category name",
//         type:ProductType.custom,
//         isValid:false,
//         here:false
//     }]
// })


// console.log("Product_type :-",customProduct.Product_type);
// //  product.save().then(()=>{
// //         console.log("normal Product saved successfully");
// //     }).catch((err:any)=>{
// //     console.log("cann't Save Error :-", err);
// //     });



// //     customProduct.save().then(()=>{
// //         console.log("Custom Product saved successfully");
// //     }).catch((err:any)=>{
// //     console.log("cannot Save Custom product, Error :-", err);
// //     });


async function main(){
    await mongoose.connect('mongodb://root:root@localhost:27017', { dbName: 'demo' });
}