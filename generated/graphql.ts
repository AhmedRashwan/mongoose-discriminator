import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ProductSimpleDocument, ProductVariantDocument, ProductCollectionDocument, ProductOptionDocument, ProductOptionValueDocument, StoreHomeCatalogDocument, HomeProductsSubDocument, HomeCollectionsSubDocument } from '../types';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: any;
  ConnectionLimitInt: any;
  Date: any;
  DateTime: any;
  Email: any;
  HTML: any;
  JSONObject: any;
  _FieldSet: any;
};






export type ArchiveProductsInput = {
  productIds: Array<Maybe<Scalars['ID']>>;
};

export type ArchiveProductsPayload = {
  __typename?: 'ArchiveProductsPayload';
  products: Array<Maybe<Product>>;
};

export type AssignOptionsToProductInput = {
  id: Scalars['ID'];
  storeId: Scalars['ID'];
  options: Array<Maybe<OptionsToAssignInput>>;
};

export type BulkProductOptionTranslationInput = {
  id: Scalars['ID'];
  translations?: Maybe<ProductOptionTranslationInput>;
};

export type BulkProductOptionValueTranslationInput = {
  id: Scalars['ID'];
  translations?: Maybe<ProductOptionValueTranslationInput>;
};

export type Category = Node & {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  isRequired: Scalars['Boolean'];
  type: CategoryType;
  image?: Maybe<Image>;
};

export enum CategoryType {
  Single = 'single',
  Multiple = 'multiple',
  Quantifiable = 'quantifiable'
}

export type CollectionAddProductsPayload = {
  __typename?: 'CollectionAddProductsPayload';
  collection?: Maybe<ProductCollection>;
};

export type CollectionInput = {
  id?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  image?: Maybe<ImageInput>;
  seo?: Maybe<ProductCollectionSeoInput>;
  productsToAdd?: Maybe<Array<Maybe<Scalars['String']>>>;
  translations?: Maybe<Array<Maybe<CollectionTranslationInput>>>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type CollectionRemoveProductsPayload = {
  __typename?: 'CollectionRemoveProductsPayload';
  collection?: Maybe<ProductCollection>;
};

export type CollectionTranslationInput = {
  title?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  seo?: Maybe<ProductCollectionSeoInput>;
  locale: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
};



export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  collection?: Maybe<ProductCollection>;
};

export type CreateMediaInput = {
  originalSource: Scalars['String'];
  alt?: Maybe<Scalars['String']>;
};

export type CreateProductMediaPayload = {
  __typename?: 'CreateProductMediaPayload';
  product?: Maybe<Product>;
};

export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  product: Product;
};

/** Currency codes. */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW'
}

export type CustomProductCategoryInput = {
  category_type: CategoryType;
  name: Scalars['String'];
  isRequired: Scalars['Boolean'];
  image?: Maybe<Scalars['String']>;
  products: Array<Maybe<CustomProductCategoryTypeInput>>;
  settings?: Maybe<CustomProductCategorySettingsInput>;
};

export type CustomProductCategorySettings = {
  __typename?: 'CustomProductCategorySettings';
  max_preselected?: Maybe<Scalars['Int']>;
};

export type CustomProductCategorySettingsInput = {
  max_preselected?: Maybe<Scalars['Int']>;
};

export type CustomProductCategoryType = {
  __typename?: 'CustomProductCategoryType';
  category_type: CategoryType;
  name: Scalars['String'];
  isRequired: Scalars['Boolean'];
  image?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<ProductVariant>>>;
  settings?: Maybe<CustomProductCategorySettings>;
};

export type CustomProductCategoryTypeInput = {
  variantId?: Maybe<Scalars['String']>;
  preselected?: Maybe<Scalars['Boolean']>;
};



export type Deletable = {
  isDeleted: Scalars['Boolean'];
};

export type DeleteProductMediaPayload = {
  __typename?: 'DeleteProductMediaPayload';
  product?: Maybe<Product>;
};

export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  deleted?: Maybe<Scalars['Boolean']>;
};


export type EmailRecord = {
  __typename?: 'EmailRecord';
  address?: Maybe<Scalars['Email']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type EmailRecordInput = {
  address?: Maybe<Scalars['Email']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export enum ErrorCode {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  CollectionNotFound = 'COLLECTION_NOT_FOUND',
  UnverifiedJwtToken = 'UNVERIFIED_JWT_TOKEN'
}

export type ExportProductsInput = {
  email: Scalars['String'];
  storeName: Scalars['String'];
  storeDomain: Scalars['String'];
  locale: Scalars['String'];
  timeDifference: Scalars['String'];
  filter?: Maybe<ProductsFilterInput>;
};

export type ExportProductsPayload = {
  __typename?: 'ExportProductsPayload';
  statusCode: Scalars['Int'];
  message: Scalars['String'];
};


export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
};

export type ImageInput = {
  id?: Maybe<Scalars['ID']>;
  altText?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};


export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float'];
  currencyCode: CurrencyCode;
};

export type MoneyInput = {
  amount: Scalars['Float'];
  currencyCode: CurrencyCode;
};

export type MoveInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  archiveProducts: ArchiveProductsPayload;
  updateProductsVisibility: UpdateProductsVisibilityPayload;
  createProduct: CreateProductPayload;
  updateProduct: UpdateProductPayload;
  deleteProduct: DeleteProductPayload;
  updateProductTranslations?: Maybe<Product>;
  createProductOption?: Maybe<ProductOption>;
  createProductOptionValue?: Maybe<ProductOptionValue>;
  assignOptionsToProduct?: Maybe<Product>;
  updateBulkProductOptionsTranslations?: Maybe<Array<Maybe<ProductOption>>>;
  updateBulkProductOptionValuesTranslations?: Maybe<Array<Maybe<ProductOptionValue>>>;
  createProductMedia?: Maybe<CreateProductMediaPayload>;
  deleteProductMedia?: Maybe<DeleteProductMediaPayload>;
  reorderProductMedia?: Maybe<ReorderProductMediaPayload>;
  exportProducts?: Maybe<ExportProductsPayload>;
  createProductVariant: ProductVariant;
  updateProductVariant: ProductVariant;
  deleteProductVariant: ProductVariant;
  updateProductVariantImage: ProductVariant;
  removeProductVariantImage: ProductVariant;
  createCollection: CreateCollectionPayload;
  updateCollection: UpdateCollectionPayload;
  addProductsToCollection: CollectionAddProductsPayload;
  removeProductsFromCollection: CollectionRemoveProductsPayload;
  updateCollectionTranslations?: Maybe<ProductCollection>;
  updateStoreHomeProducts?: Maybe<StoreHomeProducts>;
  updateStoreHomeCollections?: Maybe<StoreHomeCollections>;
  translateStoreHomeProducts?: Maybe<StoreHomeProducts>;
  translateStoreHomeCollections?: Maybe<StoreHomeCollections>;
};


