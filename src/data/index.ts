import { IProduct,IFormInput } from "../Interfaces/index";

export const products: IProduct[] = [
  {
    id: "1",
    name: "Ferrari SF90 Stradale",
    description: "lorem ipsum dolor sit amet. One of the ",
    price: "$500,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["red", "blue", "yellow"],
    category: {
      name: "Supercar",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "2",
    name: "Lamborghini Aventador",
    description: "One of the most powerful supercars in the world.",
    price: "$600,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "orange", "white"],
    category: {
      name: "Supercar",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "3",
    name: "Porsche 911 Turbo S",
    description: "The legendary sports car from Porsche.",
    price: "$250,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["gray", "silver", "red"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "4",
    name: "Bugatti Chiron",
    description: "The fastest car in the world.",
    price: "$3,000,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Hypercar",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "5",
    name: "McLaren 720S",
    description: "A high-performance sports car from McLaren.",
    price: "$300,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["orange", "black", "white"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "6",
    name: "Aston Martin DBS Superleggera",
    description: "A grand tourer from Aston Martin.",
    price: "$350,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["gray", "blue", "black"],
    category: {
      name: "Grand Tourer",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "7",
    name: "Mercedes-AMG GT",
    description: "A high-performance sports car from Mercedes-AMG.",
    price: "$150,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["silver", "black", "red"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "8",
    name: "BMW M8 Competition",
    description: "A high-performance sports car from BMW.",
    price: "$130,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "9",
    name: "Audi R8",
    description: "A high-performance sports car from Audi.",
    price: "$170,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["red", "black", "white"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "10",
    name: "Ferrari 812 Superfast",
    description: "A front-engine V12 grand tourer from Ferrari.",
    price: "$350,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["red", "black", "white"],
    category: {
      name: "Grand Tourer",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "11",
    name: "Lamborghini Huracan",
    description: "A high-performance sports car from Lamborghini.",

    price: "$250,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "12",
    name: "Porsche Taycan",
    description: "An all-electric sports car from Porsche.",
    price: "$150,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "13",
    name: "Bugatti Veyron",
    description: "The original hypercar from Bugatti.",
    price: "$2,000,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Hypercar",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "14",
    name: "McLaren P1",
    description: "A hybrid hypercar from McLaren.",
    price: "$1,500,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Hypercar",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "15",
    name: "Aston Martin Vantage",
    description: "A high-performance sports car from Aston Martin.",
    price: "$150,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "Sports Car",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
  {
    id: "16",
    name: "Mercedes-AMG G63",
    description: "A high-performance SUV from Mercedes-AMG.",
    price: "$150,000",
    image:
      "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    colors: ["black", "blue", "white"],
    category: {
      name: "SUV",
      image:
        "https://car-images.bauersecure.com/wp-images/3695/ferrari-sf90-stradale.jpg",
    },
  },
];

export const formInputs: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Description",
    type: "text",
  },
  {
    id: "image",
    name: "image",
    label: "Image",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Price",
    type: "text",
  },

];


export const colors:string[] = [
  "#000000", 
  "#FFFFFF", 
  "#FF0000",  
  "#00FF00", 
  "#0000FF", 
  "#FFFF00", 
  "#FFA500", 
  "#800080", 
  "#00FFFF", 
  "#FFC0CB", 
  
];