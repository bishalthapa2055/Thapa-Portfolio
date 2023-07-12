import "./Testimonials.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import data from "./data";

import "swiper/css"
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import Card from "../../Components/Card";


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <div className="container testimonials__container">

          <h2>Whats My Friends / Clients Say</h2>
          <p>These are unbiased testimonials from some of my friends/clients</p>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1687360440741-f5df549b352d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=499&q=80" alt="" />
              
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
              
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60s" alt="" />
              
            </SwiperSlide>



          </Swiper>

        </div>
      </section>
    </>
  )
}

export default Testimonials