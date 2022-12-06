// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swip.css"
// import required modules
// import React from 'react'
import { Autoplay, Pagination, Navigation } from "swiper";
import principal1 from "../../../assets/images/principal1.jpg"
import principal2 from "../../../assets/images/principal2.jpg"
import principal3 from "../../../assets/images/principal3.jpg"
import principal4 from "../../../assets/images/principal4.jpg"
import principal5 from "../../../assets/images/principal5.jpg"


const Swip = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swpimg"><img src={principal1} alt="" /></SwiperSlide>
        <SwiperSlide className="swpimg"><img src={principal2} alt="" /></SwiperSlide>
        <SwiperSlide className="swpimg"><img src={principal3} alt="" /></SwiperSlide>
        <SwiperSlide className="swpimg"><img src={principal4} alt="" /></SwiperSlide>
        <SwiperSlide className="swpimg"><img src={principal5} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Swip
