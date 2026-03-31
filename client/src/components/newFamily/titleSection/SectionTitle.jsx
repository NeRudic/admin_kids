import "./SectionTitle.css";
import Svg from "../svg/Svg";

export default function SectionTitle({
  title_label,
  button_label,
  onAdd,
  error_message,
}) {
  const { svg_add } = Svg();

  return (
    <div className="section_title">
      <p className="mt-bd">{title_label}</p>
      {error_message ? (
        <p className="error_text msh-bd">{error_message}</p>
      ) : null}
      <div className="add_button" onClick={onAdd}>
        {svg_add()}
        <p className="mt-bd">{button_label}</p>
      </div>
    </div>
  );
}
