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


type FormFieldName = "title" | "description" | "image" | "price";

export interface IFormInput {
  id: string;
  name: FormFieldName;
  label: string;
  type: string;
}


