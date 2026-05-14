import "./NewAdult.css";
import Svg from "../../svg/Svg";
import { NewChildAdultInterface } from "../../../.types";
import { useRoles } from "../../../hooks/useRoles";

export default function NewAdult({
  index,
  register,
  remove,
  errors,
}: NewChildAdultInterface) {
  const { svg_drop_down, svg_remove } = Svg();

  const nameError = errors?.adults?.[index]?.first_name?.message;
  const phoneError = errors?.adults?.[index]?.phone_number?.message;
  const adultRoleError = errors?.adults?.[index]?.role?.message;

  const adults_roles = useRoles()?.adults_roles.map((adult) => (
    <option key={adult.role} value={adult.id} data-role_name={adult.role}>
      {adult.role}
    </option>
  ));

  return (
    <div className="nf_adult mt-bd">
      <div className="select_wrapper">
        {errors.adults && (
          <p className="error_text role_error msh-bd">{adultRoleError}</p>
        )}
        <select
          id="adult_role_selector"
          {...register(`adults.${index}.roleId`, {
            valueAsNumber: true,
            required: "Оберіть роль",
          })}
        >
          {adults_roles}
        </select>

        <div className="svg_drop_down">{svg_drop_down()}</div>
      </div>

      <div className="field_name smaller_field">
        {errors.adults && (
          <p className="error_text name_error msh-bd">{nameError}</p>
        )}
        <input
          type="text"
          placeholder="Iм'я"
          {...register(`adults.${index}.first_name`, {
            required: `Це поле обов'язково!`,
          })}
        />
      </div>
      <div className="field_phone">
        <div className="phone_input_wrapper">
          {errors.adults && (
            <p className="error_text phone_error msh-bd">{phoneError}</p>
          )}
          <input
            type="tel"
            placeholder="Номер телефону"
            {...register(`adults.${index}.phone_number`, {
              required: `Це поле обов'язково!`,
              pattern: {
                value: /^\+380\d{9}$/,
                message: "Формат: +380XXXXXXXXX (9 цифр після +380)",
              },
              minLength: { value: 13, message: "Номер має бути 13 символів" },
              maxLength: { value: 13, message: "Номер має бути 13 символів" },
            })}
          />
        </div>

        <div className="remove_button" onClick={remove}>
          {svg_remove()}
        </div>
      </div>
    </div>
  );
}
