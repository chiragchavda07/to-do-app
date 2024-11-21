import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask({
        id: Date.now(),
        text: task,
        category,
        completed: false,
      });
      setTask("");
    }
  };

  return (
    <div className="task-input mb-4">
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-full mb-2 h-16"
      />
      <div className="flex justify-between pt-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-3/5 mb-2 h-12"
        >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white w-2/6 px-4 mb-2 rounded-lg"
        >
        Add Task
      </button>
        </div>
    </div>
  );
};

export default TaskInput;
