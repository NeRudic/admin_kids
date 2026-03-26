import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  function clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toLocaleDateString());
      }, 1000);

      return () => clearInterval(interval);
    });

    return { time, date };
  }

  return (
    <footer>
      <div className="footer_wrapper">
        <div className="client_counter msh-exl">
          <p>Кількість відвідувань сьогодні: {`12`}</p>
        </div>
      </div>

      <div className="date_time">
        <div className="time msh-exl">{clock().time}</div>
        <div className="date msh-exl">{clock().date}</div>
      </div>
    </footer>
  );
}
