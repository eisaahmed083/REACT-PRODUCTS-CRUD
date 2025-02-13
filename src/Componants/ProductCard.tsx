import { spliceString } from "../Functions";
import { IProduct } from "../Interfaces";
import Button from "./Ui/Button";
import Image from "./Ui/Image";
interface Iprops {
    product: IProduct;
}


export default function ProductCard({ product }: Iprops) {
  return (
    <div className="border rounded-md p-2 flex flex-col gap-2">
      <Image
        imageAlt="Product Image"
        imageSrc={product.image}
        imageClassName="w-full h-40 object-cover rounded-md"
      />
      <h3>{product.name}</h3>
      <p className="text-sm text-gray-500 flex-grow">
        {spliceString(product.description, 50)}
      </p>
      <div className="flex items-center my-2 space-x-2">
        <span className="w-5 h-5 bg-red-600 rounded-full" />
        <span className="w-5 h-5 bg-red-600 rounded-full" />
        <span className="w-5 h-5 bg-red-600 rounded-full" />
      </div>
      <div className="flex justify-between items-center ">
        <h3>{product.price}</h3>

        <Image
          imageAlt="Product Image"
          imageSrc={product.category.image}
          imageClassName="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center space-x-2 mt-5">
        <Button ButtonColor="blue" ButtonColorHover="blue"
        >
          EDIT
        </Button>
        <Button ButtonColor="red" ButtonColorHover="red">
          DELETE
        </Button>

      </div>
    </div>
  );
}
