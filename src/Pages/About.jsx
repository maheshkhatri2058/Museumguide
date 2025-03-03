import React from 'react'
import Footer from './Footers.jsx';
import pic3 from '../assets/pic3.jpg'
import { Link } from 'react-router-dom'
import star from '../assets/star-s.png'
import Banner from '../assets/banner1.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const About = () => {
  return (
    <div>
 {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="flex justify-between py-6 px-8">
          <h1 className="text-2xl font-bold">MyMuseum</h1>
          <nav className="flex gap-10 px-6 max-md:hidden">
                       <Link to="/signup" className="btn btn-primary text-white font-bold p-2 rounded-md">Get Started</Link>
                       <Link to="/login" className="btn btn-secondary text-white font-bold p-2 rounded-md">Access account</Link>
          </nav>
        </div>
      </header>
      {/*banner first*/}
     
      <div className='flex-col justify-center items-center relative'>
        <img src={pic3} id='aboutbnr' className='h-[650px] max-md:h-[450px]' width='100%'></img>
        <h2 className='text-3xl text-white font-bold w-[50%] absolute top-28 left-16 max-md:w-[100%] max-md:top-4 max-md:left-2 max-md:px-4 max-md:text-xl '>
          <h2 className='text-4xl text-amber-400 max-md:text-2xl'>Museum Excursion</h2>
          We are the best Museum visiting Partner of the India<br></br>
          <span className='text-xl font-light text-white'>We have explored more than 500<sup>+</sup> best museum of the India
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quam facilis nesciunt, nemo repellendus quo error quisquam quos pariatur unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime quidem, commodi libero suscipit nesciunt sit accusantium consequuntur nulla dolores, provident eos cupiditate numquam nisi adipisci incidunt, dolore iste unde? Chatbot guide for ticket Booking and museum searching.
          </span><br></br>
      
         <button className='btn btn-warning px-8 text-xl mt-2 font-semibold'>
            <Link to='/register'>Join Us</Link></button>
          </h2>
      </div>
      {/*  Second banner of the websites */}
      <div className="flex-col justify-center items-center relative" id='hero1'>
        <img src={Banner} className='h-[650px] w-[100%] max-md:h-[500px]'></img>
        <div className='absolute top-52 left-0 right-0 text-center space-y-4 max-md:top-8 '>
        <h2 className='text-7xl font-bold space-x-2 my-2 tracking-normal text-white max-md:text-3xl'>
        A Peope's Journey ,A Nation's Story</h2>
        <span className='text-3xl text-justify  text-white px-12 max-md:text-2xl max-md:px-4'>Welcome to MyMuseum, We are the best Museum visiting Partner of the India.</span><br></br>
        <p className='text-xl font-sans text-justify text-white px-20 max-md:p-4'>we invite visitors of all ages to embark on a journey through time and creativity. Whether you're here to explore the treasures of the past, marvel at modern innovations, or participate in hands-on workshops,</p>
        <button className='btn btn-warning'>Know More</button>
        </div>
      </div>
      {/*chatbot*/}
       <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      </div>
      {/*Features section*/}
      <h2 className='text-2xl font-bold text-center bg-white  text-orange-700 p-6'>Features of Mymusey</h2>
      <div className='flex gap-6 text-black bg-white p-4 max-md:flex-col'>
         <div className='w-[45%] flex-col justify-center align-middle items-center text-center shadow-sm border-[1.5px] border-solid border-slate-200 p-8 space-y-4 max-md:w-[100%]'>
            <div className='flex justify-center align-middle'>
            <img src='https://pnghq.com/wp-content/uploads/explore-free-png-images-download-transparent-images-56309.png' className='w-16 h-auto text-center'></img>
             </div>
            <h2 className='text-xl font-semibold'>Museum Excursion</h2>
            <p className='text-[16px] text-justify'>Embark on a journey of discovery with [Website Name], your ultimate guide to unforgettable museum excursions! Whether you're seeking to explore ancient civilizations, uncover groundbreaking scientific innovations, or immerse yourself in the beauty of art and culture, we connect you to the best museum experiences around the world.</p>
          </div>
          <div className='w-[45%] flex-col justify-center align-middle items-center text-center shadow-sm border-[1.5px] border-solid border-slate-200 p-8 space-y-4 max-md:w-[100%]'>
            <div className='flex justify-center align-middle'>
            <img src='https://miro.medium.com/v2/resize:fit:610/1*lINEtAIIz-Ne-uXojF7YxA.png' className='w-16 h-auto text-center'></img>
             </div>
            <h2 className='text-xl font-semibold'>Chatbot Guide</h2>
            <p className='text-[16px] text-justify'>A Real-Time Payment Gateway is a secure and efficient solution that facilitates instantaneous transactions between customers and businesses. Designed for modern commerce, it ensures seamless payment processing by integrating various payment methods, including credit/debit cards, digital wallets, and bank transfers, all within a single platform.Transactions are completed in real-time, ensuring quick settlements and enhanced cash flow.</p>
          </div>
          <div className='w-[45%] flex-col justify-center align-middle items-center text-center shadow-sm border-[1.5px] border-solid border-slate-200 p-8 space-y-4 max-md:w-[100%]'>
            <div className='flex justify-center align-middle'>
            <img src='https://t4.ftcdn.net/jpg/03/28/06/91/360_F_328069156_buCV6vYUGokXr07MsPxsQDvnjDR0XDfz.jpg' className='w-20 h-auto text-center'></img>
             </div>
            <h2 className='text-xl font-semibold'>Paymentgateway</h2>
            <p className='text-[16px] text-justify'>A Real-Time Payment Gateway is a secure and efficient solution that facilitates instantaneous transactions between customers and businesses. Designed for modern commerce, it ensures seamless payment processing by integrating various payment methods, including credit/debit cards, digital wallets, and bank transfers, all within a single platform.Transactions are completed in real-time, ensuring quick settlements and enhanced cash flow.</p>
          </div>
        
      </div>
     
      
      <h2 className='text-2xl text-center font-bold bg-white text-orange-600 p-4'>Our Custumer Reviews</h2>
  
     <div id='aboutswip'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='flex justify-center items-center gap-6 max-md:flex-col'>
          <div className='w-[45%] flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png'></img>
          </div>
          <h2 className='text-xl font-semibold text-center'>Logan Paul</h2>

            <p className='text-[16px] text-justify'>"Every museum piece tells a story; every story connects us to our roots."
            (Focus on cultural heritage and the importance of preserving history.)"Discover the stories that shaped humanity."
            (Great for inviting users to explore historic and cultural narratives.)" </p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>
             </div>
             
          </div>
          <div className='w-[45%] flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png'></img>
          </div>
          <h2 className='text-xl font-semibold text-center'>Logan Paul</h2>
          <p className='text-[16px] text-justify'>"Every museum piece tells a story; every story connects us to our roots."
            (Focus on cultural heritage and the importance of preserving history.)"Discover the stories that shaped humanity."
            (Great for inviting users to explore historic and cultural narratives.)" </p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
             
          </div>
     </div>
        
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center gap-6 max-md:flex-col'>
          <div className='w-[45%] flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%] '>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png'></img>
          </div>
          <h2 className='text-xl font-semibold text-center'>Logan Paul</h2>

            <p className='text-[16px] text-justify'>"Every museum piece tells a story; every story connects us to our roots."
            (Focus on cultural heritage and the importance of preserving history.)"Discover the stories that shaped humanity."
            (Great for inviting users to explore historic and cultural narratives.)" </p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>
             </div>
             
          </div>
          <div className='w-[45%] flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png'></img>
          </div>
          <h2 className='text-xl font-semibold text-justify'>Logan Paul</h2>
          <p className='text-[16px] text-center'>"Every museum piece tells a story; every story connects us to our roots."
            (Focus on cultural heritage and the importance of preserving history.)"Discover the stories that shaped humanity."
            (Great for inviting users to explore historic and cultural narratives.)" </p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
             
          </div>
     </div>
        
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center gap-6 max-md:flex-col'>
          <div className='w-[45%] flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png'></img>
          </div>
          <h2 className='text-xl font-semibold text-center'>Logan Paul</h2>

            <p className='text-[16px] text-justify'>"Every museum piece tells a story; every story connects us to our roots."
            (Focus on cultural heritage and the importance of preserving history.)"Discover the stories that shaped humanity."
            (Great for inviting users to explore historic and cultural narratives.)" </p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>
             </div>
             
          </div>
          <div className='w-[45%] flex-col shadow-lg border-2 border-solid border-x-slate-200 p-8 max-md:w-[100%]'>
          <div className='flex justify-center align-middle' id='avatar'>
          <img src='https://www.pngarts.com/files/5/Avatar-Face-Transparent-Background-PNG.png'></img>
          </div>
          <h2 className='text-xl font-semibold text-center'>Logan Paul</h2>
          <p className='text-[16px] text-justify'>"Every museum piece tells a story; every story connects us to our roots."
            (Focus on cultural heritage and the importance of preserving history.)"Discover the stories that shaped humanity."
            (Great for inviting users to explore historic and cultural narratives.)" </p>
            <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
             
          </div>
     </div>
        
          
        </SwiperSlide>
      </Swiper>
      </div>
      <Footer/>
    </div>
  )
}

export default About
