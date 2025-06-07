import { useState } from "react"
import React from "react"

const Login = () =>{
    const [email ,setemail] = useState()
    const [password ,setepassword] = useState()
    const handleSubmitFrom = (e) =>{
     e.preventDefault();
     setemail("")
     setepassword("")
     
    }
    return  (
        <div className=" flex  h-screen w- full items-center justify-center">
            <div className=" border-2 border-cyan-300 p-15 rounded-2xl" >
               <form className="flex flex-col items-center justify-center gap-5" onSubmit={handleSubmitFrom}>
                    <input  className="border-2 border-cyan-200 rounded-2xl p-2 px-7 outline-none" type="email" placeholder="Enter You Email" name="email"  onChange={(e)=>setemail(e.target.value)} value={email} required/>
                    <input className="border-2 border-cyan-200 rounded-2xl p-2 px-7 outline-none" type="Password" placeholder="Enter You Password" name="password" onChange={(e)=>setepassword(e.target.value)} value={password}  required/>
                    <button className="bg-cyan-300 px-26 rounded-2xl py-2 font-bold">Login</button>
               </form>
            </div>
        </div>
    )
}

export default Login 