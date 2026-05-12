import axios from "axios";
import { findFamiliesUrl } from "./api/api";
import { apiError } from "./api/api.error";
import { IGrouppedFamily } from "../.types";

interface IDataFamilies {
  message: IGrouppedFamily[];
}

export const findFamilies = async (query: string) => {
  const params = {
    query: query,
  };
  try {
    const {
      data: { message },
    } = await axios.get<IDataFamilies>(findFamiliesUrl, {
      params,
    });
    console.log(`[Axios]Data get: `, message);

    return message;
  } catch (e) {
    apiError(e);
  }
};
