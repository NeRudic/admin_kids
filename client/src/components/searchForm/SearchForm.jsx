import { useState } from "react";
import "../searchForm/SearchForm.css";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  return (
    <div className="search">
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault(); // чтобы предотвратить перезагрузку страницы при отправке формы
          console.log("Поиск:", query);
        }}
      >
        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите поисковой запрос"
        />
        <button type="submit">Искать</button>
      </form>
    </div>
  );
}
