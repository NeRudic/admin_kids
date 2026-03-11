import Clock from "./Clock/Clock";
import "./Footer.css";

export default function Footer() {
  return (
    // В {} пишется JS-код, только то, что может быть приведено к строке(число тоже можно)
    <>
      <footer className="footer">
        <Clock />
      </footer>
    </>
  );
}
