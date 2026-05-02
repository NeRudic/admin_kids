export const groupper = (data) => {
  const groupped = data.reduce((acc, person) => {
    const { family_name, type, family_id, ...newPerson } = person;

    if (!acc[family_name]) {
      return {
        ...acc,
        [family_name]: {
          family_name: family_name,
          family_id: family_id,
          [type]: [{ ...newPerson }],
        },
      };
    } else {
      return {
        ...acc,
        [family_name]: {
          ...acc[family_name],
          [type]: [...(acc[family_name][type] || []), { ...newPerson }],
        },
      };
    }
  }, {});

  return Object.values(groupped);
};
