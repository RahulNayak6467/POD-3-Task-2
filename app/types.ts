export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
}

export interface ApiProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type Category =
  | "smartphones"
  | "mens-shirts"
  | "mens-watches"
  | "furniture"
  | "laptops";

export type CategoriesProps =
  | "smartphones"
  | "laptops"
  | "mens-shirts"
  | "womens-dresses"
  | "skin-care"
  | "fragrances"
  | "furniture"
  | "sports-accessories"
  | "groceries"
  | "sunglasses"
  | "mens-watches"
  | "womens-watches";

export type CartItem = {
  id: number; // product id
  name: string; // product name
  meta: string;
  price: number; // current price

  qty: number; // quantity in cart
};
