import { useEffect, useRef, useState } from "react";

interface ITableHeader {
  button_label?: string;
  placeholder: string;
  onSearch: (value: string) => void;
}

export default function TableHeader({
  button_label,
  placeholder,
  onSearch,
}: ITableHeader) {
  const [inputValue, setInputValue] = useState("");
  const firstRender = useRef(true);

  // Track the first render
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Fetch debounce
    const timeoutID = setTimeout(() => {
      const data = inputValue.trim();
      if (data.length >= 3 || data.length === 0) {
        onSearch(data);
      }
    }, 500);

    return () => clearTimeout(timeoutID);
  }, [inputValue]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className="table_header">
      <div className="search_area">
        <div className="input_wrapper">
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={inputValue}
          />
          <div className="results"></div>
          {button_label?.trim() && <button>{button_label}</button>}
        </div>
      </div>
      <div className="title_area"></div>
    </div>
  );
}
