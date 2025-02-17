export const formInputsValidation = (formValues: {
    title: string;
    description: string;
    image: string;
    price: string;
  }) => {
    const errors: {
      title: string;
      description: string;
      image: string;
      price: string;
    } = {
      title: "",
      description: "",
      image: "",
      price: "",
    };
  
    if (formValues.title.trim() === "" ) {
      errors.title = "Title is required";
    }
    if (formValues.description.trim() === "" ) {
      errors.description = "Description is required";
    }
    if (formValues.image.trim() === "" ) {
      errors.image = "Image is required";
    }
    if (formValues.price.trim() === "" ) {
      errors.price = "Price is required";
    }
  
    return errors;
};