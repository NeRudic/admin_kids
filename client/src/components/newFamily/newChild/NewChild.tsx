import Svg from "../../svg/Svg";
import "./NewChild.css";
import { NewChildAdultInterface } from "../../../.types";
import { useRoles } from "../../../hooks/useRoles";

export default function NewChild({
  index,
  register,
  remove,
  errors,
}: NewChildAdultInterface) {
  const { svg_remove, svg_drop_down } = Svg();
  const nameError = errors?.children?.[index]?.first_name?.message;
  const childrenRoleError = errors?.children?.[index]?.role?.message;
  const childrenDateError = errors?.children?.[index]?.birthday?.message;

  const requireMessage = `Це поле обов'язково!`;

  const children_roles = useRoles()?.children_roles.map((child) => (
    <option key={child.role} value={child.roleId} data-role_name={child.role}>
      {child.role}
    </option>
  ));

  return (
    <div className="nf_child mt-bd">
      <div className="date_wrapper">
        {errors.children && (
          <p className="error_text child_date_error msh-bd">
            {childrenDateError}
          </p>
        )}
        <input
          type="text"
          placeholder="DD.MM.YYYY"
          {...register(`children.${index}.birthday`, {
            required: "Вкажіть дату народження",
            pattern: {
              value: /^\d{2}\.\d{2}\.\d{4}$/,
              message: "Формат дати має бути DD.MM.YYYY",
            },
            validate: (value: string) => {
              if (typeof value !== "string") {
                return "Некоректна дата";
              }
              const [day, month, year] = value.split(".").map(Number);
              // Правильный порядок: year, month - 1, day
              const date = new Date(year, month - 1, day);

              const currentYear = new Date().getFullYear();
              const minYear = currentYear - 15;

              // Проверка на существование даты (например, 31.02.2023)
              if (
                date.getFullYear() !== year ||
                date.getMonth() + 1 !== month ||
                date.getDate() !== day
              ) {
                return "Некоректна дата";
              }

              // Проверка диапазона лет
              if (year < minYear || year > currentYear) {
                return `Рік має бути від ${minYear} до ${currentYear}`;
              }

              return true;
            },
          })}
        />
      </div>

      <div className="select_wrapper">
        {errors.children && (
          <p className="error_text children_role_error msh-bd">
            {childrenRoleError}
          </p>
        )}
        <select
          id="child_role_selector"
          {...register(`children.${index}.roleId`, {
            valueAsNumber: true,
            required: `Оберіть роль`,
          })}
        >
          {children_roles}
        </select>
        <div className="svg_drop_down">{svg_drop_down()}</div>
      </div>

      <div className="field_name">
        {errors.children && (
          <p className="error_text name_error msh-bd">{nameError}</p>
        )}
        <input
          type="text"
          placeholder="Iм'я"
          {...register(`children.${index}.first_name`, {
            required: requireMessage,
          })}
          className="child_name"
        />
        <div className="remove_button" onClick={remove}>
          {svg_remove()}
        </div>
      </div>
    </div>
  );
}
