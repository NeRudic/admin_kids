import { useEffect, useRef } from "react";
import { ITableHeader } from "../../../.types";
import Svg from "../../svg/Svg";
import "./TableHeader.css";

export default function TableHeader({
  button_label,
  placeholder,
  state,
  dataNotifier,
  children,
}: ITableHeader) {
  const firstRender = useRef(true);
  const { search } = Svg();

  // Track the first render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Fetch debounce
    const timeoutID = setTimeout(() => {
      if (state.inputValue.length > 0) {
        const data = state.inputValue.trim();

        dataNotifier(data);
      }
    }, 1000);

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
          <div className="svg_search">{search()}</div>
        </div>
        {button_label?.trim() && (
          <button className="th_button mt-bd">{button_label}</button>
        )}
      </div>
      <div className="title_area mt-bd">{children}</div>
    </div>
  );
}
