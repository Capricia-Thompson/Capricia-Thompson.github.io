import React, { useState, useEffect } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home'); // Set the initial value to the ID of the "Banner" section

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Adjust this selector according to your section tags
      const scrollPosition = window.scrollY - 200; // Add an offset to account for the fixed navigation

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });

      // Additional check to highlight "home" section when the page loads
      const bannerSection = document.getElementById('home');
      if (scrollPosition < bannerSection.offsetTop) {
        setActiveSection('home');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link to='home' activeClass='active' offset="-125" smooth={true} spy={true} className={`cursor-pointer w-[45px] h-[45px] flex items-center justify-center ${activeSection === 'home' ? 'text-white' : 'text-gray-300'}`}>
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass='active' smooth={true} spy={true} className={`cursor-pointer w-[45px] h-[45px] flex items-center justify-center ${activeSection === 'about' ? 'text-white' : 'text-gray-300'}`}>
            <BiUser />
          </Link>
          <Link to='skills' activeClass='active' smooth={true} spy={true} className={`cursor-pointer w-[45px] h-[45px] flex items-center justify-center ${activeSection === 'skills' ? 'text-white' : 'text-gray-300'}`}>
            <BsClipboardData />
          </Link>
          <Link to='work' activeClass='active' smooth={true} spy={true} className={`cursor-pointer w-[45px] h-[45px] flex items-center justify-center ${activeSection === 'work' ? 'text-white' : 'text-gray-300'}`}>
            <BsBriefcase />
          </Link>
          {/* <Link to='contact' activeClass='active' smooth={true} spy={true} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${activeSection === 'contact' ? 'text-white' : 'text-gray-300'}`}>
            <BsChatSquareText />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
