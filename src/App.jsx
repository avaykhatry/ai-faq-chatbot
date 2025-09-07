import { useState } from "react";
import { questions } from "./data";
import './App.css';

let nextId = 0;

export default function Info() {
  const [query, setQuery] = useState("");
  const [queries, setQueries] = useState([]);

  return (
    <>
    <h1 className="text-center text-4xl py-4 bg-gray-100">AI FAQ CHATBOT</h1>
      <div className="container m-auto py-4">
        <ul className="text-right">
          {questions.map(ques => (
            <li className="pb-4" key={ques.id}>
              {ques.question}
              </li>
          ))}
        </ul>
        <ul className="text-right">
          {queries.map((que) => (
            <li className="pb-4" key={que.id}>{que.query}</li>
          ))}
        </ul>

        <div className="fixed bottom-0 right-0 left-0 query-line flex justify-center items-center bg-gray-100 p-4">
          <button
            id="query-btn"
            className="border-1 p-2 pr-1.5 rounded-l-2xl"
            onClick={() => {
              setQueries([...queries, { id: nextId++, query: query }]);
            }}
          >
            <img
              className="w-8 cursor-pointer hover:bg-red-400 active:bg-red-600"
              src="src/assets/send-1-svgrepo-com.svg"
              alt=""
            />
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
            className="border-1 p-2 pr-1.5 rounded-r-2xl"
            onClick={() => {
              setQueries([...queries, { id: nextId++, query: query }]);
            }}
          >
            <img
              className="w-8 cursor-pointer hover:bg-red-400 active:bg-red-600"
              src="src/assets/add-svgrepo-com (1).svg"
              alt=""
            />
          </button>
        </div>
        
      </div>
    </>
  );
}
