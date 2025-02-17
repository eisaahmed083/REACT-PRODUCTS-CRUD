import ProductCard from "./Componants/ProductCard";
import { products, formInputs,colors } from "./data";
import { useState } from "react";
import Modal from "./Componants/Ui/Model";
import Button from "./Componants/Ui/Button";
import Input from "./Componants/Ui/Input";
import Color from "./Componants/Ui/color";
import HashColor from "./Componants/Ui/HashColor";
import { formInputsValidation } from "./Validation";

export default function App() {
  const defaultFormValues = {
    title: "",
    description: "",
    image: "",
    price: "",
    colors: [],
    category: {
      name: "",
      image: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setformValues] = useState(defaultFormValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tempColors,setTempColor] = useState<string[]>([])
  function handleFormValeus(e: React.ChangeEvent<HTMLInputElement>) {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]:""
    });
  }
  function cancleform() {
    setformValues(defaultFormValues);
    setErrors({})
    close();
  }

  function submitForm(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();

    setErrors(formInputsValidation(formValues));
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputs = formInputs.map((formInput) => (
    <div className="flex flex-col gap-2" key={formInput.id}>
      <label htmlFor={formInput.id}>Product {formInput.label}</label>
      <Input
        type={formInput.type}
        id={formInput.id}
        name={formInput.name}
        onChange={handleFormValeus}
        value={formValues[formInput.name]}
      />
      {errors[formInput.name] && (
        <h4 className="text-red-500">{errors[formInput.name]}.</h4>
      )}{""}
      
    </div>
  ));

  const renderColors = colors.map((color) => (
    <Color 
      key={color} 
      color={color} 
      // onClick={() => 
      //   setTempColor([
      //     ...tempColors,
      //     color
      //   ]
          
      //   )
        
      // }
      onClick={() => 
        setTempColor((prevColors) => 
          prevColors.includes(color) ?
          prevColors : 
          [...prevColors, color] 
        )
      }

    />
  ));
  
  

  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
        {renderProductList}
      </div>
      <Modal
        isOpen={isOpen}
        title="Modal Title"
        description="Modal Description"
        close={close}
      >
        {renderFormInputs}
        <div className="flex gap-1 flex-wrap my-2 items-center">
        
        <HashColor tempColors={tempColors}></HashColor>
        </div>
        <div className="flex gap-1 flex-wrap my-2 items-center">
        
        {renderColors}
        </div>
        <div className="flex justify-between items-center space-x-2 mt-5">
          <Button ButtonColor="bg-blue-600" type="submit" onClick={submitForm}>
            SUBMIT
          </Button>
          <Button ButtonColor="bg-blue-600" type="button" onClick={cancleform}>
            CLOSE
          </Button>
        </div>
      </Modal>
      <Button ButtonColor="bg-blue-600" onClick={open}>
        OPEN
      </Button>
    </>
  );
}