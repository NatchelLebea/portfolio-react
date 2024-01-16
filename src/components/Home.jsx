import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Natchel Lebea
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Junior Front-end developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Junior Software engineer',
        1000,
        'I am a Junior Web Developer',
        1000,
        'I am a Junior Software developer',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '0.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
