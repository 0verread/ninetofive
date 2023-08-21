import React from "react";

const Landing = () => {
  return (
    
    <section className="section flex items-center justify-center h-screen md:flex md:justify-center overflow-y-hidden">
      <div className='bg-main text-center'>
        <div className='wrapper max-w-xl transform -translate-y-18 sm:-translate-y-2xfull'>
          <h1 className='text-white font-header font-bold text-5xl mb-6'>an open source and community led job search and hiring platform
          </h1>
        </div>
        <a className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white" href="/">
          <span className="justify-center">Subscribe</span>
        </a>
      </div>
    </section>
  )
};

export default Landing;