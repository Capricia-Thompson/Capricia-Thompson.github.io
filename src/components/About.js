import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <about className='section relative top-16' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
          <h2 className='h2 text-accent'>About Me</h2>
          <h3 className='h3 mb-4'>I'm a Full-Stack Developer with experience in Javascript, Python, and C#.</h3>
          <p className='mb-6'>I have over 5 years of experience working in various public safety roles. My educational background is in animal sciences and software development. One of my passions in life is helping those around me succeed and accomplish their dreams. I'm always striving for optimization and maximum growth for my team.</p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                  <CountUp start={0} end={7} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Years of <br />
                Experience
              </div>
            </div>
          </div>
          <div className='flex gap-x-6 items-center'>
            <a href="mailto: thompsoncapricia@gmail.com"><button className='btn btn-lg'>Contact Me</button></a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/Capricia-Thompson?tab=repositories' className='text-gradient btn-link'>My Portfolio</a>
          </div>
        </motion.div>
      </div>
    </div>
  </about>;
};

export default About;
