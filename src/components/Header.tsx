import React from "react";
import { Link } from "react-router-dom";

import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"; 

const Header = () => {
  return (
    <nav className='bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 dark:bg-black'>
    <div className='container flex flex-wrap items-center justify-between mx-auto'>
      <a href="/" className='flex items-center'> 
        <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Orgate AI</span>
      </a>
      <nav className="flex gap-6">
        <a
          href='https://twitter.com/Ibelick'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
          >
          <TwitterLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' />
        </a>
        <a
          href='https://github.com/0verread/openjobs'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <GitHubLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' />
        </a>
      </nav>
    </div>
  </nav>
    // <header className='flex items-center justify-between py-8'>
    //   <div className='text-xl text-white'>Openjobs</div>
    //   <nav className='flex gap-6'>
    //     <a
    //       href='https://twitter.com/Ibelick'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //       className='inline-flex'
    //     >
    //       {/* <TwitterLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' /> */}
    //     </a>
    //     <a
    //       href='https://github.com/ibelick/ui-snippets'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //       className='inline-flex'
    //     >
    //       {/* <GitHubLogoIcon className='h-6 w-6 text-slate-400 transition-colors hover:text-white' /> */}
    //     </a>
    //   </nav>
    // </header>
  );
};

export default Header;