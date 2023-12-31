"use client";

import React, { useState } from "react";

const TodoMind = () => {
  const [mindmaps, setMindmaps] = useState([
    { id: 1, name: "Mindmap 1" },
    { id: 2, name: "Mindmap 2" },
    // Add more mindmaps as needed
  ]);

  const editMindmap = (mindmapId) => {
    // Logic to handle editing a mindmap
    console.log(`Editing mindmap with ID: ${mindmapId}`);
  };

  const deleteMindmap = (mindmapId) => {
    // Logic to handle deleting a mindmap
    const updatedMindmaps = mindmaps.filter(
      (mindmap) => mindmap.id !== mindmapId
    );
    setMindmaps(updatedMindmaps);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Mindmap List</h1>

      <ul>
        {mindmaps.map((mindmap) => (
          <li
            key={mindmap.id}
            className="flex justify-between items-center mb-2"
          >
            <span>{mindmap.name}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => editMindmap(mindmap.id)}
                className="text-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMindmap(mindmap.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoMind;
