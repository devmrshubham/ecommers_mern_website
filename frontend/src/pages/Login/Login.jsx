/* eslint-disable no-mixed-operators */
import React, { useState ,useContext} from 'react';
import { MainContext} from "../../Context/ContextHolder";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailErr,setEmailErr] = useState();
  const [PasswordErr,setPasswordErr] = useState();
  const {setAdmin} = useContext(MainContext);
  const Navigate = useNavigate()

  const Validation = (data) =>{
    return /^\w+([\\.-]?\w+)*@gmail.com\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  }

  const ValidateForm = (e) =>{
    if(e.target.user_email.value === "" || Validation(e.target.user_email.value)===false){
      setEmailErr("Please enter email...")
    }else{
      setEmailErr("")
    }
    if(e.target.user_password.value === ""){
      setPasswordErr("Please enter password...")
    }else{
      setPasswordErr("")
    }

  }
  const login = (e) =>{
    e.preventDefault();
   ValidateForm(e)
 
    if(e.target.user_email.value && e.target.user_password.value !== ""){
       setAdmin(true)
        Navigate("/admin")
        localStorage.setItem("admin",true)
        localStorage.setItem("admin_expire",new Date().getTime()+300000)
    }
 

   
  }
  return (
    <div className=" h-screen w-full flex justify-center items-center bg-cyan-500">
      <div className=" w-[400px]  rounded-md flex  flex-col gap-y-3 shadow-2xl border p-6 ">
        <div className="text-2xl font-bold text-white underline  text-center">Login </div>
        <div className=" w-full">
          <form action='' onSubmit={login} className="flex flex-col   gap-y-4">
            <div className="">
              <label className="font-bold text-white" htmlFor="">Email</label>
              <input type="email" name="user_email" id="" className="w-full py-2 px-4 rounded  shadow-lg outline-none mt-1 " placeholder="Enter Your Email" />
              <span className="text-red-500  " >{emailErr} </span>
           
            </div>
            <div className="">
              <label className="font-bold text-white" htmlFor="">Password</label>
              <input type="Password" name="user_password" id="" className="w-full py-2 px-4 rounded shadow-lg outline-none mt-1 " placeholder="Enter Your Password" />
              <span className=" text-red-500">{PasswordErr} </span>
         
            </div>
           <div className=" w-full">
           <button className=" font-bold  bg-white px-10 py-2 my-4 rounded shadow-2xl">Submit</button>
           </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login
