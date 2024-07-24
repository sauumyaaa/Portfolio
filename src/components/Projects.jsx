import React from 'react'
import pic1 from "../assets/projects/pic1.jpg"
import pic2 from "../assets/projects/pic2.jpg"
import { motion } from 'framer-motion'


function Projects() {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 0.5 }}
              className='my-20 text-center text-4xl'>
            Projects</motion.h2>
            <div>
                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{ duration: 1}}
                      className='w-full lg:w-1/4'>
                        <img
                        src={pic2} 
                        alt='password generator'
                        width={160}
                        height={160} 
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                         whileInView={{ opacity: 1, x: 0 }}
                         initial={{ opacity: 0, x: 100 }}
                         transition={{ duration: 1 }}
                      
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Currency Convertor</h6>
                        <p className='mb-4 text-neutral-400'>
                        The SecurePassGen project aims to create a robust and user-friendly password generator application.
                        This application will provide users with the capability to generate strong, random passwords that 
                        adhere to various security policies and complexity requirements. The generated passwords will be 
                        suitable for different use cases, from personal accounts to corporate systems.
                        </p>
                        <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-small font-medium text-purple-700'>HTML</span>
                        <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-small font-medium text-purple-700'>CSS</span>
                        <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-small font-medium text-purple-700'>JavaScript</span>
                    </motion.div>
                </div>


                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <div
                    
                      className='w-full lg:w-1/4'>
                        <img
                        src={pic1} 
                        alt='password generator'
                        width={160}
                        height={160} 
                        className='m-6 rounded-lg'
                        />
                    </div>

                    <div 
                     
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>PassWord Generator</h6>
                        <p className='mb-4 text-neutral-400'>
                        The GlobalCurrency project aims to create a dynamic and user-friendly currency converter application.
                        This application will provide users with the ability to convert between various currencies using real-time
                        exchange rates. The goal is to offer a reliable and convenient tool for travelers, businesses, and anyone 
                        needing quick access to up-to-date currency conversions.
                        </p>
                        <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-small font-medium text-purple-700'>HTML</span>
                        <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-small font-medium text-purple-700'>CSS</span>
                        <span className='mr-2 rounded bg-neutral-800 px-2 py-1 text-small font-medium text-purple-700'>JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects