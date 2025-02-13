export interface IProduct {
  id: string | undefined;
  name: string;
  description: string;
  price: string;
  image: string;
  colors: string[];
  category: {
    name: string;
    image: string;
  };
}
