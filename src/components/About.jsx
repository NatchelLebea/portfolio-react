import React from 'react';
import ProfilePicture from '../assets/picture.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <img
              src={ProfilePicture}
              alt='Profile Image'
              className='w-48 h-48 rounded-full border-4 border-pink-600 mb-4'
            />
          </div>
          <div className='text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
            <p></p>
            <p className='mb-4'>
              I am Natchel Lebea, a computer science graduate who is very enthusiastic and passinate about software engineering
              and latest technologies.I love to create beautiful and functional web applications that are easy to use and enjoyable
              to look at. I have a strong background in HTML, CSS, JavaScripts , Java, SQL and reactjs ,and I'm always looking for 
              new ways to improve my skills and challenge myself. I'm excited to work on new even if not new projects to help people
              achieve their goals.
            </p>
            {/* Add margin to create space */}
            <p className='mb-8'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
