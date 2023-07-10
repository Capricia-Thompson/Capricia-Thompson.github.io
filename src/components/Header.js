import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header id='header'>
    <div className='container mx-auto p-10'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
