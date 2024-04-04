export interface Review {
  rating: number;
  text: string;
}

export interface Product {
  id: string | number;
  image: string;
  title: string;
  price: number;
  description: string;
  reviews: Review[];
}

export interface Cart {
  products: {
    id: string | number;
    name: string;
    image: string;
    price: number;
  }[];
}
