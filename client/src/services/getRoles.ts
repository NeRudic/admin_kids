import axios from "axios";
import { IRoles } from "../.types";
import { getRolesUrl } from "../services/api/api";
import { Dispatch, SetStateAction } from "react";

let rolesPromise: Promise<IRoles> | null = null;

interface IGetData {
  message: IRoles;
}

export async function getRoles(
  setState: Dispatch<SetStateAction<IRoles | null>>,
) {
  if (!rolesPromise) {
    rolesPromise = axios
      .get<IGetData>(getRolesUrl)
      .then((res) => res.data.message)
      .catch(() => {
        rolesPromise = null;
        throw new Error("Get Roles Error!");
      });
  }

  const data = await rolesPromise;
  setState(data);
}
