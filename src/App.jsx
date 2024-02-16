import React, { useRef } from "react";

function App() {
  const name = useRef(null);
  const age = useRef(null);
  const handleEvent=(event)=>{
    event.preventDefault();
    console.log(name.current.value ,age.current.value)
  }
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form action="" className="border-black border-2 p-5 flex flex-col items-center " onSubmit={handleEvent}>
          <h1 className="text-2xl pb-2">FormHandling</h1>
          <input ref={name} className="text-xl border-solid border-2 border-black p-2 m-2" placeholder="Name"  type="text" />
          <input ref={age}  className="text-xl border-solid border-2 border-black p-2 m-2" placeholder="Age" type="text" />
          <button className="rounded-md border-2 border-black p-2  m-2"  type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
