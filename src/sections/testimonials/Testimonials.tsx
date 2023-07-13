
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Testimonials.css';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im"
// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';
import Card from '../../Components/Card';
import data from './data';

export default function Testimonials() {
  return (
    <>
      <section>

        <div className="container testimonials__container">
          <h1>Whats My Client's Say</h1>
          <p className='para'>These are unbiased testimonials from some of my friends/clients...</p>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              // slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
           
            // loop={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {
              data.map(item => {
                return (
                  <>

                    <SwiperSlide>
                      <Card className='cardd' >
                        <div className='details'>

                          <div className="left__icon">

                            <h1>
                              <ImQuotesLeft />
                            </h1>
                          </div>
                          <div className="content">
                            <p>{item.answer} </p>
                          </div>
                          <div className="right__icon">
                            <h1><ImQuotesRight /></h1>
                          </div>
                        </div>
                        <div className='foot__content'>

                          <div className="image__test">
                            <img src={item.image} />
                          </div>
                          <div className="name">

                            <h4>
                              {item.name}
                            </h4>
                            <small>{item.designation}</small>
                            <h6>Bitpoint</h6>
                          </div>
                        </div>
                      </Card>
                    </SwiperSlide>
                  </>
                )
              })
            }

          </Swiper>
        </div>
      </section>
    </>
  );
}
