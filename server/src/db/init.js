import DB from "./db";

const db = new DB(process.env.DB_PATH);

const sql = `
CREATE TABLE IF NOT EXISTS family (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  family_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS adult_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE,
  label TEXT
);

CREATE TABLE IF NOT EXISTS children_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE,
  label TEXT
);

CREATE TABLE IF NOT EXISTS adult (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  family_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,

  CONSTRAINT family_id_fk FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT adult_role_id_fk FOREIGN KEY (role_id) REFERENCES adult_roles(id) ON DELETE RESTRICT
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
  child_birthday TEXT NOT NULL,
  role_id INTEGER NOT NULL,
  family_id INTEGER NOT NULL,

  CONSTRAINT family_id_fk_to_children FOREIGN KEY (family_id) REFERENCES family(id) ON DELETE CASCADE,
  CONSTRAINT role_id_fk_to_children FOREIGN KEY (role_id) REFERENCES children_roles(id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS visit (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brought_by_adult_id INTEGER NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT,

  CONSTRAINT adult_id_fk_visit FOREIGN KEY (brought_by_adult_id) REFERENCES adult(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS children_visit (
  children_id INTEGER NOT NULL,
  visit_id INTEGER NOT NULL,
  PRIMARY KEY (children_id, visit_id),

  CONSTRAINT children_id_children_visit FOREIGN KEY (children_id) REFERENCES children(id) ON DELETE CASCADE,
  CONSTRAINT visit_id_children_visit FOREIGN KEY (visit_id) REFERENCES visit(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_family_name ON family(family_name);

CREATE INDEX IF NOT EXISTS idx_adult_family_id ON adult(family_id);
CREATE INDEX IF NOT EXISTS idx_adult_first_name ON adult(first_name);

CREATE INDEX IF NOT EXISTS idx_phone_family_id ON phone(family_id);
CREATE INDEX IF NOT EXISTS idx_phone_adult_id ON phone(adult_id);

CREATE INDEX IF NOT EXISTS idx_children_visit_children ON children_visit(children_id);

CREATE INDEX IF NOT EXISTS idx_children_first_name ON children(child_name);

INSERT OR IGNORE INTO adult_roles (key, label) VALUES

('mother', 'Мама'),
('father', 'Тато');

INSERT OR IGNORE INTO children_roles (key, label) VALUES

('son', 'Син'),
('daughter', 'Донька');

`;

async function createTable(sql) {
  await db.exec(sql, null);
}

export default createTable(sql);
