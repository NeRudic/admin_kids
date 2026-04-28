import { db } from "../../app.js";

export const sql = `
CREATE TABLE IF NOT EXISTS family (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  family_name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS adults_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS children_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT
);

CREATE TABLE IF NOT EXISTS adults (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  family_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,

  CONSTRAINT family_id_fk FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT adults_role_id_fk FOREIGN KEY (role_id) REFERENCES adults_roles(id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS phone (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phone_number TEXT NOT NULL,
  family_id INTEGER NOT NULL,
  adults_id INTEGER,

  CONSTRAINT family_id_fk_to_phone FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT adults_id_fk FOREIGN KEY (adults_id) REFERENCES adults(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS children (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  child_name TEXT NOT NULL,
  child_birthday TEXT NOT NULL,
  role_id INTEGER NOT NULL,
  family_id INTEGER NOT NULL,

  CONSTRAINT family_id_fk_to_children FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT role_id_fk_to_children FOREIGN KEY (role_id) REFERENCES children_roles(id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS visit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brought_by_adults_id INTEGER NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT,

  CONSTRAINT adults_id_fk_visit FOREIGN KEY (brought_by_adults_id) REFERENCES adults(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS children_visit (
  children_id INTEGER NOT NULL,
  visit_id INTEGER NOT NULL,
  PRIMARY KEY (children_id, visit_id),

  CONSTRAINT children_id_children_visit FOREIGN KEY (children_id) REFERENCES children(id) ON DELETE CASCADE,
  CONSTRAINT visit_id_children_visit FOREIGN KEY (visit_id) REFERENCES visit(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_family_name ON family(family_name);

CREATE INDEX IF NOT EXISTS idx_adults_family_id ON adults(family_id);
CREATE INDEX IF NOT EXISTS idx_adults_first_name ON adults(first_name);

CREATE INDEX IF NOT EXISTS idx_phone_family_id ON phone(family_id);
CREATE INDEX IF NOT EXISTS idx_phone_adults_id ON phone(adults_id);

CREATE INDEX IF NOT EXISTS idx_children_visit_children ON children_visit(children_id);

CREATE INDEX IF NOT EXISTS idx_children_first_name ON children(child_name);

INSERT OR IGNORE INTO adults_roles (label) VALUES

('mother'),
('father'),
('grandmother'),
('grandfather');

INSERT OR IGNORE INTO children_roles (label) VALUES

('son'),
('daughter');

`;

export default async function initDB() {
  await db.exec(sql);
}
