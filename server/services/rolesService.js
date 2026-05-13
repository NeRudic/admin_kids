import { db } from "../app";

export async function getRolesService() {
  const adultsRolesResult = await db.all(`
      SELECT ar.id, ar.role FROM adult_role AS ar
    `);

  const childrenRolesResult = await db.all(`
    SELECT cr.id, cr.role FROM children_role AS cr
    `);

  return {
    adults_roles: adultsRolesResult,
    children_roles: childrenRolesResult,
  };
}
