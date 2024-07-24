import React from 'react'
import { motion } from 'framer-motion';

const Ed=[
    {
        year:"2022-Present",
        degree:"Master of Computer Applications",
        Institute:"Maulana Azad National Institute of Technology, Bhopal, Madhya Pradesh",
        cgpa:"cgpa- 8.71",
    },
    {   
        year:"2018-2021",
        degree:"BSc (Honours) Mathematics",
        Institute:"Graphic Era Hill University, Dehradun, Uttarakhand",
        cgpa:"cgpa- 9.7",

    },
    {   
        year:"2016-2018",
        degree:"12th",
        Institute:"Baluni Public School, Bijnor, UP",
        cgpa:"percentage- 88",

    },
    {  
        year:"2014-2016",
        degree:"10th",
        Institute:"Blooming Vale Public School, Kotdwara, Uttarakhand",
        cgpa:"percentage- 95",

    },
];
const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
    <motion.h2 
     whileInView={{ opacity: 1, y: 0 }}
     initial={{ opacity: 0, y: -100 }}
     transition={{ duration: 0.5 }}
     className='my-20 text-center text-4xl '>Education</motion.h2>
    <div>
        {Ed.map((education,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                         whileInView={{ opacity: 1, x: 0 }}
                         initial={{ opacity: 0, x: -100 }}
                         transition={{ duration: 1}}
                    className='w-full lg:w-1/4'>
                        <p className='text-sm text-neutral-400 '>{education.year}</p>
                    </motion.div>
                    <motion.div 
                         whileInView={{ opacity: 1, x: 0 }}
                         initial={{ opacity: 0, x: 100 }}
                         transition={{ duration: 1}}
                         className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-bold text-md">
                        {education.degree}
                        </h6>
                        <p className='text-sm  text-neutral-400 font-light'>{education.Institute}</p>
                      <span className='italic rounded bg-neutral-800 text-sm text-green-700'>{education.cgpa}</span> 

                    </motion.div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Education