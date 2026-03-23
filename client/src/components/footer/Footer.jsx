import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="client_counter">
          <p>Кількість відвідувань сьогодні: {`12`}</p>
        </div>
      </div>

      <div className="date_time">
        <div className="time"></div>
        <div className="date"></div>
      </div>
    </footer>
  );
}
