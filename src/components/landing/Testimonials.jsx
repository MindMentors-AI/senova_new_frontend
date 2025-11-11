import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <>
      <div className="text-center flex items-center flex-col">
        <h1 className="text-[3vw] text-[#1e1e1e] font-semibold">
          What Users Say
        </h1>
        <p className="w-[50%] text-[#4a4a4a] text-[1.2vw] leading-[1.2] font-medium">
          Discover how Senova AI transforms cognitive experiences
        </p>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // spaceBetween={50}
        slidesPerView={1}
        loop={true}
        grabCursor
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        // navigation
        // pagination={{ clickable: true , enabled : false}}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className="w-full h-[70vh] relative px-40"
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 h-24 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl leading-relaxed mb-8">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg mb-1">Emily Watson</p>
                    <p className="text-base">Operations Director at CloudScale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 h-24 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl leading-relaxed mb-8">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg mb-1">Emily Watson</p>
                    <p className="text-base">Operations Director at CloudScale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 h-24 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl leading-relaxed mb-8">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg mb-1">Emily Watson</p>
                    <p className="text-base">Operations Director at CloudScale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center text-8xl">
            <div className="max-w-4xl w-full rounded-3xl backdrop-blur-sm border border-[] p-12">
              <div className="flex gap-8 items-start">
                {/* <!-- Profile Image --> */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Emily Watson"
                  className="w-24 h-24 rounded-full object-cover shrink-0"
                />

                {/* <!-- Content --> */}
                <div className="flex-1 text-[#1e1e1e]">
                  {/* <!-- Testimonial Text --> */}
                  <p className="text-2xl leading-relaxed mb-8">
                    "This solution has significantly improved our team's
                    productivity. The intuitive interface makes complex tasks
                    simple."
                  </p>

                  {/* <!-- Author Info --> */}
                  <div>
                    <p className=" font-semibold text-lg mb-1">Emily Watson</p>
                    <p className="text-base">Operations Director at CloudScale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default Testimonials;
