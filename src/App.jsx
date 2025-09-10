import { useState } from "react";
import { questions } from "./data";
import "./App.css";
import Greeting from "./Greeting";

let nextId = 0;

export default function Info() {
  const [query, setQuery] = useState("");
  const [queries, setQueries] = useState([]);

  return (
    <>
      <div
        id="logo"
        className="px-4 flex gap-4 justify-end items-center bg-gray-100"
      >
        <h1 className="mr-auto text-4xl py-4">CODE-IN SPACE</h1>
        <button className="border rounded-md px-1 cursor-pointer hover:bg-red-300 active:bg-red-400">
          Manage
        </button>
        <button className="border rounded-md px-1 cursor-pointer hover:bg-red-300 active:bg-red-400">
          Edit
        </button>
      </div>
      <div className="container m-auto py-4">
        <Greeting />
        <ul className="text-right">
          {questions.map((ques) => (
            <li className="pb-4" key={ques.id}>
              {ques.question}
            </li>
          ))}
        </ul>
        <ul className="text-right">
          {queries.map((que) => (
            <li className="pb-4" key={que.id}>
              {que.query}
            </li>
          ))}
        </ul>

        <div className="fixed bottom-0 right-0 left-0 query-line flex justify-center items-center bg-gray-100 p-4">
          <button
            id="query-btn"
            className="border-1 p-2 pr-1.5 rounded-l-2xl cursor-pointer hover:bg-red-300 active:bg-red-400"
            onClick={() => {
              setQueries([...queries, { id: nextId++, query: query }]);
            }}
          >
            <img className="w-8" src="src/assets/add-svgrepo-com.svg" alt="" />
          </button>

          <input
            className="border-1 p-3 pr-36 pl-2.5"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Ask a question here"
          />

          <button
            id="query-btn"
            className="border-1 p-2 pr-1.5 rounded-r-2xl cursor-pointer hover:bg-red-300 active:bg-red-400"
            onClick={() => {
              setQueries([...queries, { id: nextId++, query: query }]);
            }}
          >
            <img
              className="w-8"
              src="src/assets/send-1-svgrepo-com.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}
