import React from "react";

const TaskItem = ({ task, onDeleteTask, onToggleComplete }) => {
  return (
    <div
      className={`task-item p-4 border mb-2 flex justify-between items-center ${
        task.completed ? "bg-green-100" : ""
      }`}
    >
      <div>
        <h3 className={`${task.completed ? "line-through" : ""}`}>
          {task.text}
        </h3>
        <p className="text-sm text-gray-500">Category: {task.category}</p>
      </div>
      <div>
        <button
          onClick={() => onToggleComplete(task.id)}
          className="bg-green-500 text-white px-2 py-1 mr-2 rounded-md"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
