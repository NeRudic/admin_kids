import { useForm } from "react-hook-form";
import "./NewFamily.css";
import useFamilyFields from "./fields/useFamilyFields.js";
import Svg from "./svg/Svg";
import Handlers from "./handlers/Handlers.js";
import NewAdult from "./newAdult/NewAdult";
import NewChild from "./newChild/NewChild.jsx";
import SectionTitle from "./titleSection/SectionTitle.jsx";

export default function NewFamily({ newClientModalHandler }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields, isSubmitted },
    reset,
    setError,
  } = useForm({
    defaultValues: {
      familyName: "",
      adults: [],
      children: [],
    },
    mode: "onChange",
  });

  const { svg_close } = Svg();
  const { adults, children } = useFamilyFields(control);
  const { onInvalid, onSubmit } = new Handlers(
    reset,
    newClientModalHandler,
    setError,
  );

  const adults_field_handler = () =>
    adults.append({
      roleId: "",
      name: "",
      phone: "+380",
    });

  const children_field_type = () =>
    children.append({ roleId: "", name: "", birthDate: "" });

  return (
    // FormTitle

    <div className="nf_wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="nf_title mt-bd">
        <h2>Реєстрація нової сім'ї</h2>
        <span className="close_icon" onClick={() => newClientModalHandler()}>
          {svg_close()}
        </span>
      </div>

      {/* Form */}

      <div className="nf_form">
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <div className="form_wrapper">
            <div className="nf_family_info">
              <div className="nf_family_wrapper mt-bd">
                <p className="mt-bd">Сім'я</p>
                <div className="field_family_name">
                  {(touchedFields.familyName || isSubmitted) &&
                    errors.familyName && (
                      <p className="error_text family_name_error msh-bd">
                        {errors.familyName.message}
                      </p>
                    )}
                  <input
                    type="text"
                    placeholder="Введiть назву сiм'ї"
                    {...register("familyName", {
                      required: `Це поле обов'язково!`,
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Adults */}
            <SectionTitle
              title_label="Дорослi"
              button_label="Додати дорослого"
              onAdd={adults_field_handler}
              error_message={errors?.adults?.message}
            />

            <div className="adults_add_wrapper">
              {adults.fields.map((field, index) => {
                return (
                  <NewAdult
                    key={field.id}
                    index={index}
                    register={register}
                    remove={() => {
                      adults.remove(index);
                    }}
                    errors={errors}
                  />
                );
              })}
            </div>

            {/* Children */}

            <SectionTitle
              title_label="Дiти"
              button_label="Додати дитину"
              onAdd={children_field_type}
              error_message={errors?.children?.message}
            />

            <div className="children_add_wrapper">
              {children.fields.map((field, index) => {
                return (
                  <NewChild
                    key={field.id}
                    index={index}
                    register={register}
                    remove={() => {
                      children.remove(index);
                    }}
                    errors={errors}
                  />
                );
              })}
            </div>
            {/* Здесь будет похожая форма, как и у взрослого */}

            <button
              type="submit"
              className="nf_submit_button mt-bd"
              disabled={
                !(adults.fields.length > 0 && children.fields.length > 0)
              }
            >
              Зареєструвати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
