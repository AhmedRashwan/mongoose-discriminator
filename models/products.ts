import { model } from "mongoose";
import { ProductSimpleDocument,ProductCustomDocument, ICustomProductCategory, SingleProductCategory, QuntifiableProductCategory, MultipleProductCategory } from "./types";
import { customProductSchema, quntifiableProductCategorySchema, simpleProductSchema, singleProductCategorySchema } from "./schemas";


export const SimpleProduct = model<ProductSimpleDocument>(
  "simpleProduct",
  simpleProductSchema,
  "Products"
);

export const CustomProduct = SimpleProduct.discriminator(
"customProduct",
customProductSchema,
"Products"
);

export const SinglProductCategory = model<SingleProductCategory>(
  "customProduct",
  singleProductCategorySchema,
  "Products"
);

export const MutliplProductCategory = SinglProductCategory.discriminator(
  "customProduct",
  quntifiableProductCategorySchema,
  "Products"
)

// export const QuntifiablProductCategor = model<QuntifiableProductCategory>(
//   "customProduct",
//   quntifiableProductCategorySchema,
//   "Products"
// )