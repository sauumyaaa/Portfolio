import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{rotate:360}}
        transition={{ type:"spring" , duration: 4}}
        className="my-10 text-center text-4xl "
      >
        Get in Touch
      </motion.h1>
      <motion.div 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       animate={{rotate:360}}
       transition={{ type:"spring" , duration: 4}}
       className="text-center tracking-tighter">
        <p>
        
            write to me at:</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sauumyaaa@gmail.com"
          target="_blank"
          className="my-4 border-b text-sm"
        >
          sauumyaaa@gmail.com
        </a>
        <br></br>

        <p className="my-6">
          Call or WhatsApp me at:
          <p  className="text-sm">
           
           
          
        
            +91 6398515166
          </p>
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
