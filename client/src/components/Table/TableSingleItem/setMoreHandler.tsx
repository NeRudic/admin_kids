import { useState } from "react";

export interface ISetMore {
  setMoreHandler: () => void;
  more: boolean;
}

export function moreHandler(): ISetMore {
  const [more, setMore] = useState(false);

  const setMoreHandler = () => {
    setMore((prev) => !prev);
  };

  return { setMoreHandler, more };
}
