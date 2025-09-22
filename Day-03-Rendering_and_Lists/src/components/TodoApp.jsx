import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    // Each task now has text + completed status
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const editTask = (index) => {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
      setTasks(
        tasks.map((t, i) => (i === index ? { ...t, text: newText } : t))
      );
    }
  };

  return (
    <div className="card">
      <h1>Todo List</h1>

      {/* Show total tasks count */}
      <p>Total Tasks: {tasks.length}</p>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.length === 0 ? (
          <p>No tasks yet 🙃</p>
        ) : (
          tasks.map((t, index) => (
            <li key={index}>
              {/* Strike-through if completed */}
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleComplete(index)}
              >
                {t.text}
              </span>{" "}
              <button onClick={() => editTask(index)}>✏️ Edit</button>
              <button onClick={() => removeTask(index)}>❌ Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
