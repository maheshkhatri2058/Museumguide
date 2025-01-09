import React from 'react'
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();

 async function handledata(e)
  {
    e.preventDefault();
    const form=e.target;
    const email=form.username.value;
    const password=form.pswrd.value
    // localStorage.setItem('email', email);
    // localStorage.setItem('password',password);
    localStorage.setItem('isloggedin',true);

    const data={email:email,password:password};
    console.log(data);
    fetch('http://localhost:5008/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Successful login
          navigate('/profile');
          return console.log('login');
        } else{
          alert('Invalid credentials');
          throw new Error('Invalid credentials');
        } 
      })
  }
  return (
    <>
          {/* Header */}
          <header className="bg-blue-600 text-white">
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
     <div className='card w-96 shadow-xl bg-white'>
     <div className='card-body'>
      <h2 className='text-xl font-semibold text-center'>Login To Your Account</h2>
      <form onSubmit={handledata} className='flex-col justify-center'>
            <div className="form-control">
            <label className="label-text my-2 text-slate-950 text-[16px]">Enter your Usernmae:</label>
            <input className='input input-bordered bg-transparent border-black' placeholder='Enter your Username' type="text" name="username" required/> 
            </div>
            <div className="form-control">
            <label  className="label-text my-2 text-slate-950 text-[16px]">Enter your Password:</label>
            <input className='input input-bordered bg-transparent border-black'placeholder='Confirm your password' type="password" required  name="pswrd"/>
            </div> 
            <div className='form-control mt-6'>
           <button className='btn btn-primary' type='submit'>Login</button>
              
            </div>
             
      </form>
      <div><h2 className="mt-4 text-center">Don't have an Account?<Link to='/signup'><span className="text-blue-500">Create account Here</span></Link></h2></div>
     </div>
     </div>
    
    </div>
    </>
    
  )
}

export default Login
