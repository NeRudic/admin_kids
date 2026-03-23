import { useForm } from "react-hook-form";
import "./NewFamily.css";

export default function NewFamily() {
  const {
    // Коллбек, который принимает поля name и options{}
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const svg_close = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.2549 45.2549"
      width="45.254883"
      height="45.254883"
      fill="none"
    >
      <path
        d="M0.5 12L12 12L12 0.5C12 0.223858 12.2239 0 12.5 0L19.5 0C19.7761 0 20 0.223858 20 0.5L20 12L31.5 12C31.7761 12 32 12.2239 32 12.5L32 19.5C32 19.7761 31.7761 20 31.5 20L20 20L20 31.5C20 31.7761 19.7761 32 19.5 32L12.5 32C12.2239 32 12 31.7761 12 31.5L12 20L0.5 20C0.223858 20 0 19.7761 0 19.5L0 12.5C0 12.2239 0.223858 12 0.5 12Z"
        fill="rgb(255,255,255)"
        fillRule="evenodd"
        transform="matrix(0.707107,-0.707107,0.707107,0.707107,0,22.6274)"
      />
    </svg>
  );

  const svg_add = () => {
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 38 38"
      width="38.000000"
      height="38.000000"
      fill="none"
      customFrame="#000000"
    >
      <rect
        id="Icon/Plus/Outline"
        width="38.000000"
        height="38.000000"
        x="0.000000"
        y="0.000000"
        fill="rgb(255,255,255)"
        fillOpacity="0"
      />
      <rect
        id="Icon/Plus/Outline"
        width="36.000000"
        height="36.000000"
        x="1.000000"
        y="1.000000"
        stroke="rgb(46,180,115)"
        strokeOpacity="0"
        strokeWidth="2.000000"
      />
      <circle id="Ellipse" cx="19" cy="19" r="19" fill="rgb(46,180,115)" />
      <circle
        id="Ellipse"
        cx="19"
        cy="19"
        r="16.5"
        stroke="rgb(46,180,115)"
        stroke-width="5.000000"
      />
      <path
        id="Plus"
        d="M10 16.625L16.625 16.625L16.625 10C16.625 9.72386 16.8489 9.5 17.125 9.5L20.875 9.5C21.1511 9.5 21.375 9.72386 21.375 10L21.375 16.625L28 16.625C28.2761 16.625 28.5 16.8489 28.5 17.125L28.5 20.875C28.5 21.1511 28.2761 21.375 28 21.375L21.375 21.375L21.375 28C21.375 28.2761 21.1511 28.5 20.875 28.5L17.125 28.5C16.8489 28.5 16.625 28.2761 16.625 28L16.625 21.375L10 21.375C9.72386 21.375 9.5 21.1511 9.5 20.875L9.5 17.125C9.5 16.8489 9.72386 16.625 10 16.625Z"
        fill="rgb(255,255,255)"
        fill-rule="evenodd"
      />
    </svg>;
  };

  return (
    // FormTitle

    <div className="nf_wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="nf_title mt-bd">
        <h2>Реєстрація нової сім'ї</h2>
        <div className="close_icon">{svg_close()}</div>
      </div>

      {/* Form */}

      <div className="nf_form">
        <form>
          <div className="form_wrapper">
            <div className="nf_family_info">
              <div className="nf_family_wrapper">
                <div className="background_wrapper">
                  <p className="mt-bd">Сім'я</p>
                </div>
                <input type="text" placeholder="Введiть назву сiм'ї" />
              </div>

              <div className="nf_phone_wrapper">
                <div className="background_wrapper">
                  <p className="mt-bd">Телефон</p>
                </div>
                <input type="text" placeholder="Введiть номер телефону" />
              </div>
            </div>

            {/* Adults */}

            <p className="section_title">Дорослі</p>

            <div className="nf_adults">
              {/* Add Adult */}
              <div className="add_adult">
                <div className="role_selector">
                  <div className="selector_wrapper">
                    <div className="background_wrapper">
                      <p>Роль</p>
                    </div>
                    <select>
                      <option value="mother">Мама</option>
                      <option value="father">Тато</option>
                      <option value="grandmother">Бабуся</option>
                      <option value="grandfather">Дідусь</option>
                    </select>
                  </div>

                  <div className="added_roles">
                    {/* Add the function for adding roles*/}
                  </div>
                </div>
              </div>

              <div className="addult_fields">
                <div className="field_name">
                  <input type="text" placeholder="Iм'я" />
                  <div className="add_button">{svg_add()}</div>
                </div>

                <div className="field_phone">
                  <input type="text" placeholder="Номер телефону" />
                  <div className="add_button">{svg_add()}</div>
                </div>
              </div>
            </div>

            {/* Children */}

            {/*
            <div className="background_wrapper">
                  
            <p className="section_title">Діти</p>
                </div> 
            <div className="nf_family_children">
              <div className="add_child">
                <div className="child_selector">
                  <div className="add_child_wrapper">
                    <p>Роль</p>
                    <select>
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
