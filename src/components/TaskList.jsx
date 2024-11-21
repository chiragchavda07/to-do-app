import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
