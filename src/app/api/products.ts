import { Product, Review } from "./types";

const products: Product[] = [];

export const getProducts = async (): Promise<Product[]> => {
  const product = await fetch("https://fakestoreapi.com/products");
  const data = await product.json();
  return data;
};

export const addReview = async (
  id: number,
  review: {
    rating: number;
    text: string;
  }
): Promise<Review[] | undefined> => {
  const product = await getProductById(id);
  if (product) {
    product.reviews.push(review);
  }
  return product?.reviews;
};

export const getProductById = async (
  id: number | string
): Promise<Product | undefined> => {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await product.json();
  return data;
};
