import axios from "axios";
import { findFamiliesUrl } from "./api";
import { apiError } from "./api.error";
import { FamiliesDTO } from "../../.types";

export const findFamilies = async (query: string) => {
  const params = {
    query: query,
  };
  try {
    const { data } = await axios.get<FamiliesDTO>(findFamiliesUrl, {
      params,
    });
    console.log(`[Axios]Data get: `, data);

    return data;
  } catch (e) {
    apiError(e);
  }
};
