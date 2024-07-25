import React from "react";
import pic from "../assets/pic.jpg";
import { motion } from "framer-motion";

const container = (duration, delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              // initial={{x:-100,opacity:0}}
              // animate={{x:0,opacity:1}}
              // transition={{duration:1,delay:1}}
              variants={container(0.5, 0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight mt-4 lg:mt-10 lg:text-7xl"
            >
              Saumya Agrawal
            </motion.h1>
            <motion.span
              // className='text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text  tracking-tight '>

              animate={{ rotate: 360 }}
              transition={{ type: "spring", duration: 4 }}
              className="text-4xl bg-gradient-to-r from-green-800 via-green-400 to-green-700 text-transparent bg-clip-text tracking-tight "
            >
              Tech Enthusiast
            </motion.span>
            <motion.p
              variants={container(1, 1.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a third-year MCA student at Maulana Azad National Institute
              of Technology, Bhopal, passionate about technology and innovation. With a
              strong background in Mathematics and a keen interest in
              technologies such as JavaScript, React, MySQL, and artificial intelligence, I thrive on applying mathematical and logical concepts
              to practical challenges. Enthusiastic about problem-solving, I
              enjoy learning through hands-on projects and am always eager to
              explore new technologies and enhance my skills.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, delay: 1.2 }}
              className="rounded-2xl"
              src={pic}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
