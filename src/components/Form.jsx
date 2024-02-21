import React from 'react'
import { useForm } from 'react-hook-form'
//using this react-hook-form we can print or get data from form without reloading page.
function Form() {
   const{register,handleSubmit}= useForm();//when we want submit form we want to handleSunmit which mention react-form hool doc
//when console.log(register()) it gives an object which contain name,onblur,onchange,ref
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-400">
    <form
      action=""
      className="border-black border-2 p-5 flex flex-col items-center "
      onSubmit={handleSubmit(data=>console.log(data))}
    >
      <h1 className="text-2xl pb-2">FormHandling-useForm</h1>
      <input {...register('name')}
        className="text-xl border-solid border-2 border-black p-2 m-2"
        placeholder="Name"
        type="text"
      />
      <input {...register('email')}
        className="text-xl border-solid border-2 border-black p-2 m-2"
        placeholder="email"
        type="email"
      />
      <button
        className="rounded-md border-2 border-black p-2  m-2"
        type="submit"
      >
        submit
      </button>
    </form>
  </div>
  )
}

export default Form