import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import './landing.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/DR.jpg';
import img2 from '../assets/kerala.jpg';
import img3 from '../assets/mumbai.jpg';
import img4 from '../assets/victoria3.jpg';
import { useState } from "react";
import img5 from '../assets/image5.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Footers from "./Footers";
import Museumcard from "./Museumcard";
import Citymuseum from "./Citymuseum";
function Landing() {
  const [city, setCity] = useState("Bangalore");
  const navigate = useNavigate();
  function showmus(){
    alert(city);
    navigate('/bangalore');s

  }

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white text-black">
        <div className="flex justify-between py-6 px-8">
          <h1 className="text-2xl font-bold">MyMuseum</h1>
          <nav className="flex gap-10 px-6 max-md:hidden">
            <Link to="/about" className="btn btn-warning p-4 font-bold">About</Link>
            <Link to="/signup" className="btn btn-primary text-white font-bold p-2 rounded-md">Get Started</Link>
            <Link to="/login" className="btn btn-secondary text-white font-bold p-2 rounded-md">Access account</Link>


          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white px-10">
        <div className="flex-col items-center py-[50px] h-[500px] rounded-sm justify-center align-middle space-y-6 max-md:space-y-2" id="hero">
          <h1 className="text-center text-5xl font-semibold text-white max-md:text-xl">Book your museum tickets with MuseyBotTick</h1>
          <p className="text-center text-xl text-white max-md:text-[16px]">Discover a new way to explore museums with our responsive chatbot system!</p>
          <div className="flex justify-center align-middle gap-4 max-md:flex-col max-md:px-4">
            <select  className="bg-slate-800 p-2 text-white rounded-md">
              <option value="" >Select Location</option>
              <option value="Jaipur" >Bangalore</option>
              <option value="Agra">Mumbai</option>
              <option value="Mumbai">Kolkata</option>
              <option value="Jodhpur">Hyderabad</option>
              <option value="">New Delhi</option>
            </select>
            <input type="date" placeholder="Date"  className="bg-slate-800 p-2 outline-4 text-white rounded-md"/>
            <input type="time" placeholder="set your Time" className="bg-slate-800 p-2 text-white rounded-md" />
            <div className="visitor-input">
              <input type="number" defaultValue="1" min="1" id="visitors" placeholder="No of visitors"  className="bg-slate-800 p-4 text-white rounded-md" />
            </div>
            <button className=" bg-slate-600 p-4 text-white rounded-md" onClick={showmus}>Search</button>
          </div>
        </div>
      </section>
      {/* Top museums sections according to city */}
      <div>
      <h2 className="text-2xl font-bold text-orange-500 text-center py-2">Top Destination For Museum Excursion</h2>
      <Citymuseum/>
       
      </div>
        {/* Top Museum Destinations */}
  
      <div className="bg-white">
      <section className="px-10 text-slate-950 bg-white max-md:px-0" id="landingswip">
        <h3 className="text-3xl font-semibold text-orange-600 p-2 text-center max-md:text-xl">TOp Museums to visit</h3>
        
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          display: 'none',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > 
        <SwiperSlide>
        <div className="flex justify-between gap-4 bg-white max-md:gap-1">
          <div className="flex max-md:flex-col max-md">
            <img src={img1} className="w-[50%] h-[450px] max-md:w-[100%] max-md:h-[300px]"></img>
            <div className="text-start px-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Visvesvaraya Industrial and Technological Museum (VITM)</h2>
            <h2 className="font-semibold">About Museum</h2>
            <p className="text-gray-600 mb-2">Visvesvaraya Industrial and Technological Museum, Bangalore (VITM), a constituent unit of National Council of Science Museums (NCSM), Ministry of Culture, Government of India, was established in memory of Bharat Ratna Sir M. Visvesvaraya. A modest building with a built up area of 4000 sq. mtrs., was constructed in the serene surrounding of the Cubbon Park, housing various industrial products and engines, which was opened by the first Prime Minister of India, Pandit Jawaharlal Nehru on 14.07.1962.</p>
           <p className="text-gray-600 mb-2"> Ticket Price: <span className="text-gray-800">RS 40-200</span></p>
            <p className="text-gray-600 mb-4">Location: <span className="text-gray-800">Kasturba Road, Bangalore India</span></p>
            </div>
           </div>
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between gap-4 bg-white max-md:flex-col">
          <div className="flex max-md:flex-col" id="stimy">
            <img src={img3} className="w-[50%] h-[450px] max-md:w-[100%] max-md:h-[300px]"></img>
            <div className="text-start px-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-800 mb-2">National Gallery of Modern Art (NGMA)</h2>
            <h2 className="font-semibold">About Museum</h2>
            <p className="text-gray-600 mb-2">The National Gallery of Modern Art (NGMA) is the premier art gallery under Ministry of Culture, Government of India. The main museum at Jaipur House in New Delhi was established on 29 March 1954 by the Government of India, with subsequent branches at Mumbai and Bangalore. Its collection of more than 17,000 works by 2000 plus artists includes artists such as Thomas Daniell, Raja Ravi Verma, Abanindranath Tagore, Rabindranath Tagore, Amrita Sher-Gil as well as foreign artists.Some of the oldest works preserved here date back to 1857.</p>
           <p className="text-gray-600 mb-2"> Ticket Price: <span className="text-gray-800">RS 40-200</span></p>
            <p className="text-gray-600 mb-4">Location: <span className="text-gray-800">Kasturba Road, Bangalore India</span></p>
            </div>
           </div>
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between gap-4 bg-white max-md:flex-col" id="stimy">
          <div className="flex max-md:flex-col" id="stimy">
            <img src={img4} className="w-[50%] h-[450px] max-md:w-[100%] max-md:h-[300px]"></img>
            <div className="text-start px-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Kempegowda Museum</h2>
            <h2 className="font-semibold">About Museum</h2>
            <p className="text-gray-600 mb-2">Kempegowda Museum is a government museum located in the city of Bangalore, in the state of Karnataka, India. It was established in the year 2011 is dedicated to Yelahanka chieftain Kempegowda (1513-1569) who was the founder of Bangalore city. The museum is located on the first floor of Mayo Hall. The museum has Kempegowda's statue as well as posters and pictures of forts, temples, reservoirs and inscriptions from his time. </p>
           <p className="text-gray-600 mb-2"> Ticket Price: <span className="text-gray-800">RS 40-200</span></p>
            <p className="text-gray-600 mb-4">Location: <span className="text-gray-800">Kasturba Road, Bangalore India</span></p>
            </div>
           </div>
        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between gap-4 bg-white" id="stswip">
          <div className="flex max-md:flex-col" id="stimy">
            <img src={img2} className="w-[50%] h-[450px] max-md:w-[100%] max-md:h-[300px]"></img>
            <div className="text-start px-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-800 mb-2">National Gandhi Museum</h2>
            <h2 className="font-semibold">About Museum</h2>
            <p className="text-gray-600 mb-2">The National Gandhi Museum or Gandhi Memorial Museum is a museum located in New Delhi, India showcasing the life and principles of Mahatma Gandhi. The museum first opened in Mumbai, shortly after Gandhi was assassinated in 1948. The museum relocated several times before moving to Raj Ghat, New Delhi in 1961. the Gandhi Museum plays a dual role of showcasing Gandhi's work to the public and also serving as a place for general study. The books are divided into two sections, those written by or about Gandhi and books on other subject matters.</p>
           <p className="text-gray-600 mb-2"> Ticket Price: <span className="text-gray-800">RS 40-200</span></p>
            <p className="text-gray-600 mb-4">Location: <span className="text-gray-800">Kasturba Road, Bangalore India</span></p>
            </div>
           </div>
        
        </div>
        </SwiperSlide>
      
      
      </Swiper>
  
      </section>

      </div>
      
    

      {/* Chatbot */}
      <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
    <df-messenger
      intent="Welcome"
      chat-title="musey-chatbot"
      agent-id="af7e29ba-8b3c-49fe-b22b-5052e147e0f5"
      language-code="en"
      chat-icon="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
    ></df-messenger>


      </div>

      {/* Highly Recommended Section */}
      <section className="px-10 text-slate-950 bg-white max-md:px-10" id="highly">
        <h3 className="text-3xl font-semibold text-orange-600 p-2 text-center">Our Highly Recommended Museum Of the India</h3>
        
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
        <div className="flex justify-between gap-4 max-md:flex-col" id="ndswip">
          <div className="flex-col">
            <img src="https://images.pexels.com/photos/12504366/pexels-photo-12504366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ></img>
            <div className="text-start max-md:px-0">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Victoria Memorial Hall</h2>
            <p className="text-gray-600 mb-2 max-md:text-[16px]">⚡ Opening Hours: <span className="text-gray-800">10:15-4:30 PM</span></p>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">💸 Ticket Price: <span className="text-gray-800">$1-3</span></p>
            <p className="text-gray-600 mb-4  max-md:text-[16px]">📍 Location: <span className="text-gray-800">Kolkata, West Bengal</span></p>
            </div>
           
          </div>
          <div className="flex-col ">
            <img src="https://www.indoasia-tours.com/wp-content/uploads/2016/05/Calico-Museum-of-Textile.jpg"></img>
            <div className="text-starts">
            <div className="text-start">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Calico Museum of Textiles</h2>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">⚡ Opening Hours: <span className="text-gray-800">11:00-4:00 PM</span></p>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">💸 Ticket Price: <span className="text-gray-800">$1-5</span></p>
            <p className="text-gray-600 mb-4  max-md:text-[16px]">📍 Location: <span className="text-gray-800"> Ahmedabad, Gujarat</span></p>

            </div>
            
            </div>
           
          </div>
          <div className="flex-col ">
            <img src="https://bdnmb.ca/wp-content/uploads/2020/09/dolls3.jpg"></img>
          <div className="text-start">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Shankar's International Dolls Museum</h2>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">⚡ Opening Hours: <span className="text-gray-800">10:15-5:00 PM</span></p>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">💸 Ticket Price: <span className="text-gray-800">$0.8-4</span></p>
            <p className="text-gray-600 mb-4  max-md:text-[16px]">📍 Location: <span className="text-gray-800">New Delhi</span></p>
          </div>
           
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-between gap-4 max-md:flex-col" id="ndswip">
          <div className="flex-col max-md:w-[100%]">
            <img src="https://www.tripsavvy.com/thmb/5eVZCLfmmPkY1apmgPw4qfB1VkM=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1208328810-ef5b2c725dd248f197e9e5c2e31aa753.jpg" ></img>
            <div className="text-start">
            <h2 className="text-xl font-bold text-gray-800 mb-2">National Museum</h2>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">⚡ Opening Hours: <span className="text-gray-800">10:30-4:00 PM</span></p>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">💸 Ticket Price: <span className="text-gray-800">$2-5</span></p>
            <p className="text-gray-600 mb-4  max-md:text-[16px]">📍 Location: <span className="text-gray-800">New Delhi</span></p>
            </div>
            
          </div>
          <div className="flex-col ">
            <img src="https://pragativadi.com/wp-content/uploads/2021/02/10-Most-Famous-Museums-in-India-%E2%80%93-The-Best-Way-to-Explore-the-Indian-Heritage-Culture-and-Traditions.jpg"></img>
            <div className="text-start">
            <h2 className="text-xl font-bold text-gray-800 mb-2"> Indian Museum</h2>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">⚡ Opening Hours: <span className="text-gray-800">11:00-4:00 PM</span></p>
            <p className="text-gray-600 mb-2  max-md:text-[16px]">💸 Ticket Price: <span className="text-gray-800">$2-4</span></p>
            <p className="text-gray-600 mb-4  max-md:text-[16px]">📍 Location: <span className="text-gray-800"> Kolkata, West Bengal</span></p>
            </div>
           
          </div>
          <div className="flex-col ">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/50382227093c4ae17ef1ab_20220523165700.jpeg"></img>
            <div className="text-start">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Salar Jung Museum</h2>
            <p className="text-gray-600 mb-2  max-md:text-[16px] ">⚡ Opening Hours: <span className="text-gray-800">10:30-4:00</span></p>
            <p className="text-gray-600 mb-2  max-md:text-[16px] ">💸 Ticket Price: <span className="text-gray-800">$2-6</span></p>
            <p className="text-gray-600 mb-4  max-md:text-[16px]">📍 Location: <span className="text-gray-800">Hyderabad, Telangana</span></p>
            </div>
           
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
  
      </section>

      {/* Footer */}
     <Footers/>
    </div>
  );
}

export default Landing;
