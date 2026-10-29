import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api.js";

function validate({ title, description, priority }) {
  const errors = {};
  if (!title.trim()) errors.title = "Enter a title.";
  else if (title.trim().length < 3) errors.title = "Title must be at least 3 characters.";
  if (description.length > 200) errors.description = "Keep the description under 200 characters.";
  if (!priority) errors.priority = "Choose a priority.";
  return errors;
}

export default function TaskForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ title: "", description: "", priority: "" });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const change = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (Object.keys(errors).length) setErrors(validate(next));
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setSaving(true);
    const task = await createTask({ ...values, title: values.title.trim() });
    navigate(`/tasks/${task.id}`);
  };

  return (
    <section>
      <h1>New task</h1>
      <form onSubmit={submit} noValidate>
        <label>
          Title
          <input name="title" value={values.title} onChange={change} aria-invalid={!!errors.title} />
          {errors.title && <span className="error">{errors.title}</span>}
        </label>
        <label>
          Description
          <textarea name="description" rows="4" value={values.description} onChange={change} />
          {errors.description && <span className="error">{errors.description}</span>}
        </label>
        <label>
          Priority
          <select name="priority" value={values.priority} onChange={change} aria-invalid={!!errors.priority}>
            <option value="">Select...</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <span className="error">{errors.priority}</span>}
        </label>
        <button className="btn" disabled={saving}>{saving ? "Saving..." : "Save task"}</button>
      </form>
    </section>
  );
}