import "./NewChild.css";
import Svg from "../svg/Svg";

export default function NewChild({ index, register, remove, errors }) {
  const { svg_remove, svg_drop_down } = Svg();
  const nameError = errors?.children?.[index]?.name?.message;
  const childrenRoleError = errors?.children?.[index]?.role?.message;

  return (
    <div className="nf_child mt-bd">
      <div className="role_text">
        <p className="child_role">Роль</p>
      </div>

      <div className="select_wrapper">
        {errors.children && (
          <p className="error_text children_role_error msh-bd">
            {childrenRoleError}
          </p>
        )}
        <select
          name="child_role_selector"
          id="child_role_selector"
          {...register(`children.${index}.role`, {
            required: `Оберіть роль`,
          })}
        >
          <option value="son">Син</option>
          <option value="doughter">Донька</option>
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
          {...register(`children.${index}.name`, {
            required: `Це поле обов'язково!`,
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
