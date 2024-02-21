import React, { useState } from "react";

function App() {
 const [val,setVal]= useState({name:""});
 const handel=(prev)=>{
    prev.preventDefault();
    console.log(prev.target.value);


 }
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form action="" className="border-black border-2 p-5 flex flex-col items-center ">
          <h1 className="text-2xl pb-2">FormHandling</h1>
          <input  onChange={handel}className="text-xl border-solid border-2 border-black p-2 m-2" placeholder="Name"  type="text" />
          <input className="text-xl border-solid border-2 border-black p-2 m-2" placeholder="Age" type="text" />
          <button  className="rounded-md border-2 border-black p-2  m-2"  type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;