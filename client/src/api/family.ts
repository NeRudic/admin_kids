import { createFamilyUrl } from "./family.api";
import { NewFamilyInterface } from "../.types";

export const createFamily = async (requestData: NewFamilyInterface) => {
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
};
