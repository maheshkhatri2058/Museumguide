import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios' 

const Signup = () => {
  const navigate=useNavigate();
  function handleinput(e)
  {
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value
    const password=form.password.value
    const contact=form.phone.value
    console.log(name,email,password,contact);
    let mydata={name,email,password,contact};
    console.log(mydata);
    fetch('http://localhost:5008/signup' ,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(mydata) 
    })
    .then((res)=>
      {
        res.json()
        if(res.status === 200){
          console.log("SUCCESSS")
          navigate('/login');
          res.json();     
      }else{
          console.log("SOMETHING WENT WRONG")
      }
  })
    .then(data=>alert('Success'));
    
 
  }
  return ( 
    <>
          {/* Header */}
          <header className="bg-sky-500 text-white">
        <div className="flex justify-between py-6 px-8">
          <h1 className="text-2xl font-bold">MyMuseum</h1>
          <nav className="flex gap-10 px-6">
                        <Link to="/about" className="btn btn-warning p-4 font-bold">About</Link>
                          <Link to="/signup" className="btn btn-primary text-white font-bold p-2 rounded-md">Get Started</Link>
                          <Link to="/login" className="btn btn-secondary text-white font-bold p-2 rounded-md">Access account</Link>
                                
            
          </nav>
        </div>
      </header>
    <div className='flex justify-center items-center h-screen bg-white text-black'>
       <div className="card w-96 shadow-xl bg-white">
       <div className="card-body">
         <h2 className='text-center text-2xl font-semibold '>Create an Account</h2>
         <form onSubmit={handleinput} name='form'>
          <div className="form-control">
           <label  className="label-text my-2 text-slate-950 text-[16px] ">Enter Your Name:</label>
          <input className="input input-bordered bg-transparent border-black" placeholder='Enter your Name' type="text" name="name" required />     
            </div> 
            <div className="form-control">
            <label  className="label-text my-2 text-slate-950 text-[16px]">Enter your Email:</label>
            <input className="input input-bordered bg-transparent border-black" placeholder='Enter your Email' type="text"  name="email" required />
            </div>
            <div className="form-control">
            <label className="label-text my-2 text-slate-950 text-[16px]">Enter your Contact:</label>
            <input className="input input-bordered bg-transparent border-black" placeholder='Enter your contact No' type="text" name="phone" required />
            </div>
            <div className="form-control">
            <label className="label-text my-2 text-slate-950 text-[16px]">Enter a Password:</label>
            <input className="input input-bordered bg-transparent border-black" placeholder='Enter your password' type="password"  name="password" required />
            </div>
            <div className='form-control mt-6'>
            <button value='submit'type='submit' className='btn btn-primary'>Create Account</button>
            </div>
           
         </form>
         <div className='mt-4 text-center'><h2>Already have an Account?<Link to='/login'><span className="text-blue-500"> Login Here</span></Link></h2></div>
        </div>
       </div>
    </div>
    </>
    
  )
}

export default Signup
