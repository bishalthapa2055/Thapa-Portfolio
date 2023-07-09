import "./Testimonials.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';






const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <h2>Whats My Friends / Clients Say</h2>
        <p>These are unbiased testimonials from some of my friends/clients</p>
        {/* <div className="container testimonials__container">
          <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate :0,
            stretch:0,
            depth:100,
            modifier:2.5
          }}
          pagination={{el :'.swiper-pagination' , clickable:true}}
          navigation={{
            nextEl:".swipper-button-next",
            prevEl:'.swiper-button-prev',
            clickable:true
          }}
modules={[EffectCoverflow , Pagination , Navigation]}
          className="swiper__container"
          >
            <SwiperSlide  >
              <img  className ="testimonials__image"  src="https://images.unsplash.com/photo-1687360440741-f5df549b352d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=499&q=80" alt="swiperImage"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </SwiperSlide>
            <SwiperSlide >
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </SwiperSlide>
            <div className="slider__controller">
              <div className="swipper-button-prev slider-arrow">
                <ArrowBackIosOutlinedIcon />
              </div>
              <div className="swipper-button-next slider-arrow">
                <ArrowForwardIosOutlinedIcon />
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </Swiper>
        </div> */}
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

   
      </section>
    </>
  )
}

export default Testimonials