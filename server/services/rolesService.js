import { db } from "../app.js";

export async function getRolesService() {
  const adultsRolesResult = await db.all(`
      SELECT ar.id AS roleId, ar.role FROM adult_role AS ar
    `);

  const childrenRolesResult = await db.all(`
    SELECT cr.id AS roleId, cr.role FROM child_role AS cr
    `);

  return {
    adults_roles: adultsRolesResult,
    children_roles: childrenRolesResult,
  };
}
