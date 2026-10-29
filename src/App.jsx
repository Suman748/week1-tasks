import { Link, NavLink, Route, Routes } from "react-router-dom";
import TaskList from "./pages/TaskList.jsx";
import TaskDetail from "./pages/TaskDetail.jsx";
import TaskForm from "./pages/TaskForm.jsx";

export default function App() {
  return (
    <>
      <header className="bar">
        <Link to="/tasks" className="brand">Task board</Link>
        <nav>
          <NavLink to="/tasks" end>All tasks</NavLink>
          <NavLink to="/tasks/new">New task</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>That address doesn't match a screen. <Link to="/tasks">Go to all tasks</Link>.</p>
    </section>
  );
}