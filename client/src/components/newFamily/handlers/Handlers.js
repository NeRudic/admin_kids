import { createFamilyUrl } from "../../../api/family.api";

class Handlers {
  constructor(reset, modalHandler, setError) {
    this.reset = reset;
    this.modalHandler = modalHandler;
    this.setError = setError;
  }

  onInvalid(formErrors) {
    console.log("Увага!", formErrors);
  }

  onSubmit = (data) => {
    let hasError = false;

    if (!data?.adults?.length) {
      this.setError("adults", {
        type: "minLength",
        message: "Додайте хоча б одного дорослого!",
      });
      console.log("Додайте хоча б одного дорослого!");
      hasError = true;
    }

    if (!data?.children?.length) {
      this.setError("children", {
        type: "minLength",
        message: "Додайте хоча б одну дитину!",
      });
      console.log("Додайте хоча б одну дитину!");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    this.sendData(data);
  };

  sendData = (data) => {
    const requestData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    fetch(createFamilyUrl, requestData)
      .then((res) => console.log("Data sent seccesfully! Status: ", res.status))
      .catch((err) => console.log("Data sent failed! Error:", err));

    this.reset();
    this.modalHandler();
  };
}

export default Handlers;
