
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
  locale: string;
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
  products: ProductSimpleDocument[],
  settings:{}
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