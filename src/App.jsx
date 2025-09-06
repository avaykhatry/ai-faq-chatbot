import { useState } from "react";

export default function Info() {
  const [query, setQuery] = useState("");

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
          <button className="border-1">
            <img
              className="w-8 cursor-pointer hover:bg-red-400"
              src="src/assets/send-1-svgrepo-com.svg"
              alt=""
            />
          </button>
        </div>
        <p className="bg-lime-400">{query}</p>
      </div>
    </>
  );
}
