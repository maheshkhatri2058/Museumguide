import React from 'react'

const Footers = () => {
  return (
    <div>
    <footer className="footer bg-gray-800">
        <div className="flex justify-between px-10 w-[100%] text-white max-md:flex-col">
            <div className="max-md:w-[100%]">
                <div className='flex gap-4'>
                <a href="#">About</a>
                <a href="#">Benifits</a>
                <a href="#">Careers</a>
                <a href="#">Services</a>
                </div>
                <p>Copyright {new Date().getFullYear()}All rights reserved</p>
                

            </div>
            <div className="max-md:w-[100%]">
                
                <div className="flex gap-4">
                <a className='text-xl text-white'><i className="ri-facebook-circle-fill"></i></a>
                <a className='text-xl text-white'><i className="ri-twitter-fill"></i></a>
              <a className='text-xl text-white'>  <i className="ri-youtube-fill"></i></a>
              <a className='text-xl text-white'> <i className="ri-instagram-fill"></i></a>
                
                </div>
                <p>Support:mymusye@gmail.com</p>
             
            </div>
        </div>
    </footer>

      
    </div>
  )
}

export default Footers
