import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )    
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px] 
            '/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    position="Software Engineer" company="YGL Convergence Berhad"
                    companyLink="https://www.yglworld.com/"
                    time="January 2022 - Present" address="No 35, Jalan Scotland, Pulau Pinang"
                    work="For the past 2 years,I have been working on implementing and customizing Enterprise Resource Planning (ERP) systems (Windows Application and Website). 
                    I have hands-on experience in ERP modules such as Finance, Sales, and Purchase, and have delivered tailored solutions for clients across various industries."
                />
                
                <Details 
                    position="System Validation Engineer Trainee" company="Intel"
                    companyLink="https://www.intel.com/content/www/us/en/homepage.html"
                    time="May 2021 - August 2021" address="Bayan Lepas, Pulau Pinang"
                    work="As a System Validation Intern at Intel, I specialize in automating THC (Touch Host Controller) test content. 
                    I have a strong understanding of software development processes and experience in programming languages and tools such as Python, C++, and Git."
                />
            </ul>
        </div>
        
    </div>
  )
}

export default Experience