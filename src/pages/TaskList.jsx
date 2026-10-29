import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../api.js";

export default function TaskList() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getTasks().then(setTasks).catch((e) => setError(e.message));
  }, []);

  if (error) return <p className="error" role="alert">{error}</p>;
  if (!tasks) return <p>Loading tasks...</p>;

  return (
    <section>
      <div className="row">
        <h1>All tasks</h1>
        <Link className="btn" to="/tasks/new">New task</Link>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks yet. <Link to="/tasks/new">Create your first task</Link>.</p>
      ) : (
        <ul className="list">
          {tasks.map((t) => (
            <li key={t.id}>
              <Link to={`/tasks/${t.id}`}>
                <span className={t.done ? "title done" : "title"}>{t.title}</span>
                <span className={`tag ${t.priority}`}>{t.priority}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}