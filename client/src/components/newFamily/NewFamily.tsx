import { FieldErrors, useForm, SubmitHandler } from "react-hook-form";
import "./NewFamily.css";
import useFamilyFields from "../../hooks/useFamilyFields";
import Svg from "../svg/Svg";
import NewAdult from "./NewAdult/NewAdult";
import NewChild from "./NewChild/NewChild.js";
import TitleSection from "./TitleSection/TitleSection.js";
import { IGrouppedFamily } from "../../.types";
import { createFamily } from "../../services/createFamily";

interface NewFamilyProps {
  newClientModalHandler: () => void;
}

export default function NewFamily({ newClientModalHandler }: NewFamilyProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields, isSubmitted },
    reset,
  } = useForm<IGrouppedFamily>({
    defaultValues: {
      family_name: "",
      adults: [],
      children: [],
    },
    mode: "onChange",
  });

  const { svg_close } = Svg();

  const { adults, children } = useFamilyFields(control);

  const adults_field_handler = () =>
    adults.append({
      role: null,
      first_name: "",
      phone_number: "+380",
    });

  const children_field_type = () =>
    children.append({ role: null, first_name: "", birthday: "" });

  const onSubmit: SubmitHandler<IGrouppedFamily> = async (requestData) => {
    console.log(requestData);

    try {
      await createFamily(requestData);

      reset();
      newClientModalHandler();
    } catch (e) {
      console.error("Failed:", e);
    }
  };

  const onInvalid = (formErrors: FieldErrors<IGrouppedFamily>) => {
    console.log("Увага!", formErrors);
  };

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
                  {(touchedFields.family_name || isSubmitted) &&
                    errors.family_name && (
                      <p className="error_text family_name_error msh-bd">
                        {errors.family_name.message}
                      </p>
                    )}
                  <input
                    type="text"
                    placeholder="Введiть назву сiм'ї"
                    {...register("family_name", {
                      required: `Це поле обов'язково!`,
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Adults */}
            <TitleSection
              title_label="Дорослi"
              button_label="Додати дорослого"
              onAdd={adults_field_handler}
              error_message={errors.adults?.root?.message}
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

            <TitleSection
              title_label="Дiти"
              button_label="Додати дитину"
              onAdd={children_field_type}
              error_message={errors?.children?.root?.message}
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
