import { createFamilyUrl } from "./family.api";
import { NewFamilyInterface } from "../../.types";
import axios from "axios";

export const createFamily = async (requestData: NewFamilyInterface) => {
  try {
    const { data } = await axios.post<NewFamilyInterface>(
      createFamilyUrl,
      requestData,
    );
    console.log(`[Axios]Data sent: `, data);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e?.response) {
        console.error("[Axios]Status:", e.response.status);
        console.error("[Axios]Server message:", e.response.data.message);
      }
    } else if (e instanceof Error) {
      console.error("[Error]Data sent failed! Error: ", e.message);
    } else {
      console.error("[Unknown]Unexpected error!");
    }
  }
};
