import "./NewAdult.css";
import Svg from "../svg/Svg";

export default function NewAdult({ index, register, remove, errors }) {
  const { svg_drop_down, svg_remove } = Svg();

  const nameError = errors?.adults?.[index]?.name?.message;
  const phoneError = errors?.adults?.[index]?.phone?.message;

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
        {errors.adults && (
          <p className="error_text name_error msh-bd">{nameError}</p>
        )}
        <input
          type="text"
          placeholder="Iм'я"
          {...register(`adults.${index}.name`, {
            required: `Це поле обов'язково!`,
          })}
        />
      </div>
      <div className="field_phone">
        {errors.adults && (
          <p className="error_text phone_error msh-bd">{phoneError}</p>
        )}
        <input
          type="tel"
          placeholder="Номер телефону"
          {...register(`adults.${index}.phone`, {
            required: `Це поле обов'язково!`,
          })}
        />
        <div className="remove_button" onClick={remove}>
          {svg_remove()}
        </div>
      </div>
    </div>
  );
}
