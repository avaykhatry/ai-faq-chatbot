import { useState } from "react";

export default function TodoApp() {
  // state to keep track of todos
  const [todos, setTodos] = useState([]);
  // state for input value
  const [newTodo, setNewTodo] = useState("");

  // handle adding new todo
  function addTodo() {
    if (newTodo.trim() === "") return; // avoid empty todos
    setTodos([...todos, newTodo]); // update array with new item
    setNewTodo(""); // reset input field
  }

  // handle deleting a todo
  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index)); 
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task"
          className="flex-1 p-2 border rounded"
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center p-2 bg-white rounded shadow"
          >
            <span>{todo}</span>
            <button 
              onClick={() => deleteTodo(index)} 
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
