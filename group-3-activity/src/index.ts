import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;
const db = new sqlite3.Database("student.db");

app.use(cors());
app.use(bodyParser.json());

db.run(
  "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER, grade TEXT)"
);

// ✅ Add proper types here
app.get("/students", (req: Request, res: Response) => {
  db.all("SELECT * FROM students", [], (err: Error | null, rows: any[]) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

//
app.post("/students", (req: Request, res: Response) => {
  if (!req.body.name || !req.body.age || !req.body.grade) {
    res.status(400).json({ error: "all fields are required" });
    return;
  }
  db.run(
    "insert into students(name, age, grade) values(?, ?, ?)",
    [req.body.name, req.body.age, req.body.grade],
    function (err: Error | null) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

//
app.delete("/students/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  db.run("DELETE FROM students WHERE id = ?", id, function (err: Error | null) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: "Student not found" });
      return;
    }
    res.json({ message: "Student deleted successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://192.168.1.36:${PORT}`);
});
