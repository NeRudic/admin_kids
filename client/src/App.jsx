import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <div className="main">
          <div className="logo"></div>
          <ul className="menu">
            <li>Сім'ї</li>
            <li>Вiзити</li>
            <li>Iсторiя</li>
          </ul>
          <img src="/settings.svg" alt="Settings" />
        </div>
        <div className="settings"></div>
      </header>
    </>
  );
}