export type MutationArchiveProductsArgs = {
  input: ArchiveProductsInput;
};


export type MutationUpdateProductsVisibilityArgs = {
  input: UpdateProductsVisibilityInput;
  locale: Scalars['String'];
};


export type MutationCreateProductArgs = {
  input: ProductInput;
  media?: Maybe<Array<CreateMediaInput>>;
  locale: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  input: ProductInput;
  locale: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductTranslationsArgs = {
  id: Scalars['ID'];
  translations: Array<ProductTranslationInput>;
};


export type MutationCreateProductOptionArgs = {
  input?: Maybe<ProductOptionInput>;
};


export type MutationCreateProductOptionValueArgs = {
  input?: Maybe<ProductOptionValueInput>;
};


export type MutationAssignOptionsToProductArgs = {
  input?: Maybe<AssignOptionsToProductInput>;
};


export type MutationUpdateBulkProductOptionsTranslationsArgs = {
  translations?: Maybe<Array<BulkProductOptionTranslationInput>>;
};


export type MutationUpdateBulkProductOptionValuesTranslationsArgs = {
  translations?: Maybe<Array<BulkProductOptionValueTranslationInput>>;
};


export type MutationCreateProductMediaArgs = {
  productId: Scalars['ID'];
  media: Array<CreateMediaInput>;
};


export type MutationDeleteProductMediaArgs = {
  productId: Scalars['ID'];
  mediaIds: Array<Scalars['ID']>;
};


export type MutationReorderProductMediaArgs = {
  productId: Scalars['ID'];
  moves: Array<MoveInput>;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationCreateProductVariantArgs = {
  input: ProductVariantInput;
};


export type MutationUpdateProductVariantArgs = {
  input: ProductVariantInput;
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductVariantImageArgs = {
  input: ProductVariantImageInput;
};


export type MutationRemoveProductVariantImageArgs = {
  storeId: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationCreateCollectionArgs = {
  input: CollectionInput;
  locale?: Maybe<Scalars['String']>;
};


export type MutationUpdateCollectionArgs = {
  input: CollectionInput;
  locale?: Maybe<Scalars['String']>;
};


export type MutationAddProductsToCollectionArgs = {
  id: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};


export type MutationRemoveProductsFromCollectionArgs = {
  id: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};


export type MutationUpdateCollectionTranslationsArgs = {
  id: Scalars['ID'];
  translations: Array<CollectionTranslationInput>;
};


export type MutationUpdateStoreHomeProductsArgs = {
  storeId: Scalars['ID'];
  input?: Maybe<StoreHomeProductsInput>;
};


export type MutationUpdateStoreHomeCollectionsArgs = {
  storeId: Scalars['ID'];
  input?: Maybe<StoreHomeCollectionsInput>;
};


export type MutationTranslateStoreHomeProductsArgs = {
  storeId: Scalars['ID'];
  input?: Maybe<StoreHomeProductsTranslationInput>;
};


export type MutationTranslateStoreHomeCollectionsArgs = {
  storeId: Scalars['ID'];
  input?: Maybe<StoreHomeCollectionsTranslationInput>;
};

export type Node = {
  id: Scalars['ID'];
};

export type NodeEdge = {
  cursor: Scalars['ConnectionCursor'];
  node?: Maybe<Node>;
};

export type OptionsToAssignInput = {
  optionId: Scalars['ID'];
  valueId: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  title: Scalars['String'];
  type?: Maybe<ProductType>;
  descriptionHtml?: Maybe<Scalars['HTML']>;
  shortDescription?: Maybe<Scalars['String']>;
  isVisible: Scalars['Boolean'];
  isArchived: Scalars['Boolean'];
  handle?: Maybe<Scalars['String']>;
  store: Store;
  storeId: Scalars['ID'];
  options: Array<ProductOption>;
  images: Array<Maybe<Image>>;
  totalVariants: Scalars['Int'];
  variants: ProductVariantConnection;
  collections: ProductCollectionConnection;
  seo?: Maybe<ProductSeo>;
  locale: Scalars['String'];
  locales: Array<Scalars['String']>;
  translations: Array<ProductTranslation>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  categories?: Maybe<Array<Maybe<CustomProductCategoryType>>>;
};


export type ProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['Boolean']>;
};

export type ProductCollection = Node & {
  __typename?: 'ProductCollection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  image?: Maybe<Image>;
  hasProduct: Scalars['Boolean'];
  productsCount: Scalars['Int'];
  products: ProductConnection;
  seo?: Maybe<ProductCollectionSeo>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  locale: Scalars['String'];
  isArchived?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  locales: Array<Scalars['String']>;
  translations?: Maybe<Array<Maybe<TranslatedCollection>>>;
  shortDescription?: Maybe<Scalars['String']>;
};


export type ProductCollectionHasProductArgs = {
  id: Scalars['ID'];
};


export type ProductCollectionProductsArgs = {
  connection?: Maybe<ProductsConnectionInput>;
  filter?: Maybe<ProductsFilterInput>;
};

export type ProductCollectionConnection = {
  __typename?: 'ProductCollectionConnection';
  edges?: Maybe<Array<Maybe<ProductCollectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCollection>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductCollectionConnectionInput = {
  after?: Maybe<Scalars['ConnectionCursor']>;
  before?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['ConnectionLimitInt']>;
  last?: Maybe<Scalars['ConnectionLimitInt']>;
  offset?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ProductCollectionSortByField>;
  sortOrder?: Maybe<SortOrder>;
};

export type ProductCollectionEdge = {
  __typename?: 'ProductCollectionEdge';
  cursor: Scalars['ConnectionCursor'];
  node?: Maybe<ProductCollection>;
};

export type ProductCollectionFilterInput = {
  storeId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ProductCollectionSeo = {
  __typename?: 'ProductCollectionSEO';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductCollectionSeoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum ProductCollectionSortByField {
  Id = 'id',
  Title = 'title',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  nodes: Array<Product>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['ConnectionCursor'];
  node?: Maybe<Product>;
};

export type ProductInput = {
  id?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ProductType>;
  specifications?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  options?: Maybe<Array<ProductOptionInput>>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  handle?: Maybe<Scalars['String']>;
  collectionsToJoin?: Maybe<Array<Scalars['ID']>>;
  collectionsToLeave?: Maybe<Array<Scalars['ID']>>;
  seo?: Maybe<ProductSeoInput>;
  variants?: Maybe<Array<Maybe<ProductVariantInput>>>;
  shortDescription?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<CustomProductCategoryInput>>>;
  translations?: Maybe<Array<Maybe<ProductTranslationInput>>>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  id: Scalars['ID'];
  name: Scalars['String'];
  values: Array<ProductOptionValue>;
  handle: Scalars['String'];
  position: Scalars['Int'];
  locale: Scalars['String'];
  locales: Array<Scalars['String']>;
  translations: Array<ProductOptionTranslation>;
};

export type ProductOptionInput = {
  id?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  position: Scalars['Int'];
  storeId?: Maybe<Scalars['ID']>;
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  name: Scalars['String'];
  locale: Scalars['String'];
};

export type ProductOptionTranslationInput = {
  name: Scalars['String'];
  locale: Scalars['String'];
};

export type ProductOptionValue = Node & {
  __typename?: 'ProductOptionValue';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  translations?: Maybe<Array<Maybe<ProductOptionValueTranslation>>>;
};

export type ProductOptionValueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  storeId?: Maybe<Scalars['ID']>;
  optionId?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
};

export type ProductOptionValueTranslation = {
  __typename?: 'ProductOptionValueTranslation';
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ProductOptionValueTranslationInput = {
  name: Scalars['String'];
  locale: Scalars['String'];
};

export type ProductSeo = {
  __typename?: 'ProductSEO';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ProductSeoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum ProductSortByField {
  Id = 'id',
  Title = 'title',
  Price = 'price',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export enum ProductStatusFilter {
  All = 'ALL',
  Active = 'ACTIVE',
  Draft = 'DRAFT'
}

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  title?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  seo?: Maybe<ProductSeo>;
  locale: Scalars['String'];
  shortDescription: Scalars['String'];
};

export type ProductTranslationInput = {
  title?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  seo?: Maybe<ProductSeoInput>;
  locale: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
};

export enum ProductType {
  Simple = 'SIMPLE',
  Custom = 'CUSTOM'
}

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  storeId: Scalars['ID'];
  store: Store;
  productId: Scalars['ID'];
  product: Product;
  handle: Scalars['String'];
  displayName: Scalars['String'];
  position: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  trackQuantity?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  price: Money;
  compareAtPrice?: Maybe<Money>;
  selectedOptions: Array<SelectedOption>;
  translations?: Maybe<Array<Maybe<TranslatedProductVariant>>>;
  locales: Array<Scalars['String']>;
  locale: Scalars['String'];
  image?: Maybe<Image>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  nodes: Array<ProductVariant>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProductVariantImageInput = {
  storeId: Scalars['ID'];
  id: Scalars['ID'];
  imageId?: Maybe<Scalars['String']>;
};

export type ProductVariantInput = {
  id?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Scalars['String']>>;
  sku?: Maybe<Scalars['String']>;
  trackQuantity?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  imageId?: Maybe<Scalars['String']>;
  price?: Maybe<MoneyInput>;
  compareAtPrice?: Maybe<MoneyInput>;
  productId?: Maybe<Scalars['ID']>;
  storeId?: Maybe<Scalars['ID']>;
};

export type ProductsConnectionInput = {
  after?: Maybe<Scalars['ConnectionCursor']>;
  before?: Maybe<Scalars['ConnectionCursor']>;
  first?: Maybe<Scalars['ConnectionLimitInt']>;
  last?: Maybe<Scalars['ConnectionLimitInt']>;
  offset?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ProductSortByField>;
  sortOrder?: Maybe<SortOrder>;
};

export type ProductsFilterInput = {
  storeIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isArchived?: Maybe<Scalars['Boolean']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  showDeleted?: Maybe<Scalars['Boolean']>;
  minPrice?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  status?: Maybe<ProductStatusFilter>;
  title?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  storeProductByHandle?: Maybe<Product>;
  products: ProductConnection;
  productOptions: Array<ProductOption>;
  productOptionsValues: Array<ProductOptionValue>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<ProductVariantConnection>;
  collection?: Maybe<ProductCollection>;
  storeCollectionByHandle?: Maybe<ProductCollection>;
  collections?: Maybe<ProductCollectionConnection>;
  storeHomeCatalog?: Maybe<StoreHomeCatalog>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type QueryStoreProductByHandleArgs = {
  storeId: Scalars['ID'];
  handle?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  connection?: Maybe<ProductsConnectionInput>;
  filter?: Maybe<ProductsFilterInput>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProductOptionsArgs = {
  storeId: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type QueryProductOptionsValuesArgs = {
  storeId: Scalars['ID'];
  optionId: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantsArgs = {
  productId: Scalars['ID'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type QueryStoreCollectionByHandleArgs = {
  storeId: Scalars['ID'];
  handle: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  connection?: Maybe<ProductCollectionConnectionInput>;
  filter?: Maybe<ProductCollectionFilterInput>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryStoreHomeCatalogArgs = {
  storeId: Scalars['ID'];
};

export type ReorderProductMediaPayload = {
  __typename?: 'ReorderProductMediaPayload';
  product?: Maybe<Product>;
};

export type SelectedOption = {
  __typename?: 'SelectedOption';
  option: ProductOption;
  value: ProductOptionValue;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  products: ProductConnection;
  collections?: Maybe<ProductCollectionConnection>;
  homeCatalog?: Maybe<StoreHomeCatalog>;
  homeProducts?: Maybe<StoreHomeProducts>;
  homeCollections?: Maybe<StoreHomeCollections>;
};


export type StoreProductsArgs = {
  connection?: Maybe<ProductsConnectionInput>;
  filter?: Maybe<ProductsFilterInput>;
  locale?: Maybe<Scalars['String']>;
};


export type StoreCollectionsArgs = {
  connection?: Maybe<ProductCollectionConnectionInput>;
  filter?: Maybe<ProductCollectionFilterInput>;
  locale?: Maybe<Scalars['String']>;
};

export type StoreHomeCatalog = {
  __typename?: 'StoreHomeCatalog';
  id: Scalars['ID'];
  collections?: Maybe<StoreHomeCollections>;
  products?: Maybe<StoreHomeProducts>;
};

export type StoreHomeCollections = {
  __typename?: 'StoreHomeCollections';
  id: Scalars['ID'];
  headerText?: Maybe<Scalars['String']>;
  collectionsPerRow?: Maybe<Scalars['Int']>;
  collections?: Maybe<Array<Maybe<ProductCollection>>>;
  locale: Scalars['String'];
  translations: Array<StoreHomeCollectionsTranslation>;
};

export type StoreHomeCollectionsInput = {
  headerText?: Maybe<Scalars['String']>;
  collectionsPerRow?: Maybe<Scalars['Int']>;
  collectionsId: Array<Scalars['ID']>;
  locale: Scalars['String'];
};

export type StoreHomeCollectionsTranslation = {
  __typename?: 'StoreHomeCollectionsTranslation';
  headerText?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
};

export type StoreHomeCollectionsTranslationInput = {
  headerText?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
};

export type StoreHomeProducts = {
  __typename?: 'StoreHomeProducts';
  id: Scalars['ID'];
  headerText?: Maybe<Scalars['String']>;
  fromCollection?: Maybe<ProductCollection>;
  productsDisplayNumber?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<Product>>>;
  locale?: Maybe<Scalars['String']>;
  translations: Array<StoreHomeProductsTranslation>;
};

export type StoreHomeProductsInput = {
  headerText?: Maybe<Scalars['String']>;
  fromCollectionId: Scalars['ID'];
  productsDisplayNumber?: Maybe<Scalars['Int']>;
  locale: Scalars['String'];
};

export type StoreHomeProductsTranslation = {
  __typename?: 'StoreHomeProductsTranslation';
  headerText?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
};

export type StoreHomeProductsTranslationInput = {
  headerText?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
};

export type TranslatedCollection = {
  __typename?: 'TranslatedCollection';
  title?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  seo?: Maybe<ProductCollectionSeo>;
  locale: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
};

export type TranslatedProductVariant = {
  __typename?: 'TranslatedProductVariant';
  title?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  selectedOptions: Array<SelectedOption>;
  locale: Scalars['String'];
};

export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  collection?: Maybe<ProductCollection>;
};

export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  product: Product;
};

export type UpdateProductsVisibilityInput = {
  isVisible: Scalars['Boolean'];
  productIds: Array<Maybe<Scalars['ID']>>;
};

export type UpdateProductsVisibilityPayload = {
  __typename?: 'UpdateProductsVisibilityPayload';
  updatedCount?: Maybe<Scalars['Int']>;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ArchiveProductsInput: ArchiveProductsInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ArchiveProductsPayload: ResolverTypeWrapper<Omit<ArchiveProductsPayload, 'products'> & { products: Array<Maybe<ResolversTypes['Product']>> }>;
  AssignOptionsToProductInput: AssignOptionsToProductInput;
  BulkProductOptionTranslationInput: BulkProductOptionTranslationInput;
  BulkProductOptionValueTranslationInput: BulkProductOptionValueTranslationInput;
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoryType: CategoryType;
  CollectionAddProductsPayload: ResolverTypeWrapper<Omit<CollectionAddProductsPayload, 'collection'> & { collection?: Maybe<ResolversTypes['ProductCollection']> }>;
  CollectionInput: CollectionInput;
  CollectionRemoveProductsPayload: ResolverTypeWrapper<Omit<CollectionRemoveProductsPayload, 'collection'> & { collection?: Maybe<ResolversTypes['ProductCollection']> }>;
  CollectionTranslationInput: CollectionTranslationInput;
  ConnectionCursor: ResolverTypeWrapper<Scalars['ConnectionCursor']>;
  ConnectionLimitInt: ResolverTypeWrapper<Scalars['ConnectionLimitInt']>;
  CreateCollectionPayload: ResolverTypeWrapper<Omit<CreateCollectionPayload, 'collection'> & { collection?: Maybe<ResolversTypes['ProductCollection']> }>;
  CreateMediaInput: CreateMediaInput;
  CreateProductMediaPayload: ResolverTypeWrapper<Omit<CreateProductMediaPayload, 'product'> & { product?: Maybe<ResolversTypes['Product']> }>;
  CreateProductPayload: ResolverTypeWrapper<Omit<CreateProductPayload, 'product'> & { product: ResolversTypes['Product'] }>;
  CurrencyCode: CurrencyCode;
  CustomProductCategoryInput: CustomProductCategoryInput;
  CustomProductCategorySettings: ResolverTypeWrapper<CustomProductCategorySettings>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CustomProductCategorySettingsInput: CustomProductCategorySettingsInput;
  CustomProductCategoryType: ResolverTypeWrapper<Omit<CustomProductCategoryType, 'products'> & { products?: Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>> }>;
  CustomProductCategoryTypeInput: CustomProductCategoryTypeInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Deletable: never;
  DeleteProductMediaPayload: ResolverTypeWrapper<Omit<DeleteProductMediaPayload, 'product'> & { product?: Maybe<ResolversTypes['Product']> }>;
  DeleteProductPayload: ResolverTypeWrapper<DeleteProductPayload>;
  Email: ResolverTypeWrapper<Scalars['Email']>;
  EmailRecord: ResolverTypeWrapper<EmailRecord>;
  EmailRecordInput: EmailRecordInput;
  ErrorCode: ErrorCode;
  ExportProductsInput: ExportProductsInput;
  ExportProductsPayload: ResolverTypeWrapper<ExportProductsPayload>;
  HTML: ResolverTypeWrapper<Scalars['HTML']>;
  Image: ResolverTypeWrapper<Image>;
  ImageInput: ImageInput;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Money: ResolverTypeWrapper<Money>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  MoneyInput: MoneyInput;
  MoveInput: MoveInput;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Category'] | ResolversTypes['Product'] | ResolversTypes['ProductCollection'] | ResolversTypes['ProductOption'] | ResolversTypes['ProductOptionValue'] | ResolversTypes['ProductVariant'];
  NodeEdge: never;
  OptionsToAssignInput: OptionsToAssignInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Product: ResolverTypeWrapper<ProductSimpleDocument>;
  ProductCollection: ResolverTypeWrapper<ProductCollectionDocument>;
  ProductCollectionConnection: ResolverTypeWrapper<Omit<ProductCollectionConnection, 'edges' | 'nodes'> & { edges?: Maybe<Array<Maybe<ResolversTypes['ProductCollectionEdge']>>>, nodes?: Maybe<Array<Maybe<ResolversTypes['ProductCollection']>>> }>;
  ProductCollectionConnectionInput: ProductCollectionConnectionInput;
  ProductCollectionEdge: ResolverTypeWrapper<Omit<ProductCollectionEdge, 'node'> & { node?: Maybe<ResolversTypes['ProductCollection']> }>;
  ProductCollectionFilterInput: ProductCollectionFilterInput;
  ProductCollectionSEO: ResolverTypeWrapper<ProductCollectionSeo>;
  ProductCollectionSEOInput: ProductCollectionSeoInput;
  ProductCollectionSortByField: ProductCollectionSortByField;
  ProductConnection: ResolverTypeWrapper<Omit<ProductConnection, 'edges' | 'nodes'> & { edges?: Maybe<Array<Maybe<ResolversTypes['ProductEdge']>>>, nodes: Array<ResolversTypes['Product']> }>;
  ProductEdge: ResolverTypeWrapper<Omit<ProductEdge, 'node'> & { node?: Maybe<ResolversTypes['Product']> }>;
  ProductInput: ProductInput;
  ProductOption: ResolverTypeWrapper<ProductOptionDocument>;
  ProductOptionInput: ProductOptionInput;
  ProductOptionTranslation: ResolverTypeWrapper<ProductOptionTranslation>;
  ProductOptionTranslationInput: ProductOptionTranslationInput;
  ProductOptionValue: ResolverTypeWrapper<ProductOptionValueDocument>;
  ProductOptionValueInput: ProductOptionValueInput;
  ProductOptionValueTranslation: ResolverTypeWrapper<ProductOptionValueTranslation>;
  ProductOptionValueTranslationInput: ProductOptionValueTranslationInput;
  ProductSEO: ResolverTypeWrapper<ProductSeo>;
  ProductSEOInput: ProductSeoInput;
  ProductSortByField: ProductSortByField;
  ProductStatusFilter: ProductStatusFilter;
  ProductTranslation: ResolverTypeWrapper<ProductTranslation>;
  ProductTranslationInput: ProductTranslationInput;
  ProductType: ProductType;
  ProductVariant: ResolverTypeWrapper<ProductVariantDocument>;
  ProductVariantConnection: ResolverTypeWrapper<Omit<ProductVariantConnection, 'nodes'> & { nodes: Array<ResolversTypes['ProductVariant']> }>;
  ProductVariantImageInput: ProductVariantImageInput;
  ProductVariantInput: ProductVariantInput;
  ProductsConnectionInput: ProductsConnectionInput;
  ProductsFilterInput: ProductsFilterInput;
  Query: ResolverTypeWrapper<{}>;
  ReorderProductMediaPayload: ResolverTypeWrapper<Omit<ReorderProductMediaPayload, 'product'> & { product?: Maybe<ResolversTypes['Product']> }>;
  SelectedOption: ResolverTypeWrapper<Omit<SelectedOption, 'option' | 'value'> & { option: ResolversTypes['ProductOption'], value: ResolversTypes['ProductOptionValue'] }>;
  SortOrder: SortOrder;
  Store: ResolverTypeWrapper<Omit<Store, 'products' | 'collections' | 'homeCatalog' | 'homeProducts' | 'homeCollections'> & { products: ResolversTypes['ProductConnection'], collections?: Maybe<ResolversTypes['ProductCollectionConnection']>, homeCatalog?: Maybe<ResolversTypes['StoreHomeCatalog']>, homeProducts?: Maybe<ResolversTypes['StoreHomeProducts']>, homeCollections?: Maybe<ResolversTypes['StoreHomeCollections']> }>;
  StoreHomeCatalog: ResolverTypeWrapper<StoreHomeCatalogDocument>;
  StoreHomeCollections: ResolverTypeWrapper<HomeCollectionsSubDocument>;
  StoreHomeCollectionsInput: StoreHomeCollectionsInput;
  StoreHomeCollectionsTranslation: ResolverTypeWrapper<StoreHomeCollectionsTranslation>;
  StoreHomeCollectionsTranslationInput: StoreHomeCollectionsTranslationInput;
  StoreHomeProducts: ResolverTypeWrapper<HomeProductsSubDocument>;
  StoreHomeProductsInput: StoreHomeProductsInput;
  StoreHomeProductsTranslation: ResolverTypeWrapper<StoreHomeProductsTranslation>;
  StoreHomeProductsTranslationInput: StoreHomeProductsTranslationInput;
  TranslatedCollection: ResolverTypeWrapper<TranslatedCollection>;
  TranslatedProductVariant: ResolverTypeWrapper<Omit<TranslatedProductVariant, 'selectedOptions'> & { selectedOptions: Array<ResolversTypes['SelectedOption']> }>;
  UpdateCollectionPayload: ResolverTypeWrapper<Omit<UpdateCollectionPayload, 'collection'> & { collection?: Maybe<ResolversTypes['ProductCollection']> }>;
  UpdateProductPayload: ResolverTypeWrapper<Omit<UpdateProductPayload, 'product'> & { product: ResolversTypes['Product'] }>;
  UpdateProductsVisibilityInput: UpdateProductsVisibilityInput;
  UpdateProductsVisibilityPayload: ResolverTypeWrapper<UpdateProductsVisibilityPayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ArchiveProductsInput: ArchiveProductsInput;
  ID: Scalars['ID'];
  ArchiveProductsPayload: Omit<ArchiveProductsPayload, 'products'> & { products: Array<Maybe<ResolversParentTypes['Product']>> };
  AssignOptionsToProductInput: AssignOptionsToProductInput;
  BulkProductOptionTranslationInput: BulkProductOptionTranslationInput;
  BulkProductOptionValueTranslationInput: BulkProductOptionValueTranslationInput;
  Category: Category;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  CollectionAddProductsPayload: Omit<CollectionAddProductsPayload, 'collection'> & { collection?: Maybe<ResolversParentTypes['ProductCollection']> };
  CollectionInput: CollectionInput;
  CollectionRemoveProductsPayload: Omit<CollectionRemoveProductsPayload, 'collection'> & { collection?: Maybe<ResolversParentTypes['ProductCollection']> };
  CollectionTranslationInput: CollectionTranslationInput;
  ConnectionCursor: Scalars['ConnectionCursor'];
  ConnectionLimitInt: Scalars['ConnectionLimitInt'];
  CreateCollectionPayload: Omit<CreateCollectionPayload, 'collection'> & { collection?: Maybe<ResolversParentTypes['ProductCollection']> };
  CreateMediaInput: CreateMediaInput;
  CreateProductMediaPayload: Omit<CreateProductMediaPayload, 'product'> & { product?: Maybe<ResolversParentTypes['Product']> };
  CreateProductPayload: Omit<CreateProductPayload, 'product'> & { product: ResolversParentTypes['Product'] };
  CustomProductCategoryInput: CustomProductCategoryInput;
  CustomProductCategorySettings: CustomProductCategorySettings;
  Int: Scalars['Int'];
  CustomProductCategorySettingsInput: CustomProductCategorySettingsInput;
  CustomProductCategoryType: Omit<CustomProductCategoryType, 'products'> & { products?: Maybe<Array<Maybe<ResolversParentTypes['ProductVariant']>>> };
  CustomProductCategoryTypeInput: CustomProductCategoryTypeInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Deletable: never;
  DeleteProductMediaPayload: Omit<DeleteProductMediaPayload, 'product'> & { product?: Maybe<ResolversParentTypes['Product']> };
  DeleteProductPayload: DeleteProductPayload;
  Email: Scalars['Email'];
  EmailRecord: EmailRecord;
  EmailRecordInput: EmailRecordInput;
  ExportProductsInput: ExportProductsInput;
  ExportProductsPayload: ExportProductsPayload;
  HTML: Scalars['HTML'];
  Image: Image;
  ImageInput: ImageInput;
  JSONObject: Scalars['JSONObject'];
  Money: Money;
  Float: Scalars['Float'];
  MoneyInput: MoneyInput;
  MoveInput: MoveInput;
  Mutation: {};
  Node: ResolversParentTypes['Category'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductCollection'] | ResolversParentTypes['ProductOption'] | ResolversParentTypes['ProductOptionValue'] | ResolversParentTypes['ProductVariant'];
  NodeEdge: never;
  OptionsToAssignInput: OptionsToAssignInput;
  PageInfo: PageInfo;
  Product: ProductSimpleDocument;
  ProductCollection: ProductCollectionDocument;
  ProductCollectionConnection: Omit<ProductCollectionConnection, 'edges' | 'nodes'> & { edges?: Maybe<Array<Maybe<ResolversParentTypes['ProductCollectionEdge']>>>, nodes?: Maybe<Array<Maybe<ResolversParentTypes['ProductCollection']>>> };
  ProductCollectionConnectionInput: ProductCollectionConnectionInput;
  ProductCollectionEdge: Omit<ProductCollectionEdge, 'node'> & { node?: Maybe<ResolversParentTypes['ProductCollection']> };
  ProductCollectionFilterInput: ProductCollectionFilterInput;
  ProductCollectionSEO: ProductCollectionSeo;
  ProductCollectionSEOInput: ProductCollectionSeoInput;
  ProductConnection: Omit<ProductConnection, 'edges' | 'nodes'> & { edges?: Maybe<Array<Maybe<ResolversParentTypes['ProductEdge']>>>, nodes: Array<ResolversParentTypes['Product']> };
  ProductEdge: Omit<ProductEdge, 'node'> & { node?: Maybe<ResolversParentTypes['Product']> };
  ProductInput: ProductInput;
  ProductOption: ProductOptionDocument;
  ProductOptionInput: ProductOptionInput;
  ProductOptionTranslation: ProductOptionTranslation;
  ProductOptionTranslationInput: ProductOptionTranslationInput;
  ProductOptionValue: ProductOptionValueDocument;
  ProductOptionValueInput: ProductOptionValueInput;
  ProductOptionValueTranslation: ProductOptionValueTranslation;
  ProductOptionValueTranslationInput: ProductOptionValueTranslationInput;
  ProductSEO: ProductSeo;
  ProductSEOInput: ProductSeoInput;
  ProductTranslation: ProductTranslation;
  ProductTranslationInput: ProductTranslationInput;
  ProductVariant: ProductVariantDocument;
  ProductVariantConnection: Omit<ProductVariantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['ProductVariant']> };
  ProductVariantImageInput: ProductVariantImageInput;
  ProductVariantInput: ProductVariantInput;
  ProductsConnectionInput: ProductsConnectionInput;
  ProductsFilterInput: ProductsFilterInput;
  Query: {};
  ReorderProductMediaPayload: Omit<ReorderProductMediaPayload, 'product'> & { product?: Maybe<ResolversParentTypes['Product']> };
  SelectedOption: Omit<SelectedOption, 'option' | 'value'> & { option: ResolversParentTypes['ProductOption'], value: ResolversParentTypes['ProductOptionValue'] };
  Store: Omit<Store, 'products' | 'collections' | 'homeCatalog' | 'homeProducts' | 'homeCollections'> & { products: ResolversParentTypes['ProductConnection'], collections?: Maybe<ResolversParentTypes['ProductCollectionConnection']>, homeCatalog?: Maybe<ResolversParentTypes['StoreHomeCatalog']>, homeProducts?: Maybe<ResolversParentTypes['StoreHomeProducts']>, homeCollections?: Maybe<ResolversParentTypes['StoreHomeCollections']> };
  StoreHomeCatalog: StoreHomeCatalogDocument;
  StoreHomeCollections: HomeCollectionsSubDocument;
  StoreHomeCollectionsInput: StoreHomeCollectionsInput;
  StoreHomeCollectionsTranslation: StoreHomeCollectionsTranslation;
  StoreHomeCollectionsTranslationInput: StoreHomeCollectionsTranslationInput;
  StoreHomeProducts: HomeProductsSubDocument;
  StoreHomeProductsInput: StoreHomeProductsInput;
  StoreHomeProductsTranslation: StoreHomeProductsTranslation;
  StoreHomeProductsTranslationInput: StoreHomeProductsTranslationInput;
  TranslatedCollection: TranslatedCollection;
  TranslatedProductVariant: Omit<TranslatedProductVariant, 'selectedOptions'> & { selectedOptions: Array<ResolversParentTypes['SelectedOption']> };
  UpdateCollectionPayload: Omit<UpdateCollectionPayload, 'collection'> & { collection?: Maybe<ResolversParentTypes['ProductCollection']> };
  UpdateProductPayload: Omit<UpdateProductPayload, 'product'> & { product: ResolversParentTypes['Product'] };
  UpdateProductsVisibilityInput: UpdateProductsVisibilityInput;
  UpdateProductsVisibilityPayload: UpdateProductsVisibilityPayload;
};

export type IntlDirectiveArgs = {  };

export type IntlDirectiveResolver<Result, Parent, ContextType = any, Args = IntlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ArchiveProductsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveProductsPayload'] = ResolversParentTypes['ArchiveProductsPayload']> = {
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Category']>, { __typename: 'Category' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CategoryType'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionAddProductsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionAddProductsPayload'] = ResolversParentTypes['CollectionAddProductsPayload']> = {
  collection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionRemoveProductsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionRemoveProductsPayload'] = ResolversParentTypes['CollectionRemoveProductsPayload']> = {
  collection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ConnectionCursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ConnectionCursor'], any> {
  name: 'ConnectionCursor';
}

export interface ConnectionLimitIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ConnectionLimitInt'], any> {
  name: 'ConnectionLimitInt';
}

export type CreateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionPayload'] = ResolversParentTypes['CreateCollectionPayload']> = {
  collection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductMediaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductMediaPayload'] = ResolversParentTypes['CreateProductMediaPayload']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateProductPayload'] = ResolversParentTypes['CreateProductPayload']> = {
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomProductCategorySettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomProductCategorySettings'] = ResolversParentTypes['CustomProductCategorySettings']> = {
  max_preselected?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomProductCategoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomProductCategoryType'] = ResolversParentTypes['CustomProductCategoryType']> = {
  category_type?: Resolver<ResolversTypes['CategoryType'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariant']>>>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['CustomProductCategorySettings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeletableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deletable'] = ResolversParentTypes['Deletable']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type DeleteProductMediaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteProductMediaPayload'] = ResolversParentTypes['DeleteProductMediaPayload']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteProductPayload'] = ResolversParentTypes['DeleteProductPayload']> = {
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export type EmailRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailRecord'] = ResolversParentTypes['EmailRecord']> = {
  address?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExportProductsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExportProductsPayload'] = ResolversParentTypes['ExportProductsPayload']> = {
  statusCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HtmlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HTML'], any> {
  name: 'HTML';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Image']>, { __typename: 'Image' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MoneyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Money'] = ResolversParentTypes['Money']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  archiveProducts?: Resolver<ResolversTypes['ArchiveProductsPayload'], ParentType, ContextType, RequireFields<MutationArchiveProductsArgs, 'input'>>;
  updateProductsVisibility?: Resolver<ResolversTypes['UpdateProductsVisibilityPayload'], ParentType, ContextType, RequireFields<MutationUpdateProductsVisibilityArgs, 'input' | 'locale'>>;
  createProduct?: Resolver<ResolversTypes['CreateProductPayload'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input' | 'locale'>>;
  updateProduct?: Resolver<ResolversTypes['UpdateProductPayload'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'input' | 'locale'>>;
  deleteProduct?: Resolver<ResolversTypes['DeleteProductPayload'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  updateProductTranslations?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductTranslationsArgs, 'id' | 'translations'>>;
  createProductOption?: Resolver<Maybe<ResolversTypes['ProductOption']>, ParentType, ContextType, RequireFields<MutationCreateProductOptionArgs, never>>;
  createProductOptionValue?: Resolver<Maybe<ResolversTypes['ProductOptionValue']>, ParentType, ContextType, RequireFields<MutationCreateProductOptionValueArgs, never>>;
  assignOptionsToProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationAssignOptionsToProductArgs, never>>;
  updateBulkProductOptionsTranslations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductOption']>>>, ParentType, ContextType, RequireFields<MutationUpdateBulkProductOptionsTranslationsArgs, never>>;
  updateBulkProductOptionValuesTranslations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductOptionValue']>>>, ParentType, ContextType, RequireFields<MutationUpdateBulkProductOptionValuesTranslationsArgs, never>>;
  createProductMedia?: Resolver<Maybe<ResolversTypes['CreateProductMediaPayload']>, ParentType, ContextType, RequireFields<MutationCreateProductMediaArgs, 'productId' | 'media'>>;
  deleteProductMedia?: Resolver<Maybe<ResolversTypes['DeleteProductMediaPayload']>, ParentType, ContextType, RequireFields<MutationDeleteProductMediaArgs, 'productId' | 'mediaIds'>>;
  reorderProductMedia?: Resolver<Maybe<ResolversTypes['ReorderProductMediaPayload']>, ParentType, ContextType, RequireFields<MutationReorderProductMediaArgs, 'productId' | 'moves'>>;
  exportProducts?: Resolver<Maybe<ResolversTypes['ExportProductsPayload']>, ParentType, ContextType, RequireFields<MutationExportProductsArgs, 'input'>>;
  createProductVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType, RequireFields<MutationCreateProductVariantArgs, 'input'>>;
  updateProductVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType, RequireFields<MutationUpdateProductVariantArgs, 'input'>>;
  deleteProductVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType, RequireFields<MutationDeleteProductVariantArgs, 'id'>>;
  updateProductVariantImage?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType, RequireFields<MutationUpdateProductVariantImageArgs, 'input'>>;
  removeProductVariantImage?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType, RequireFields<MutationRemoveProductVariantImageArgs, 'storeId' | 'id'>>;
  createCollection?: Resolver<ResolversTypes['CreateCollectionPayload'], ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'input'>>;
  updateCollection?: Resolver<ResolversTypes['UpdateCollectionPayload'], ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'input'>>;
  addProductsToCollection?: Resolver<ResolversTypes['CollectionAddProductsPayload'], ParentType, ContextType, RequireFields<MutationAddProductsToCollectionArgs, 'id' | 'productIds'>>;
  removeProductsFromCollection?: Resolver<ResolversTypes['CollectionRemoveProductsPayload'], ParentType, ContextType, RequireFields<MutationRemoveProductsFromCollectionArgs, 'id' | 'productIds'>>;
  updateCollectionTranslations?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType, RequireFields<MutationUpdateCollectionTranslationsArgs, 'id' | 'translations'>>;
  updateStoreHomeProducts?: Resolver<Maybe<ResolversTypes['StoreHomeProducts']>, ParentType, ContextType, RequireFields<MutationUpdateStoreHomeProductsArgs, 'storeId'>>;
  updateStoreHomeCollections?: Resolver<Maybe<ResolversTypes['StoreHomeCollections']>, ParentType, ContextType, RequireFields<MutationUpdateStoreHomeCollectionsArgs, 'storeId'>>;
  translateStoreHomeProducts?: Resolver<Maybe<ResolversTypes['StoreHomeProducts']>, ParentType, ContextType, RequireFields<MutationTranslateStoreHomeProductsArgs, 'storeId'>>;
  translateStoreHomeCollections?: Resolver<Maybe<ResolversTypes['StoreHomeCollections']>, ParentType, ContextType, RequireFields<MutationTranslateStoreHomeCollectionsArgs, 'storeId'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Category' | 'Product' | 'ProductCollection' | 'ProductOption' | 'ProductOptionValue' | 'ProductVariant', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NodeEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NodeEdge'] = ResolversParentTypes['NodeEdge']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Product']>, { __typename: 'Product' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ProductType']>, ParentType, ContextType>;
  descriptionHtml?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isArchived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['Image']>>, ParentType, ContextType>;
  totalVariants?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variants?: Resolver<ResolversTypes['ProductVariantConnection'], ParentType, ContextType, RequireFields<ProductVariantsArgs, 'reverse'>>;
  collections?: Resolver<ResolversTypes['ProductCollectionConnection'], ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ProductSEO']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locales?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductTranslation']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomProductCategoryType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollection'] = ResolversParentTypes['ProductCollection']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductCollection']>, { __typename: 'ProductCollection' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  hasProduct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ProductCollectionHasProductArgs, 'id'>>;
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<ProductCollectionProductsArgs, never>>;
  seo?: Resolver<Maybe<ResolversTypes['ProductCollectionSEO']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isArchived?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isVisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  locales?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['TranslatedCollection']>>>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollectionConnection'] = ResolversParentTypes['ProductCollectionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCollectionEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCollection']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollectionEdge'] = ResolversParentTypes['ProductCollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCollectionSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCollectionSEO'] = ResolversParentTypes['ProductCollectionSEO']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductOption']>, { __typename: 'ProductOption' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['ProductOptionValue']>, ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locales?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductOptionTranslation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionTranslation'] = ResolversParentTypes['ProductOptionTranslation']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionValue'] = ResolversParentTypes['ProductOptionValue']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductOptionValue']>, { __typename: 'ProductOptionValue' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductOptionValueTranslation']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionValueTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionValueTranslation'] = ResolversParentTypes['ProductOptionValueTranslation']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSEO'] = ResolversParentTypes['ProductSEO']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTranslation'] = ResolversParentTypes['ProductTranslation']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ProductSEO']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ProductVariant']>, { __typename: 'ProductVariant' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trackQuantity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  compareAtPrice?: Resolver<Maybe<ResolversTypes['Money']>, ParentType, ContextType>;
  selectedOptions?: Resolver<Array<ResolversTypes['SelectedOption']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['TranslatedProductVariant']>>>, ParentType, ContextType>;
  locales?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantConnection'] = ResolversParentTypes['ProductVariantConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  storeProductByHandle?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryStoreProductByHandleArgs, 'storeId'>>;
  products?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<QueryProductsArgs, never>>;
  productOptions?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType, RequireFields<QueryProductOptionsArgs, 'storeId'>>;
  productOptionsValues?: Resolver<Array<ResolversTypes['ProductOptionValue']>, ParentType, ContextType, RequireFields<QueryProductOptionsValuesArgs, 'storeId' | 'optionId'>>;
  productVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType, RequireFields<QueryProductVariantArgs, 'id'>>;
  productVariants?: Resolver<Maybe<ResolversTypes['ProductVariantConnection']>, ParentType, ContextType, RequireFields<QueryProductVariantsArgs, 'productId'>>;
  collection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType, RequireFields<QueryCollectionArgs, 'id'>>;
  storeCollectionByHandle?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType, RequireFields<QueryStoreCollectionByHandleArgs, 'storeId' | 'handle'>>;
  collections?: Resolver<Maybe<ResolversTypes['ProductCollectionConnection']>, ParentType, ContextType, RequireFields<QueryCollectionsArgs, never>>;
  storeHomeCatalog?: Resolver<Maybe<ResolversTypes['StoreHomeCatalog']>, ParentType, ContextType, RequireFields<QueryStoreHomeCatalogArgs, 'storeId'>>;
};

export type ReorderProductMediaPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReorderProductMediaPayload'] = ResolversParentTypes['ReorderProductMediaPayload']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectedOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectedOption'] = ResolversParentTypes['SelectedOption']> = {
  option?: Resolver<ResolversTypes['ProductOption'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['ProductOptionValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Store']>, { __typename: 'Store' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;

  products?: Resolver<ResolversTypes['ProductConnection'], { __typename: 'Store' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType, RequireFields<StoreProductsArgs, never>>;
  collections?: Resolver<Maybe<ResolversTypes['ProductCollectionConnection']>, { __typename: 'Store' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType, RequireFields<StoreCollectionsArgs, never>>;
  homeCatalog?: Resolver<Maybe<ResolversTypes['StoreHomeCatalog']>, { __typename: 'Store' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  homeProducts?: Resolver<Maybe<ResolversTypes['StoreHomeProducts']>, { __typename: 'Store' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  homeCollections?: Resolver<Maybe<ResolversTypes['StoreHomeCollections']>, { __typename: 'Store' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreHomeCatalogResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreHomeCatalog'] = ResolversParentTypes['StoreHomeCatalog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  collections?: Resolver<Maybe<ResolversTypes['StoreHomeCollections']>, ParentType, ContextType>;
  products?: Resolver<Maybe<ResolversTypes['StoreHomeProducts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreHomeCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreHomeCollections'] = ResolversParentTypes['StoreHomeCollections']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  headerText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionsPerRow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  collections?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCollection']>>>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['StoreHomeCollectionsTranslation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreHomeCollectionsTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreHomeCollectionsTranslation'] = ResolversParentTypes['StoreHomeCollectionsTranslation']> = {
  headerText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreHomeProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreHomeProducts'] = ResolversParentTypes['StoreHomeProducts']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  headerText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromCollection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  productsDisplayNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['StoreHomeProductsTranslation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreHomeProductsTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreHomeProductsTranslation'] = ResolversParentTypes['StoreHomeProductsTranslation']> = {
  headerText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslatedCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslatedCollection'] = ResolversParentTypes['TranslatedCollection']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ProductCollectionSEO']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TranslatedProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['TranslatedProductVariant'] = ResolversParentTypes['TranslatedProductVariant']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selectedOptions?: Resolver<Array<ResolversTypes['SelectedOption']>, ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionPayload'] = ResolversParentTypes['UpdateCollectionPayload']> = {
  collection?: Resolver<Maybe<ResolversTypes['ProductCollection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProductPayload'] = ResolversParentTypes['UpdateProductPayload']> = {
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductsVisibilityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateProductsVisibilityPayload'] = ResolversParentTypes['UpdateProductsVisibilityPayload']> = {
  updatedCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ArchiveProductsPayload?: ArchiveProductsPayloadResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CollectionAddProductsPayload?: CollectionAddProductsPayloadResolvers<ContextType>;
  CollectionRemoveProductsPayload?: CollectionRemoveProductsPayloadResolvers<ContextType>;
  ConnectionCursor?: GraphQLScalarType;
  ConnectionLimitInt?: GraphQLScalarType;
  CreateCollectionPayload?: CreateCollectionPayloadResolvers<ContextType>;
  CreateProductMediaPayload?: CreateProductMediaPayloadResolvers<ContextType>;
  CreateProductPayload?: CreateProductPayloadResolvers<ContextType>;
  CustomProductCategorySettings?: CustomProductCategorySettingsResolvers<ContextType>;
  CustomProductCategoryType?: CustomProductCategoryTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Deletable?: DeletableResolvers<ContextType>;
  DeleteProductMediaPayload?: DeleteProductMediaPayloadResolvers<ContextType>;
  DeleteProductPayload?: DeleteProductPayloadResolvers<ContextType>;
  Email?: GraphQLScalarType;
  EmailRecord?: EmailRecordResolvers<ContextType>;
  ExportProductsPayload?: ExportProductsPayloadResolvers<ContextType>;
  HTML?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  JSONObject?: GraphQLScalarType;
  Money?: MoneyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NodeEdge?: NodeEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductCollection?: ProductCollectionResolvers<ContextType>;
  ProductCollectionConnection?: ProductCollectionConnectionResolvers<ContextType>;
  ProductCollectionEdge?: ProductCollectionEdgeResolvers<ContextType>;
  ProductCollectionSEO?: ProductCollectionSeoResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductOptionTranslation?: ProductOptionTranslationResolvers<ContextType>;
  ProductOptionValue?: ProductOptionValueResolvers<ContextType>;
  ProductOptionValueTranslation?: ProductOptionValueTranslationResolvers<ContextType>;
  ProductSEO?: ProductSeoResolvers<ContextType>;
  ProductTranslation?: ProductTranslationResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  ProductVariantConnection?: ProductVariantConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReorderProductMediaPayload?: ReorderProductMediaPayloadResolvers<ContextType>;
  SelectedOption?: SelectedOptionResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  StoreHomeCatalog?: StoreHomeCatalogResolvers<ContextType>;
  StoreHomeCollections?: StoreHomeCollectionsResolvers<ContextType>;
  StoreHomeCollectionsTranslation?: StoreHomeCollectionsTranslationResolvers<ContextType>;
  StoreHomeProducts?: StoreHomeProductsResolvers<ContextType>;
  StoreHomeProductsTranslation?: StoreHomeProductsTranslationResolvers<ContextType>;
  TranslatedCollection?: TranslatedCollectionResolvers<ContextType>;
  TranslatedProductVariant?: TranslatedProductVariantResolvers<ContextType>;
  UpdateCollectionPayload?: UpdateCollectionPayloadResolvers<ContextType>;
  UpdateProductPayload?: UpdateProductPayloadResolvers<ContextType>;
  UpdateProductsVisibilityPayload?: UpdateProductsVisibilityPayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  intl?: IntlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;