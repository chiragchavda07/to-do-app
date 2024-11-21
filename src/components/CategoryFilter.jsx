import React from "react";

const CategoryFilter = ({ setFilter }) => {
  return (
    <div className="category-filter mb-4">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 w-full h-12"
      >
        <option value="All" >All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
