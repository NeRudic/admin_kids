import { dbRun } from "./DB_class.js";

const sql = `
CREATE TABLE IF NOT EXISTS family (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  family_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS adult (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  family_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,

  CONSTRAINT family_id_fk FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT role_id_fk FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS phone (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phone_number TEXT UNIQUE NOT NULL,
  family_id INTEGER NOT NULL,
  adult_id INTEGER,

  CONSTRAINT family_id_fk_to_phone FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT adult_id_fk FOREIGN KEY (adult_id) REFERENCES adult(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS children (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  child_name TEXT NOT NULL,
  child_surname TEXT NOT NULL,
  child_birthday DATETIME NOT NULL,
  family_id INTEGER NOT NULL,

  CONSTRAINT family_id_fk_to_children FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS visit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brought_by_adult_id INTEGER NOT NULL,
  start_time DATE NOT NULL,
  end_time DATE,

  CONSTRAINT children_id_fk_visit FOREIGN KEY (children_id) REFERENCES children(id) ON DELETE CASCADE,
  CONSTRAINT adult_id_fk_visit FOREIGN KEY (brought_by_adult_id) REFERENCES adult(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS childrenVisit (
  children_id INTEGER NOT NULL,
  visit_id INTEGER NOT NULL,

  CONSTRAINT children_id_childrenVisit FOREIGN KEY (children_id) REFERENCES children(id) ON DELETE CASCADE,
  CONSTRAINT visit_id_childrenVisit FOREIGN KEY (visit_id) REFERENCES visit(id) ON DELETE CASCADE
)
`;

export default async function createTable(sql) {
  await dbRun(sql, null);
}
