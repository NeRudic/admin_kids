import "./Header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NewClientModalContext } from "../../context/NewClientModalContext";

export default function Header() {
  const { themeHandler } = useContext(ThemeContext);
  const { modalHandler } = useContext(NewClientModalContext);

  return (
    <>
      <header className="header block">
        <div className="header_wrapper">
          <nav>
            <NavLink to="/">
              <div className="logo">
                <h1 className="mt-bd">KidsSmile</h1>
              </div>
            </NavLink>

            <ul className="menu_list">
              <li className="families mt-bd flex gap-[10px]">
                <NavLink to="/families" className="header_link flex gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 16.4749 9.98743"
                    width="16.474854"
                    height="9.987427"
                    fill="none"
                    customframe="#000000"
                  >
                    <path
                      id="DropDown"
                      d="M7 14L0 7L7 0"
                      stroke="rgb(79,81,89)"
                      strokeLinejoin="round"
                      strokeWidth="3.500000"
                      transform="matrix(6.12323e-17,-1,1,6.12323e-17,1.23743,8.23743)"
                    />
                  </svg>
                  Сім'ї
                </NavLink>

                <ul className="new_family">
                  <li>
                    <span onClick={() => modalHandler()}>Додати сім'ю</span>
                  </li>
                </ul>
              </li>

              <li className="visits mt-bd">
                <NavLink to="/">Вiзити</NavLink>
              </li>

              <li className="story mt-bd">
                <NavLink to="/story">Iсторiя</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="settings_block">
        <img src="/img/settings.svg" alt="Settings" />
        <div className="settings_wrapper">
          <div className="settings">
            <div className="theme msh-bd">
              <p>Тема:</p>
              <div className="outer_toggle" onClick={themeHandler}>
                <div className="inner_toggle"></div>
              </div>
            </div>

            <div className="prise_per_hour msh-bd">
              <p>Цiна/год:</p>
              <div className="price_wrapper flex justify-between items-center gap-[4px]">
                <img src="/img/edit.svg" alt="Edit" />
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
