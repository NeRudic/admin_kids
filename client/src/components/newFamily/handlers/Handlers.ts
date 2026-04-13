import { createFamilyUrl } from "../../../api/family.api";
import { Void, NewFamilyInterface } from "../../../.types";
import { UseFormReset, UseFormSetError, FieldErrors } from "react-hook-form";

class Handlers {
  constructor(
    public reset: UseFormReset<NewFamilyInterface>,
    public modalHandler: Void,
    public setError: UseFormSetError<NewFamilyInterface>,
  ) {
    this.reset = reset;
    this.modalHandler = modalHandler;
    this.setError = setError;
  }

  onInvalid(formErrors: FieldErrors<NewFamilyInterface>) {
    console.log("Увага!", formErrors);
  }

  onSubmit = (data: NewFamilyInterface) => {
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

  async sendData(requestData: NewFamilyInterface) {
    try {
      const res = await fetch(createFamilyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        const errorMessage = await res.json();
        throw new Error(errorMessage.message || `Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("Data sent successfully!", data);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Data sent failed! Error:", err.message);
      } else {
        console.error("An unknown error occurred", err);
      }
    }

    this.reset();
    this.modalHandler();
  }
}

export default Handlers;
