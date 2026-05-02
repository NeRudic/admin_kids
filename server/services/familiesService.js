import { db } from "../app.js";
import { groupper } from "./utilities/groupper.js";

export async function createFamilyService({ familyName, adults, children }) {
  try {
    //Begin the transaction
    await db.run("BEGIN TRANSACTION");

    //Create a new family
    const familyResult = await db.run(
      `INSERT INTO family (family_name) VALUES (?)`,
      [familyName],
    );

    const familyId = familyResult.lastID;

    //Adults
    for (const adult of adults) {
      const adultResult = await db.run(
        `INSERT INTO adult (first_name, family_id, role_id) VALUES (?, ?, ?)`,
        [adult.first_name, familyId, adult.roleId],
      );

      const adultId = adultResult.lastID;

      if (adult.phone) {
        await db.run(
          `INSERT INTO phone (phone_number, family_id, adult_id) VALUES (?, ?, ?)`,
          [adult.phone, familyId, adultId],
        );
      }
    }

    //Children
    for (const child of children) {
      await db.run(
        `INSERT INTO child (first_name, birthday, role_id, family_id) VALUES (?, ?, ?, ?)`,
        [child.first_name, child.birthday, child.roleId, familyId],
      );
    }

    await db.run(`COMMIT`);

    return { id: familyId, familyName: familyName };
  } catch (err) {
    await db.run(`ROLLBACK`);
    // console.error("Database Error:", error.message);
    throw err;
  }
}

export async function findFamilyService({ query }) {
  try {
    const adultsFindResult = await db.all(
      `SELECT a.first_name, a.id, f.family_name, f.id AS family_id, p.phone_number, ar.role
      FROM adult AS a
      JOIN family AS f ON a.family_id = f.id
      JOIN phone AS p ON a.id = p.adult_id
      JOIN adult_role AS ar ON a.role_id = ar.id
      WHERE f.family_name LIKE ?`,
      [`${query}%`],
    );

    console.log(adultsFindResult);

    const childrenFindResult = await db.all(
      `SELECT c.first_name, c.birthday, c.id, f.family_name, f.id AS family_id, cr.role
      FROM child AS c
      JOIN family AS f ON f.id = c.family_id
      JOIN child_role AS cr ON c.role_id = cr.id
      WHERE f.family_name LIKE ?`,
      [`${query}%`],
    );

    console.log(childrenFindResult);

    const adults = adultsFindResult.map((a) => ({
      ...a,
      type: "adults",
    }));

    const children = childrenFindResult.map((c) => ({
      ...c,
      type: "children",
    }));

    return groupper([...adults, ...children]);
  } catch (err) {
    throw err;
  }
}

export async function editFamily() {}

export async function deleteFamily() {}
