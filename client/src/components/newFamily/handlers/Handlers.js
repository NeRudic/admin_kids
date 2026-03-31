export default function Handlers(reset, modalHandler, setError) {
  const onInvalid = (formErrors) => {
    console.log("Увага!", formErrors);
  };

  const onSubmit = (data) => {
    let hasError = false;

    if (!data?.adults?.length) {
      setError("adults", {
        type: "minLength",
        message: "Додайте хоча б одного дорослого!",
      });
      console.log("Додайте хоча б одного дорослого!");
      hasError = true;
    }

    if (!data?.children?.length) {
      setError("children", {
        type: "minLength",
        message: "Додайте хоча б одну дитину!",
      });
      console.log("Додайте хоча б одну дитину!");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    console.log(data);
    reset();
    modalHandler();
  };

  return { onInvalid, onSubmit };
}
