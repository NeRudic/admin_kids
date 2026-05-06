# AdminKids

**Fullstack admin panel for managing families and children visits in a kids' playroom.**

Built as a real-world tool to handle family registration, search, and visit history — not just a to-do app.

---

## 🧩 What it does

- **Register families** — adults (with roles & phone numbers) + children (with birthdays and roles)
- **Search families** by name with live filtering
- **View family details** — expandable rows showing all members and contact info
- **Track visits** _(in progress)_ — visit history with pricing per hour
- **Dark / Light theme** toggle

---

## 🏗 Architecture

```
AdminKids/
├── client/          # React + TypeScript (Vite)
└── server/          # Node.js + Express + SQLite
```

**Monorepo** with a clean client/server separation. The frontend communicates with the backend via a REST API.

---

## ⚙️ Tech Stack

### Frontend

| Tech                  | Role                    |
| --------------------- | ----------------------- |
| React 19 + TypeScript | UI & component logic    |
| React Hook Form       | Form state & validation |
| React Router v7       | Client-side routing     |
| Axios                 | HTTP client             |
| Tailwind CSS v4       | Utility-first styling   |
| Vite                  | Build tool & dev server |

### Backend

| Tech                | Role                          |
| ------------------- | ----------------------------- |
| Node.js + Express 5 | REST API server               |
| SQLite3             | Embedded database             |
| Zod                 | Server-side schema validation |
| dotenv              | Environment config            |

---

## 🗄 Database Schema

The DB is designed with **normalized relations** and **foreign key constraints** (with CASCADE on delete):

```
family ──< adult ──< phone
       └──< child
       └──< visit ──< child_visit
```

- `family` — root entity
- `adult` / `child` — linked to family, with role tables
- `phone` — separate table (one adult can have multiple numbers)
- `visit` + `child_visit` — many-to-many for tracking which children attended

Indexes are set on `family_name`, `adult.family_id`, `child.first_name` for fast search queries.

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

### 1. Clone the repo

```bash
git clone https://github.com/NeRudic/admin_kids.git
cd AdminKids
```

### 2. Install dependencies

```bash
# Server
cd server && npm install

# Client
cd ../client && npm install
```

### 3. Configure environment

In `server/`, create a `.env` file:

```env
DB_PATH=./src/db/db.sqlite
PORT=5115
```

### 4. Run

```bash
# Terminal 1 — start the server
cd server && npm run dev

# Terminal 2 — start the client
cd client && npm run dev
```

Client runs at `http://localhost:5173`, server at `http://localhost:5115`.

---

## 📡 API Endpoints

| Method | Endpoint                             | Description                                |
| ------ | ------------------------------------ | ------------------------------------------ |
| `POST` | `/api/families/create_family`        | Create a new family with adults & children |
| `GET`  | `/api/families/find_families?query=` | Search families by name prefix             |

### Example: Create family

```json
POST /api/families/create_family
{
  "familyName": "Шевченко",
  "adults": [
    { "first_name": "Олег", "roleId": 2, "phone": "+380991234567" }
  ],
  "children": [
    { "first_name": "Марія", "birthday": "15.03.2018", "roleId": 2 }
  ]
}
```

Both endpoints use **Zod validation** on the server — invalid requests return descriptive errors.

---

## 🔧 Key Implementation Details

- **DB transactions** — `createFamily` uses `BEGIN / COMMIT / ROLLBACK` to keep data consistent across multiple inserts
- **Custom DB class** — SQLite3 wrapped in a Promise-based class (`db.run`, `db.all`, `db.get`) for clean async/await usage
- **Groupper utility** — server-side function that merges flat SQL JOIN results into nested family objects
- **Context API** — modal state and theme managed globally via React Context + custom hooks
- **TypeScript interfaces** — shared type definitions for API responses, form data, and component props

---

## 🗺 Roadmap

- [ ] Visit tracking (check-in / check-out + pricing)
- [ ] Visit history per family
- [ ] Edit & delete family records
- [ ] Stories / notes section

---

## 📌 Status

Active development. Core family management is functional; visits module is in progress.
