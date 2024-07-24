import React from 'react'
import {motion} from "framer-motion"

const More = () => {

  const data=`I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
                With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL,
                and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I 
                continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to 
                deliver high-quality solutions.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`.split(" ");
  return (
    <div className="border-b border-neutral-900 pb-4">
    <h2 className='my-20 text-center text-4xl '>More
    <span className='text-neutral-600 text-5xl font-style-'> about me</span>
    </h2>

    <div className="flex flex-wrap">
       
        <div className="w-full ">
            <div className="flex justify-center">
                <p 
                className='max-w-2xl py-2 font-light text-center'>
                
                {data.map((el, i) => (
                  
        <motion.span
        
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i/50
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}


                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default More
