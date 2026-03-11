import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu_list">
      <nav>
        <ul>
          <li className="active">
            <Link to="/">Посещения</Link>
          </li>

          <li>
            <Link to="/add-family">Добавить семью</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
