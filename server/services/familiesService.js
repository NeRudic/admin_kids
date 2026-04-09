import { db } from "../app.js";

export async function createFamilyService({ familyName, adults, children }) {
  try {
    //Begin the transaction
    await db.run("BEGIN TRANSACTION");

    //Create a new family
    const familyResult = await db.run(
      `
      INSERT INTO family (family_name) VALUES (?)`,
      [familyName],
    );

    const familyId = familyResult.lastID;

    //Adults
    for (const adult of adults) {
      const adultResult = await db.run(
        `INSERT INTO adult (first_name, family_id, role_id) VALUES (?, ?, ?)`,
        [adult.name, familyId, adult.roleId],
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
        `INSERT INTO children (child_name, child_birthday, role_id, family_id) VALUES (?, ?, ?, ?)`,
        [child.name, child.birthDate, child.roleId, familyId],
      );
    }

    await db.run(`COMMIT`);

    return { id: familyId, familyName: familyName };
  } catch (error) {
    await db.run(`ROLLBACK`);
    // console.error("Database Error:", error.message);
    throw error;
  }
}

export async function findFamily() {}

export async function editFamily() {}

export async function deleteFamily() {}
