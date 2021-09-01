
import { Model } from "mongoose";

export type RequireOne<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  {
    [P in K]-?: T[P];
  };

export type IntlValues<T extends { locale: string }> = {
  [locale: string]: RequireOne<T, "locale">;
};

export type Context = {
  actions: {
    uploadImageFromUrl: (url, id) => void;
  };
  models: {
    Product: Model<ProductSimpleDocument>;
    ProductCollection: Model<ProductCollectionDocument>;
    ProductOption: Model<ProductOptionDocument>;
    ProductVariant: Model<ProductVariantDocument>;
    ProductOptionValue: Model<ProductOptionValueDocument>;
    PendingProduct: Model<PendingProductVariantDocument>;
    StoreHomeCatalog: Model<StoreHomeCatalogDocument>;
  };
  collections: {

  };
  dataSources: {

  };
  locale: string;
};

export interface HomeCollectionsSubDocument {
  id?: string; // value will be storeId - used just in resolver
  headerText?: string;
  collectionsPerRow?: number;
  collectionsId?: string[];
  locale: string;
  translations: IntlValues<HomeCollectionsSubDocument>;
}

export interface HomeProductsSubDocument {
  id?: string; // value will be storeId - used just in resolver
  headerText?: string;
  fromCollectionId?: string;
  productsDisplayNumber?: number;
  locale: string;
  translations: IntlValues<HomeProductsSubDocument>;
}

export interface StoreHomeCatalogDocument {
  _id: string; // value will be storeId
  collections?: HomeCollectionsSubDocument;
  products?: HomeProductsSubDocument;
}

export interface Money {
  amount: number;

}

export interface ProductVariantDocument {
  type: "variant";
  _id: string;
  productId: string;
  storeId: string;
  sku: string;
  trackQuantity: boolean;
  quantity: number;
  price: Money;
  compareAtPrice: Money;
  selectedOptionsIds: string[];
  selectedOptionValuesIds: string[];
  imageId: string;
  isDeleted: boolean;
}

export type OptionType = "string" | "number" | "color";

export interface ProductOptionDocument {
  _id: string;
  name: string;
  handle: string;
  storeId: string;
  type: OptionType;
  allValues: string[];
  locale: string;
  translations: IntlValues<ProductOptionDocument>;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductOptionValueDocument {
  _id: string;
  handle: string;
  name: string;
  translations: IntlValues<ProductOptionDocument>;
  locale: string;
  storeId: string;
  optionId: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductSEO {
  title?: string;
  description?: string;
}

export interface IProductDocument{
  _id: string;
  storeId: string;
  title: string;
  descriptionHtml: string;
  options: string[];
  media: string[];
  handle: string;
  isArchived: boolean;
  isVisible: boolean;
  isDeleted: boolean;
  seo: ProductSEO;
  locale: string;
  translations?: IntlValues<ProductSimpleDocument>;
  createdAt: Date;
  updatedAt: Date;
  shortDescription: string;
  collectionIds: string[];
}
export interface ProductSimpleDocument extends IProductDocument {
  type: "simple";
};

export interface ProductCustomDocument extends IProductDocument {
  type: "custom";
  categories: ICustomProductCategory[]
};

export interface ICustomProductCategory{
  name: string,
  isRequired:boolean,
  image: string,
}

export interface SingleProductCategory extends ICustomProductCategory{
  type: "single",
  products: ProductSimpleDocument[]
}

export interface MultipleProductCategory extends ICustomProductCategory{
  type: "multiple",
  products: ProductSimpleDocument[]
}
export interface QuntifiableProductCategory extends ICustomProductCategory{
  type: "quntifiable",
  products: {
    products:ProductSimpleDocument[],
    settings: {
      min : number,
      max : number
    }
  }
}
export enum ProductCategoryType{
  single,
  multiple,
  quantifiable
}
export interface ProductCollectionSEO {
  title?: string;
  description?: string;
}
export interface ProductCollectionDocument {
  _id: string;
  title: string;
  storeId: string;
  handle: string;
  productIds: string[];
  description: string;
  descriptionHtml: string;
  isArchived: boolean;
  isVisible: boolean;
  isDeleted: boolean;
  imageId: string;
  locale: string;
  seo: ProductCollectionSEO;
  translations?: IntlValues<ProductCollectionDocument>;
  updatedAt: Date;
  createdAt: Date;
  shortDescription: string;
}
export interface AccessListDocument {
  _id: string;
  permissions: string[];
  resourceName: string;
  resourceId: string;
  userId: string;
}
export interface PendingProductVariantDocument {
  _id: string;
  endDate: Date;
  expireIn: string;
  createdAt: Date;
  isDeleted: boolean;
  variants: {
    id: string;
    quantity: string;
  }[];
  orderId: string;
}

export type ProductDocument = ProductSimpleDocument | ProductVariantDocument;
