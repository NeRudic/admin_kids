import axios, { AxiosError } from "axios";

export const apiError = (e: Error | AxiosError | unknown) => {
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
};
