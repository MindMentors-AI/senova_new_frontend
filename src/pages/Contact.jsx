import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';
import ProfileCard from "../components/ProfileCard";

const Contact = () => {
  return (
    <>
    <Loader/>
      <Navbar />
      <section className="w-full h-screen pt-40 pb-20 relative"  >
        {/* <div className="side-blurs w-full h-screen bg-black/20 absolute top-0 left-0 z-2 pointer-events-none">
        <div className="left absolute top-0 left-0 w-[20%] h-full bg-black/1 backdrop-blur-xs"></div>
        <div className="left absolute top-0 right-0 w-[20%] h-full bg-black/1 backdrop-blur-xs"></div>
        </div> */}
      {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={1.7}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-full w-full relative"
      >
        <SwiperSlide className="w-[80%] h-[80%]">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper> */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        dir="rtl"
        slidesPerView={3.5}
        modules={[EffectCards]}
        cardsEffect={{
          perSlideOffset: 100,
          perSlideRotate: 0,
          rotate: 0
      
        }
        loop={true}
        className="mySwiper w-full h-full relative flex items-center justify-center"
      >
         <SwiperSlide className="w-full h-full flex items-center justify-center">
         <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
      </SwiperSlide>
      
      <SwiperSlide className="w-full h-full">
      <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
      </SwiperSlide>
      
      <SwiperSlide className="w-full h-full">
      <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
      <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
      </SwiperSlide>
      
      <SwiperSlide className="w-full h-full">
      <ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
      </SwiperSlide>
        {/* <SwiperSlide  className="w-full h-full bg-red-500 rounded-md">Slide 1</SwiperSlide>
        <SwiperSlide  className="w-full h-full bg-green-500 rounded-md">Slide 2</SwiperSlide>
        <SwiperSlide className="w-full h-full bg-black rounded-md"> Slide 3</SwiperSlide>
        <SwiperSlide  className="w-full h-full bg-red-500 rounded-md">Slide 4</SwiperSlide>
        <SwiperSlide  className="w-full h-full bg-green-500 rounded-md">Slide 5</SwiperSlide> */}
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
