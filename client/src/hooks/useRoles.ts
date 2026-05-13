import { getRoles } from "../services/getRoles";
import { useState, useEffect } from "react";
import { IRoles } from "../.types";

export const useRoles = () => {
  const [roles, setRoles] = useState<IRoles[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        await getRoles(setRoles);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return roles;
};
