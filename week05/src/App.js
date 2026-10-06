import React, { useState } from "react";
import usePersistedState from "./hooks/usePersistedState";

function App() {
  // 使用 usePersistedState 让任务列表持久化
  const [tasks, setTasks] = usePersistedState("tasks", []);

  // 任务输入框状态
  const [taskText, setTaskText] = useState("");

  // 过滤状态：All | Active | Completed
  const [filter, setFilter] = useState("All");

  // 处理新任务输入
  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Add clicked, input =", taskText);

    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
    };

    setTasks((prev) => {
      const next = [...prev, newTask];
      console.log("New tasks list =", next);
      return next;
    });

    setTaskText("");
  };

  // 任务状态切换（Update: completed）
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 编辑任务（Update: text）
  const editTask = (id) => {
    const current = tasks.find((t) => t.id === id);
    const newText = window.prompt("Edit task:", current?.text ?? "");
    if (newText === null) return; // 用户点取消
    if (!newText.trim()) return; // 不允许空
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: newText.trim() } : t))
    );
  };

  // 删除任务（Delete）
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 未完成数量（正确的 remaining）
  const remaining = tasks.filter((t) => !t.completed).length;

  // 根据 filter 过滤任务（Read）
  const filteredTasks = tasks.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true; // All
  });

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      {/* 任务输入框 */}
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>

        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={taskText}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      {/* 任务筛选按钮 */}
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={filter === "All"}
          onClick={() => setFilter("All")}
        >
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={filter === "Active"}
          onClick={() => setFilter("Active")}
        >
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={filter === "Completed"}
          onClick={() => setFilter("Completed")}
        >
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>

      {/* 任务统计 */}
      <h2 id="list-heading">{remaining} tasks remaining</h2>

      {/* 任务列表 */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {filteredTasks.map((task) => (
          <li className="todo stack-small" key={task.id}>
            <div className="c-cb">
              <input
                id={`todo-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <label className="todo-label" htmlFor={`todo-${task.id}`}>
                {task.text}
              </label>
            </div>

            <div className="btn-group">
              <button
                type="button"
                className="btn"
                onClick={() => editTask(task.id)}
              >
                Edit <span className="visually-hidden">{task.text}</span>
              </button>

              <button
                type="button"
                className="btn btn__danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete <span className="visually-hidden">{task.text}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
