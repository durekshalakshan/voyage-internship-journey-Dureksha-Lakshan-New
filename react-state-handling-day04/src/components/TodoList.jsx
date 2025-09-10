import { useState } from "react";

export default function TodoList({ todos, onRemove, onToggle, onEdit, onUpdate }) {
  if (!todos.length) return <p>No tasks yet</p>;

  return (
    <ul>
      {todos.map((t) => {
        const [editText, setEditText] = useState(t.text); 

        return (
          <li
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => onToggle(t.id)}
            />

            {t.isEditing ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onUpdate(t.id, editText);
                  }}
                />
                <button
                  onClick={() => onUpdate(t.id, editText)}
                  className="btn save-btn"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: t.done ? "line-through" : "none" }}
                >
                  {t.text}
                </span>
                <button onClick={() => onEdit(t.id)} className="btn edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => onRemove(t.id)}
                  className="btn delete-btn"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}