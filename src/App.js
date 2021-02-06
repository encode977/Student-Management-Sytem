import "./App.css";
import { useFormik } from "formik";

import db from "./firebase";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
      addStudent(values);
    },
  });

  const addStudent = (values) => {
    db.collection("students").add({
      name: values.name,
      email: values.email,
      channel: values.channel,
    });
  };
  return (
    <div className="app">
      <h2 className="app__title">Student Register</h2>
      <form onSubmit={formik.handleSubmit} className="form-body">
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Channel</label>
          <input
            name="channel"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <button type="submit" className="add__btn">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default App;
