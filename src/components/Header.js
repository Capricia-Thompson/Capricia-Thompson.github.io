import React from 'react';
import Logo from '../assets/logo.svg';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';


const Header = () => {
  return <header id='header' className='fixed top-0 left-0 right-0 z-50 bg-slate-900'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='https://github.com/Capricia-Thompson' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/capricia-thompson/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
          <a href="mailto: thompsoncapricia@gmail.com" i target='_blank' rel='noopener noreferrer'>
            <FaEnvelope />
          </a>
          <a href='https://discordapp.com/users/1081828746862010448' target='_blank' rel='noopener noreferrer'>
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
