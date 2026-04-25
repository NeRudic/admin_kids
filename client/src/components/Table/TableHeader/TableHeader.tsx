import { useEffect, useRef } from "react";
import { ITableHeader } from "../../../.types";

export default function TableHeader({
  button_label,
  placeholder,
  state,
  dataNotifier,
  children,
}: ITableHeader) {
  const firstRender = useRef(true);

  // Track the first render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Fetch debounce
    const timeoutID = setTimeout(() => {
      const data = state.inputValue.trim();
      if (data.length >= 3 || data.length === 0) {
        dataNotifier(data);
      }
    }, 500);

    return () => clearTimeout(timeoutID);
  }, [state.inputValue]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    state.setInputValue(e.target.value);
  }

  return (
    <div className="table_header">
      <div className="search_area">
        <div className="input_wrapper">
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={state.inputValue}
          />
          <div className="results"></div>
          {button_label?.trim() && <button>{button_label}</button>}
        </div>
      </div>
      <div className="title_area">{children}</div>
    </div>
  );
}
