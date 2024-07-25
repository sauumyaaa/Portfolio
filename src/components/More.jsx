import React from "react";
import { motion } from "framer-motion";

const More = () => {
  const data =
    `Outside of my academic and technical pursuits, I am deeply interested 
    in exploring financial markets  and staying informed about economic trends.
     I am also a dedicated yoga practitioner, which helps me maintain focus and balance
      in all aspects of my  life. My love for vocal music has led me to perform on several stages, 
      showcasing my passion for this art form. Additionally, I enjoy event anchoring, where I connect 
      with audiences through dynamic and engaging presentations.
      I possess strong critical thinking abilities, which enable me to analyze problems and develop effective solutions. My experience in public speaking allows me to deliver engaging presentations and communicate ideas clearly and effectively.`.split(
      " "
    );
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        More
        <span className="text-neutral-600 text-5xl font-style-"> about me</span>
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full ">
          <div className="flex justify-center">
            <p className="max-w-2xl py-2 font-light text-center">
              {data.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 50,
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
  );
};

export default More;
