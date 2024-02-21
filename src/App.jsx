import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "", age: "" });
  const handel = (event) => {
    event.preventDefault();
    console.log(val);
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form
          action=""
          onSubmit={handel}
          className="border-black border-2 p-5 flex flex-col items-center "
        >
          <h1 className="text-2xl pb-2">FormHandling</h1>
          <input
            onChange={(event) => setVal({ ...val,name: event.target.value })}
            className="text-xl border-solid border-2 border-black p-2 m-2"
            placeholder="Name"
            type="text"
          />
          <input
            onChange={(event) => setVal({ ...val,age: event.target.value })}
            className="text-xl border-solid border-2 border-black p-2 m-2"
            placeholder="Age"
            type="number"
          />
          <button
            className="rounded-md border-2 border-black p-2  m-2"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
