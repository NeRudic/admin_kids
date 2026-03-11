import "./Single.css";

export default function Single() {
  return (
    <div className="single-row">
      <table>
        <caption>
          <h1>Список посещений</h1>
        </caption>
        <thead>
          <tr>
            <th>Семья</th>
            <th>Родитель</th>
            <th>Ребёнок</th>
            <th>Номер телефона</th>
            <th>Последнее посещение</th>
            <th>Открытие сессии</th>
            <th>Закрытие сессии</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ивановы</td>
            <td>Хищник</td>
            <td>Хифник</td>
            <td>+380638921571</td>
            <td>18.02.2026</td>
            <td>13:02:22</td>
            <td>14:32:22</td>
          </tr>
          <tr>
            <td>Васькины</td>
            <td>Опасный мэн</td>
            <td>Безопасный мэн</td>
            <td>+380633333333</td>
            <td>18.02.2026</td>
            <td>13:49:48</td>
            <td>15:16:05</td>
          </tr>
          <tr>
            <td>Халимовы</td>
            <td>Мама Роза</td>
            <td>Макарошка</td>
            <td>+380630153388</td>
            <td>18.02.2026</td>
            <td>14:32:11</td>
            <td>16:16:29</td>
          </tr>
          <tr>
            <td>Пупкинсон</td>
            <td>Изольда</td>
            <td>Си-Джей</td>
            <td>+380630636363</td>
            <td>18.02.2026</td>
            <td>13:55:07</td>
            <td>15:14:02</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
