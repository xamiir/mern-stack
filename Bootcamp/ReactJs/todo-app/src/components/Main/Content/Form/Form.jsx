import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const titleChangeHanlder = (e) => {
    setTitle(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log({
      title,
      status,
      date,
      category,
    });
  };

  return (
    <section
      id="form"
      className="card-white font-nunito  border-gray-100 border"
    >
      <h1 className="mt-2 mb-3 font-bold text-2xl text-slate-500">
        Add New Task
      </h1>
      <hr />
      <form
        onSubmit={submitFormHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4"
      >
        <div className="input-group">
          <label htmlFor="title" className="input-label">
            Title :
          </label>
          <input
            className="input-control"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={titleChangeHanlder}
          />
        </div>
        <div className="input-group">
          <label htmlFor="category" className="input-label">
            Category:{" "}
          </label>
          <select
            className="input-control"
            value={category}
            onChange={categoryChangeHandler}
            name="category"
          >
            <option disabled value="">
              Choose Category
            </option>
            <option value="work">Work</option>
            <option value="learning">Learning</option>
            <option value="trip">Trip</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date" className="input-label">
            Date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="input-control"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="input-group">
          <label htmlFor="status" className="input-label">
            Status:
          </label>
          <select
            name="status"
            className="input-control"
            value={status}
            onChange={statusChangeHandler}
          >
            <option disabled value="">
              Choose Status
            </option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex justify-center w-full md:col-span-2 mt-3">
          <button className="btn-add">Add</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
