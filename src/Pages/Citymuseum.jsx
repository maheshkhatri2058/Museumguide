import React, { useRef, useState } from 'react';
import { Link ,useNavigate} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';

const Citymuseum = () => {
  const navigate = useNavigate();
  function bangalore() {
   navigate('/bangalore');
  }
  function mumbai() {
    navigate('/mumbai');
   }
   function delhi() {
    navigate('/delhi');
   }
   function kolkata() {
    navigate('/kolkata');
   }
   function hydrabad() {
    navigate('/hydrabad');
   }
  return (
    <div className='p-2 bg-white'>
     <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[ Pagination]}
        className="mySwipers"
      >
        <SwiperSlide>
        <div className="flex-col w-[400px]  shadow-md" onClick={bangalore}>
            <img src="https://cdn.britannica.com/27/100327-050-46805F97/Vidhana-Soudha-Bengaluru-Karnataka-India.jpg" alt='Bangalore pic'></img>
            <div className=" overflow-x-hidden">
            <h2 className="text-xl text-center py-2 font-bold text-gray-800">Bangalore</h2>
    
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex-col w-[400px] px-2 shadow-md" onClick={kolkata}>
            <img src="https://static2.tripoto.com/media/transfer/img/OgData/1500874108_victoria_memorial_hall_kolkata.jpg" alt='Kolkata pic'></img>
            <div className="text-center">
            <h2 className="text-xl text-center font-bold text-gray-800 py-2 ">Kolkata</h2>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex-col w-[400px] px-2 shadow-md " onClick={mumbai}>
            <img src="https://www.mistay.in/travel-blog/content/images/2021/07/Roam-around-7-Historcial-Monuments-of-Mumbai--Gateway-of-India-I-Mistay.jpeg"></img>
            <div className="text-center">
            <h2 className="text-xl font-bold text-center text-gray-800 py-2">Mumbai</h2>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex-col w-[400px] px-2 shadow-md" onClick={delhi}>
            <img src="https://cdn.getyourguide.com/img/location/533591d4b943b.jpeg/88.jpg"></img>
            <div className="text-justify">
            <h2 className="text-xl text-center font-bold text-gray-800 py-2">Delhi</h2>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex-col w-[400px] px-2 shadow-md" onClick={hydrabad}>
            <img src="https://i.pinimg.com/originals/d6/30/7b/d6307bd26ed7a3e42c7cc8b28713890c.jpg"></img>
            <div className="text-justify">
            <h2 className="text-xl text-center font-bold text-gray-800  py-2">Hyderabad</h2>
            </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Citymuseum
