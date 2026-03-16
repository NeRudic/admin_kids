import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header block">
        <div className="header_wrapper">
          <nav>
            <NavLink to="/visits">
              <div className="logo">
                <h1 className="mt-bd">KidsSmile</h1>
              </div>
            </NavLink>

            <ul className="menu_list">
              <li className="families mt-bd flex gap-[10px]">
                <NavLink to="/families" className="header_link flex gap-[10px]">
                  <img src="/img/drop_down.svg" alt="Drop Down" />
                  Сім'ї
                </NavLink>

                <ul className="new_family">
                  <li>
                    <span>Додати сім'ю</span>
                  </li>
                </ul>
              </li>

              <li className="visits mt-bd">
                <NavLink to="/visits">Вiзити</NavLink>
              </li>

              <li className="story mt-bd">
                <NavLink to="/story">Iсторiя</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="settings">
        <img src="/img/settings.svg" alt="Settings" />
      </div>
    </>
  );
}
