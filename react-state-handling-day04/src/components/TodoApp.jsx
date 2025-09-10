import { useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("⚠️ Task cannot be empty!");
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: task.trim(), done: false, isEditing: false }
    ]);
    setTask("");
    setError("");
  };

  const removeTask = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const toggleDone = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  const toggleEdit = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isEditing: !t.isEditing } : t))
    );

  const updateTask = (id, newText) =>
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, text: newText, isEditing: false } : t
      )
    );

  return (
    <section>
      <h2>Todo List</h2>
      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task and press Add"
        />
        <button type="submit" className="btn add-btn">
          Add
        </button>
      </form>
      {error && <div className="error">{error}</div>}

      <TodoList
        todos={todos}
        onRemove={removeTask}
        onToggle={toggleDone}
        onEdit={toggleEdit}
        onUpdate={updateTask}
      />

      <p>
        Tasks: {todos.length} | Completed: {todos.filter((t) => t.done).length}
      </p>
    </section>
  );
}
