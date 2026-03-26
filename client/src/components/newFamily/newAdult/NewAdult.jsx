import "./NewAdult.css";
import Svg from "../svg/Svg";

export default function NewAdult() {
  const { svg_drop_down, svg_remove } = Svg();

  return (
    <div className="nf_adult">
      <div className="select_wrapper">
        <select name="adult_role_selector" id="adult_role_selector">
          <option value="mother">Мама</option>
          <option value="father">Тато</option>
          <option value="grandmother">Бабуся</option>
          <option value="grandfather">Дідусь</option>
        </select>

        <div className="drop_down_swg">{svg_drop_down()}</div>
      </div>

      <div className="field_name smaller_field">
        <input type="text" placeholder="Iм'я" />
      </div>
      <div className="field_phone">
        <input type="tel" placeholder="Номер телефону" />
        {svg_remove()}
      </div>
    </div>
  );
}
