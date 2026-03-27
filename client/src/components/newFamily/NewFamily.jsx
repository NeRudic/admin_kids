import { useForm, useFieldArray } from "react-hook-form";
import "./NewFamily.css";
import Svg from "./svg/Svg";
import NewAdult from "./newAdult/NewAdult";

export default function NewFamily() {
  const { svg_add, svg_close } = Svg();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      familyName: "",
      adults: [],
      children: [],
    },
    mode: "onChange",
  });

  // Init array
  // fields - массив взрослых
  const {
    fields: adultFields,
    append: appendAdult,
    remove: removeAdult,
  } = useFieldArray({
    control,
    name: "adults",
    rules: {
      minLength: { value: 1, message: "Додайте хоча б одного дорослого!" },
    },
  });

  const {
    fields: childrenFields,
    append: appendChild,
    remove: removeChild,
  } = useFieldArray({
    control,
    name: "children",
    rules: {
      minLength: { value: 1, message: "Додайте хоча б одну дитину" },
    },
  });

  const onInvalid = (formErrors) => {
    console.log("Увага!", formErrors);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    // FormTitle

    <div className="nf_wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="nf_title mt-bd">
        <h2>Реєстрація нової сім'ї</h2>
        <span className="close_icon">{svg_close()}</span>
      </div>

      {/* Form */}

      <div className="nf_form">
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <div className="form_wrapper">
            <div className="nf_family_info">
              <div className="nf_family_wrapper">
                <p className="mt-bd">Сім'я</p>
                <div className="field_family_name">
                  {errors.familyName && (
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
            <div className="section_title">
              <p className="mt-bd">Дорослі</p>
              <div
                className="add_button"
                onClick={() => {
                  appendAdult({ role: "", name: "", phone: "+380" });
                }}
              >
                {svg_add()}
                <p className="mt-bd">Додати дорослого</p>
              </div>
            </div>

            <div className="adults_add_wrapper">
              {adultFields.map((field, index) => {
                return (
                  <NewAdult
                    key={field.id}
                    index={index}
                    register={register}
                    remove={() => {
                      removeAdult(index);
                    }}
                    errors={errors}
                  />
                );
              })}
            </div>

            {/* Children */}
            {/* Здесь будет похожая форма, как и у взрослого */}

            <button type="submit">Зареєструвати</button>
          </div>
        </form>
      </div>
    </div>
  );
}
