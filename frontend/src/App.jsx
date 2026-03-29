import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [editId, setEditId] = useState(null);

  const API = "http://127.0.0.1:8000/api/students/";

  const fetchStudents = () => {
    axios.get(API).then((res) => setStudents(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      axios.put(`${API}${editId}/`, form).then(() => {
        setEditId(null);
        setForm({ name: "", age: "", email: "" });
        fetchStudents();
      });
    } else {
      axios.post(API, form).then(() => {
        setForm({ name: "", age: "", email: "" });
        fetchStudents();
      });
    }
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`${API}${id}/`).then(fetchStudents);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Student Manager</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ padding: "8px", borderRadius: "5px" }}
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          style={{ padding: "8px", borderRadius: "5px", width: "60px" }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ padding: "8px", borderRadius: "5px" }}
        />
        <button
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {students.map((s) => (
        <div
          key={s.id}
          style={{
            background: "#1e1e2f",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <p>
            <strong>{s.name}</strong>
          </p>
          <p>Age: {s.age}</p>
          <p>Email: {s.email}</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => handleEdit(s)}
              style={{
                background: "#4CAF50",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(s.id)}
              style={{
                background: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
