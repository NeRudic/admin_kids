import { createFamilyUrl } from "./api/api";
import { NewFamilyInterface } from "../.types";
import axios from "axios";
import { apiError } from "./api/api.error";

export const createFamily = async (requestData: NewFamilyInterface) => {
  try {
    const { data } = await axios.post<NewFamilyInterface>(
      createFamilyUrl,
      requestData,
    );
    console.log(`[Axios]Data sent: `, data);
  } catch (e) {
    apiError(e);
  }
};
