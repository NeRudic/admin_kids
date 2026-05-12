import { createFamilyUrl } from "./api/api";
import { IGrouppedFamily } from "../.types";
import axios from "axios";
import { apiError } from "./api/api.error";

export const createFamily = async (requestData: IGrouppedFamily) => {
  try {
    const { data } = await axios.post<IGrouppedFamily>(
      createFamilyUrl,
      requestData,
    );
    console.log(`[Axios]Data sent: `, data);
  } catch (e) {
    apiError(e);
  }
};
