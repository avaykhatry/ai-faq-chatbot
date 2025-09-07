import { useState } from "react";
import { questions } from "./data";

let nextId = 0;

export default function Info() {
  const [query, setQuery] = useState("");
  const [queries, setQueries] = useState([]);

  return (
    <>
      <div className="container m-auto max-w-80dvw">
        <div className="query-line flex justify-center items-center bg-red-500 p-4">
          <input
            className="border-1 p-1"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Ask a question here"
          />
          <button id="query-btn" className="border-1" onClick={() => {setQueries([...queries, {id:nextId++, query:query}]);}  }>
            <img
              className="w-8 cursor-pointer hover:bg-red-400 active:bg-red-600"
              src="src/assets/send-1-svgrepo-com.svg"
              alt=""
            />
          </button>
        </div>
        <ul>
          {queries.map(que => (
            <li key={que.id}>{que.query}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
