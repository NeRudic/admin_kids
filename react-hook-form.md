# React Hook Form — обучение с нуля до уверенного уровня

Этот материал построен как учебный маршрут: ты проходишь шаги по порядку, и каждый следующий опирается на предыдущий.

---

## 0) Что такое React Hook Form и зачем он нужен

`react-hook-form` — библиотека для работы с формами в React с фокусом на:

- минимальные перерисовки;
- простую интеграцию валидации;
- удобную работу с ошибками;
- хорошую производительность даже на больших формах.

Когда использовать:

- формы логина/регистрации;
- формы профиля;
- фильтры;
- сложные формы с динамическими полями.

---

## 1) Установка и первый запуск

Установка:

```bash
npm install react-hook-form
```

Минимальная форма:

```jsx
import { useForm } from "react-hook-form";

export default function BasicForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Данные формы:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Имя" />
      <button type="submit">Отправить</button>
    </form>
  );
}
```

Что происходит:

- `useForm()` дает методы управления формой;
- `register("name")` подключает поле к форме;
- `handleSubmit(onSubmit)` валидирует и передает данные в `onSubmit`.

---

## 2) Базовая валидация

Добавим обязательность и минимальную длину:

```jsx
import { useForm } from "react-hook-form";

export default function ValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", {
          required: "Имя обязательно",
          minLength: {
            value: 3,
            message: "Минимум 3 символа",
          },
        })}
        placeholder="Username"
      />

      {errors.username && <p>{errors.username.message}</p>}

      <button type="submit">Сохранить</button>
    </form>
  );
}
```

Полезно запомнить:

- ошибки доступны через `formState.errors`;
- лучше выводить понятные сообщения для пользователя;
- правила валидации задаются прямо в `register`.

---

## 3) Частые правила валидации

```jsx
<input
  {...register("email", {
    required: "Email обязателен",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Некорректный email",
    },
  })}
/>
```

Доступные встроенные правила:

- `required`
- `minLength` / `maxLength`
- `min` / `max` (для чисел)
- `pattern`
- `validate` (кастомная функция)

---

## 4) Кастомная валидация

Пример: пароль должен содержать хотя бы одну цифру.

```jsx
<input
  type="password"
  {...register("password", {
    required: "Пароль обязателен",
    validate: (value) =>
      /\d/.test(value) || "Пароль должен содержать хотя бы одну цифру",
  })}
/>
```

---

## 5) Значения по умолчанию и reset

```jsx
import { useForm } from "react-hook-form";

export default function DefaultValuesForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "Иван",
      age: 10,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); // сброс к defaultValues
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input type="number" {...register("age", { valueAsNumber: true })} />
      <button type="submit">Отправить</button>
    </form>
  );
}
```

Важно:

- `defaultValues` задаются в `useForm`;
- `reset(newValues)` позволяет сбросить форму к новым данным.

---

## 6) Работа с состоянием формы

Полезные флаги из `formState`:

- `isDirty` — были ли изменения;
- `isValid` — валидна ли форма;
- `isSubmitting` — идет ли отправка;
- `submitCount` — сколько раз отправляли.

Пример кнопки:

```jsx
const {
  register,
  handleSubmit,
  formState: { isDirty, isValid, isSubmitting },
} = useForm({ mode: "onChange" });

<button disabled={!isDirty || !isValid || isSubmitting}>Сохранить</button>;
```

---

## 7) Контролируемые компоненты и Controller

`register` отлично работает с обычными `input/select/textarea`.  
Для сторонних UI-компонентов (например, MUI, Ant Design, React Select) часто нужен `Controller`.

```jsx
import { useForm, Controller } from "react-hook-form";

export default function ControlledExample() {
  const { control, handleSubmit } = useForm({
    defaultValues: { city: "" },
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        name="city"
        control={control}
        rules={{ required: "Город обязателен" }}
        render={({ field, fieldState }) => (
          <>
            <input {...field} placeholder="Город" />
            {fieldState.error && <p>{fieldState.error.message}</p>}
          </>
        )}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
```

