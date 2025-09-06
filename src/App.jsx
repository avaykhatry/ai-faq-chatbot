import { useState } from "react";

export default function Info() {
  const [age, setAge] = useState(18);
  const [query, setQuery] = useState('');

  return (
    <>
    <div className="query-line flex justify-center">

    <input onChange={e => setQuery(e.target.value)} value={query} type="text" placeholder="Ask a question here" />
    <button><img className="w-8" src="src/assets/send-1-svgrepo-com.svg" alt="" /></button>
    </div>
    </> 
  )
}