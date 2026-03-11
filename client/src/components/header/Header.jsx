import Menu from "./menu/Menu";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <Menu />
        <div className="account">MyAccount</div>
      </header>
    </>
  );
}