---

## 8) Динамические поля: useFieldArray

Когда нужно добавлять/удалять поля (например, список детей, телефонов, навыков):

```jsx
import { useForm, useFieldArray } from "react-hook-form";

export default function KidsForm() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      kids: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "kids",
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`kids.${index}.name`, {
              required: "Имя ребенка обязательно",
            })}
            placeholder={`Ребенок #${index + 1}`}
          />
          <button type="button" onClick={() => remove(index)}>
            Удалить
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append({ name: "" })}>
        Добавить ребенка
      </button>

      <button type="submit">Сохранить</button>
    </form>
  );
}
```

---

## 9) Наблюдение за полями: watch

`watch` позволяет реагировать на изменение значений:

```jsx
const { register, watch } = useForm();
const hasPet = watch("hasPet");

return (
  <>
    <input type="checkbox" {...register("hasPet")} />
    {hasPet && <input {...register("petName")} placeholder="Имя питомца" />}
  </>
);
```

Это удобно для условного отображения полей.

---

## 10) Интеграция с API (async submit)

```jsx
const onSubmit = async (data) => {
  try {
    await api.createFamily(data);
    // показать успех
  } catch (error) {
    // показать ошибку
  }
};
```

Рекомендации:

- блокируй кнопку отправки через `isSubmitting`;
- обрабатывай серверные ошибки отдельно от клиентской валидации;
- нормализуй данные перед отправкой (например, числа, даты, trim строк).

---

## 11) Архитектура и best practices (SOLID + KISS)

- Держи форму "плоской", если нет реальной необходимости в глубокой вложенности.
- Делай небольшие переиспользуемые компоненты поля (`TextField`, `SelectField`).
- Вынеси правила валидации в отдельные функции/константы.
- Не смешивай бизнес-логику API и JSX: отправку лучше выносить в отдельный сервис/хук.
- Удаляй неиспользуемые поля, хелперы и обработчики сразу.

Пример простого рефакторинга:

- было: вся логика в одном компоненте на 300+ строк;
- стало: `FormView` (UI) + `useFamilyForm` (логика формы) + `familyApi` (запросы).

---

## 12) Типичные ошибки новичков

- Используют `value` + `onChange` вместе с `register` без необходимости.
- Забывают `defaultValues`, из-за чего плавает состояние.
- Выводят только "Ошибка", без понятного текста.
- Делают слишком много `watch` без нужды.
- Не обрабатывают ошибки API.

---

## 13) Мини-практика (пройди по шагам)

1. Сделай форму: `name`, `email`.
2. Добавь валидацию (`required`, `pattern`).
3. Добавь `defaultValues`.
4. Заблокируй кнопку отправки при невалидной форме.
5. Добавь динамический массив `children` через `useFieldArray`.
6. Добавь условное поле через `watch`.
7. Подключи отправку на mock API (`fetch`/`axios`).

Если каждый шаг работает отдельно — библиотека уже "легла в руки".

---

## 14) Краткая шпаргалка API

- `useForm()` — инициализация формы
- `register(name, rules)` — регистрация полей
- `handleSubmit(onValid, onError?)` — обработка отправки
- `formState` — ошибки и статус формы
- `reset(values?)` — сброс формы
- `setValue(name, value)` — программная установка значения
- `getValues(name?)` — получение значений
- `watch(name?)` — подписка на изменения
- `Controller` — адаптер контролируемых компонентов
- `useFieldArray` — массивы полей

---

## 15) Что учить дальше

После этой базы стоит изучить:

- schema-валидацию (`zod`, `yup`) через `resolver`;
- `FormProvider` и `useFormContext` для очень больших форм;
- оптимизацию рендера на сложных страницах;
- тестирование форм (`@testing-library/react`).

---

Если хочешь, следующим шагом я могу подготовить вторую часть этого документа: **"React Hook Form + Zod на реальном примере формы Families из твоего проекта"** с практическим разбором.
