import { useFieldArray } from "react-hook-form";

export default function useFamilyFields(control) {
  const adults = useFieldArray({
    control,
    name: "adults",
    rules: {
      minLength: { value: 1, message: "Додайте хоча б одного дорослого!" },
    },
  });

  const children = useFieldArray({
    control,
    name: "children",
    rules: {
      minLength: { value: 1, message: "Додайте хоча б одну дитину" },
    },
  });

  return { adults, children };
}
