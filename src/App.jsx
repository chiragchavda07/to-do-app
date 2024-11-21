import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");


  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.category === filter);

  return (
    <div className="app container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mb-6">To-Do App</h1>
      <TaskInput onAddTask={addTask} />
      <CategoryFilter setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
