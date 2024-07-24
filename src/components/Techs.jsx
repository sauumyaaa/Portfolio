import React from "react";
import { RiReactjsLine, RiHtml5Fill, RiTailwindCssFill,RiJavascriptFill } from "react-icons/ri";
import { DiCss3 ,DiNodejs } from "react-icons/di";
import { PiFileCppFill } from "react-icons/pi";
import { TbBrandJavascript,TbBrandMysql } from "react-icons/tb";
import { GiDatabase } from "react-icons/gi";
import { BsDatabase } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SiExpress, SiMongodb,SiPython, SiMysql} from "react-icons/si";



const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techs = () => {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Core Competencies
      </motion.h2>
      <motion.div
        className=" item-center justify-center gap-50"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-column flex-wrap gap-10 item-center justify-center">
        <motion.div
            variants={iconVariants(0.9)}
            initial="initial"
            animate="animate"
           
          >
            <div  className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <GiDatabase className="text-7xl text-sky-600" />
            </div>
            <h4 className='text-center'>DBMS</h4>
          </motion.div>
          
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
           
          >
            <div  className="rounded-2xl border-4 border-neutral-800 p-4 bg-white ">
            < SiMysql className="text-7xl text-sky-600" />
            </div>
            <h4 className='text-center'>MySQL</h4>
          </motion.div>

          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
          
          >
            <div   className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <PiFileCppFill className="text-7xl text-cyan-700" />
            </div>
            <h4 className='text-center'>C++</h4>
          </motion.div>
        
        
        

         

          
        </div>

        <div className="flex flex-column gap-10 my-10 item-center justify-center ">
        <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"

          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <RiHtml5Fill className="text-7xl text-orange-700" />
            </div>
            <h4 className='text-center'>HTML</h4>
          </motion.div>
          <motion.div
            variants={iconVariants(3.7)}
            initial="initial"
            animate="animate"
            
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <DiCss3 className="text-7xl text-blue-800" />
            </div>
            <h4 className='text-center'>CSS</h4>
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
           
          > 
          <div  className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
          <RiJavascriptFill className="text-7xl text-yellow-500  " />
          </div>
          <h4 className='text-center'>JavaScript</h4>
          </motion.div>

         
          

         
        </div>

        <div className="flex flex-column gap-10 item-center justify-center">
        
        <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <RiReactjsLine className="text-7xl text-cyan-500" />
            </div>
           
            <h4 className='text-center'>React</h4>
          </motion.div>
       
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
          
          >
            <div   className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <SiExpress className="text-7xl text-black" />
            </div>
            <h4 className='text-center'>Express.js</h4>
          </motion.div>
        

       
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
          
          >
            <div   className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <DiNodejs className="text-7xl text-green-600" />
            </div>
            <h4 className='text-center'>Node.js</h4>
          </motion.div>
      

       
         
          </div>
      </motion.div>
      <h2 className="my-20 text-center text-4xl ">
        Additional Familiar Skills
      </h2>
      <motion.div
        className=" item-center justify-center gap-50"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-column flex-wrap gap-10 item-center justify-center">
        <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
          
          >
            <div   className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <RiTailwindCssFill className="text-7xl text-cyan-500" />
            </div>
            <h4 className='text-center'>Tailwind CSS</h4>
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
           
          >
            <div  className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <SiPython className="text-7xl text-yellow-300" />
            </div>
            <h4 className='text-center'>Python</h4>
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <FaBootstrap className="text-7xl text-cyan-400" />
            </div>
            <h4 className='text-center'>Bootstrap</h4>
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
          
          >
            <div   className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
            <SiMongodb className="text-7xl text-green-800" />
            </div>
            <h4 className='text-center'>MongoDB</h4>
          </motion.div>
          </div>




          </motion.div>
    </div>
  );
};

export default Techs;
