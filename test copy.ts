import {Schema,model} from "mongoose"
const propertiesSchema = new Schema({
    name: { type: String },
  },
  { discriminatorKey: 'type', _id: false });
  
  const collectionSchema = new Schema({
    name: { type: String },
    properties: [propertiesSchema]
  });
  
  const propertiesArray:any = collectionSchema.path(`properties`);
  
  propertiesArray.discriminator(`type1`,
   new Schema({ type1: {type:String,required:true}  }, { _id: false })
  );
  
  propertiesArray.discriminator(`type2`,
   new Schema({ type2: {type:String,required:true} }, { _id: false })
  );
  
  const Collection = model('Collection', collectionSchema);
  const Clone = model('Clone', Collection.schema.clone());
  
  const data = {
    name: "Collection",
    properties: [
      { type: "type2", type2: "type1-1" },
  
    ]
  }
  
  
  console.log(new Collection(data));
  new Collection(data).save((err,d)=>{
      console.log(err,d)
  })
  console.log(new Clone(data));