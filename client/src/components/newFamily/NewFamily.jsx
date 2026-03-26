import { useForm } from "react-hook-form";
import "./NewFamily.css";
import Svg from "./svg/Svg";
import NewAdult from "./newAdult/NewAdult";

export default function NewFamily() {
  const { svg_add, svg_close } = Svg();

  const {
    // Коллбек, который принимает поля name и options{}
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <form>
          <div className="form_wrapper">
            <div className="nf_family_info">
              <div className="nf_family_wrapper">
                <p className="mt-bd">Сім'я</p>
                <input type="text" placeholder="Введiть назву сiм'ї" />
              </div>
            </div>

            {/* Adults */}
            <div className="section_title">
              <p className="mt-bd">Дорослі</p>
              <div className="add_button">
                {svg_add()}
                <p className="mt-bd">Додати дорослого</p>
              </div>
            </div>

            <div className="adults_add_wrapper">
              <NewAdult />
            </div>

            {/* Children */}

            {/*
            <div className="background_wrapper">
                  
            <p className="section_title mt-bd">Діти</p>
                </div> 
            <div className="nf_family_children">
              <div className="add_child">
                <div className="role_selector">
                  <div className="selector_wrapper">
                    <p>Роль</p>
                    <select name="child_role_selector" id="child_role_selector">
                      <option value="mother">Син</option>
                      <option value="father">Донька</option>
                      <option value="father">Онук</option>
                      <option value="father">Онучка</option>
                    </select>
                  </div>

                  <div className="added_roles">
                    {/* Add the function for adding roles*/}
            {/*  </div>
                </div>

                <div className="add_child_fields">
                  <div className="field_child_name">
                    <input type="text" placeholder="Сергiй" />
                    <div className="add_button">{svg_add()}</div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <button type="submit">Зареєструвати</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
