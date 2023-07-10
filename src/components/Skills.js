import React from 'react';
import { bsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import csharp from '../assets/icons8-c-240.png';
import django from '../assets/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-100.png';
import flask from '../assets/icons8-flask-256.png';
import javascript from '../assets/icons8-javascript-256.png';
import node from '../assets/icons8-node-js-240.png';
import python from '../assets/icons8-python-240.png';
import react from '../assets/icons8-react-native-256.png';
import sql from '../assets/icons8-sql-60.png';


const Skills = () => {
  return <div className='section' id='skills'>
    <div className='container mx-auto'>
      <h2 className='h2 text-accent leading-tight'>
        Here are some of the tools I've worked with:
      </h2>
      <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={csharp} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={python} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={javascript} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={flask} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={django} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={node} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={sql} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-4 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <img src={react} width='500' height='500' alt='javascript symbol' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Skills;
