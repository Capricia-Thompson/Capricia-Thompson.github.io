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
      <div>
        <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={csharp} className="object-contain" alt='csharp symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">C#</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={python} className="object-contain" alt='python symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">Python</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={javascript} className="object-contain" alt='javascript symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">JavaScript</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={flask} className="object-contain" alt='flask symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">Flask</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={django} className="object-contain" alt='django symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">Django</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={node} className="" alt='node symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">Node.js</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={sql} className="object-contain" alt='sql symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl sm:text-base md:text-lg xl:text-3xl ml-4 font-medium text-center sm:text-left">SQL</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-blue-600'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
              <div className='w-20 h-20 flex-auto flex'>
                <img src={react} className="object-contain" alt='react symbol' />
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl ml-4 font-medium text-center sm:text-left">React</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Skills;
