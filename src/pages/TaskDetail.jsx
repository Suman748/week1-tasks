import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../api.js";

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    setTask(undefined);
    getTask(id).then(setTask).catch((e) => setError(e.message));
  }, [id]);

  if (error) return <p className="error" role="alert">{error}</p>;
  if (task === undefined) return <p>Loading task...</p>;
  if (task === null)
    return (
      <section>
        <h1>Task not found</h1>
        <p>There is no task with ID {id}. <Link to="/tasks">Back to all tasks</Link>.</p>
      </section>
    );

  return (
    <section>
      <Link to="/tasks">&larr; All tasks</Link>
      <h1>{task.title}</h1>
      <p><span className={`tag ${task.priority}`}>{task.priority}</span> {task.done ? "Done" : "Open"}</p>
      <p>{task.description || "No description."}</p>
    </section>
  );
}