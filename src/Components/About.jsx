import React from 'react';

const About = () => {
  return (
    <div className='bg-black py-10 px-20 flex justify-center items-center h-[calc(100vh-60px)]'>
      <div className="text-center">
        <h2 className='text-yellow-400 text-4xl mb-4'>About FutureCode</h2>
        <p className='text-white text-lg'>
          At FutureCode, our mission is to bridge the gap between education and employment.
          We offer internships for students to gain hands-on experience, and upon completion, 
          we help secure permanent job opportunities. Join us to kickstart your career with 
          practical skills and real-world exposure.
        </p>
      </div>
    </div>
  );
};

export default About;
