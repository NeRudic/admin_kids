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

    console.log(data);

    this.sendData(data);
  };

  async sendData(requestData) {
    try {
      const res = await fetch(createFamilyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        throw new Error(res.message || `Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("Data sent successfully!", data);
    } catch (err) {
      console.error("Data sent failed! Error:", err.message);
    }

    this.reset();
    this.modalHandler();
  }
}

export default Handlers;
