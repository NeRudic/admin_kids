## Class DB

Класс содержит основные методы для работы с Базой Данных(run, get, all, close).

### Init

DB Принимает на себя 1 параметр - путь к БД. Лучше инициализировать в try/catch, так как ошибка возвращается через throw.

Пример:

```javascript
try {
  const db = new DB(db_path);
} catch (err) {
  console.log("DB error :" + err);
}
```

### Run/Get/All

Работают также, как и в стандартной библиотеке, только с Promise-обёрткой с единственным различием в resolve().
Принимают `(sql, params = [])`.

#### Run

resolve({ lastID: this.lastID, changes: this.changes })

#### Get

resolve(row)

#### All

resolve(rows)
