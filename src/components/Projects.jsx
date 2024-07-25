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
                        src="https://images.unsplash.com/photo-1516570161787-2fd917215a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbmV5fGVufDB8fDB8fHww" 
                        alt='Currency Convertor'
                        width={250}
                        height={180} 
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
                        Created a responsive currency converter application to facilitate real-time currency exchange calculations
                        using React and Tailwind CSS.
Integrated a third-party API for real-time currency exchange.
Learnt custom hooks from this project.
                        </p>
                        <div >
                          <a href="https://github.com/sauumyaaa/currency-converter" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>CODE</a>
                          <a href="https://sauumyaaa.github.io/currency-converter/" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>DEMO</a>
             </div>
                    </motion.div>
                </div>


                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1}}
                    
                      className='w-full lg:w-1/4'>
                        <img
                        src="https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='password generator'
                        width={250}
                        height={180} 
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                  
                     
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>PassWord Generator</h6>
                        <p className='mb-4 text-neutral-400'>
                        Developed a tool for generating strong passwords using React and Tailwind CSS.
Implemented various React hooks to manage state and handle user interactions.

                        </p>
                        <div >
                          <a href="https://github.com/sauumyaaa/password-generator" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>CODE</a>
                          <a href="https://sauumyaaa.github.io/password-generator/" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>DEMO</a>
</div> </motion.div>
                </div>



                
                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1}}
                    
                      className='w-full lg:w-1/4'>
                        <img
                        src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydGlmaWNpYWwlMjBuZXVyYWwlMjBuZXR3b2tycyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt='Self Driving Car Simulation'
                        width={250}
                        height={180}
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                  
                     
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Self Driving Car Simulation</h6>
                        <p className='mb-4 text-neutral-400'>
                        A Neural Networks and Machine Learning project using JavaScript with no libraries.
                        Learnt how artificial neural networks work and implemented it along with visualization.
                        </p>
                        <div >
                          <a href="https://github.com/sauumyaaa/selfDrivingCar" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>CODE</a>
                          <a href="https://sauumyaaa.github.io/selfDrivingCar/" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>DEMO</a>
          </div></motion.div>
                </div>




                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1}}
                    
                      className='w-full lg:w-1/4'>
                        <img
                        src="https://plus.unsplash.com/premium_photo-1718884970260-4c8cb02d7941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYXN0JTIwY2FuY2VyfGVufDB8fDB8fHww"
                        alt='Breast Cancer detection using CNN'
                        width={250}
                        height={180} 
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                  
                     
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Breast Cancer detection using CNN</h6>
                        <p className='mb-4 text-neutral-400'>
                        Used Convolutional Neural Networks for detecting breast cancer
                        Datasets used: UCI ML Breast Cancer Wisconsin (Diagnostic) datasets.
Models achieved exceptional training and validation accuracies of 99.78% and 97.37% respectively.
                        </p>
                        <div >
                          <a href="https://github.com/sauumyaaa/breastCancerCNN/blob/master/CNN_for_breast_cancer_detection.ipynb" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>GITHUB</a>
                          <a href="https://colab.research.google.com/github/sauumyaaa/breastCancerCNN/blob/master/CNN_for_breast_cancer_detection.ipynb" target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>GOOGLE COLAB</a>
            </div> </motion.div>
                </div>




                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1}}
                    
                      className='w-full lg:w-1/4'>
                        <img
                        src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='MANIT blogs'
                        width={250}
                        height={180}
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                  
                     
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>MANIT blogs</h6>
                        <p className='mb-4 text-neutral-400'>
                        Created a dynamic full-stack web application using React, MySQL, Node.js, and Express.js, enabling users to read and write blogs across various categories.



Implemented robust authentication using JWT and cookies to ensure secure user sessions.
                        </p>
                        <div >
                          <a  target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>soon</a>
                          <a  target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>soon</a>
              </div>
               </motion.div>
                </div>





                <div className='mb-12 flex flex-wrap lg:justify-center'>
                    <motion.div
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1}}
                    
                      className='w-full lg:w-1/4'>
                        <img
                                               src="https://images.pexels.com/photos/3986952/pexels-photo-3986952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 

                        alt='Freelance Zone'
                        width={250}
                        height={180}
                        className='m-6 rounded-lg'
                        />
                    </motion.div>

                    <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                  
                     
                      className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Freelance Zone</h6>
                        <p className='mb-4 text-neutral-400'>
                        A dynamic job marketplace platform for connecting freelancers with clients.
                        Developed a MERN stack web application where freelancers can post detailed gigs, including price and service descriptions.



Clients can explore and select gigs based on their needs, budget, and freelancer ratings.



Implemented secure authentication, user profiles, and a messaging system for seamless communication between buyers and sellers.
                        </p>
                        <div >
                          <a target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>soon</a>
                          <a  target='new' className= ' w-30 bg-violet-500 hover:bg-violet-600 p-2.5 rounded mx-2 font-bold'>soon</a>
            </div>
               </motion.div>
                </div>








            </div>
        </div>
    )
}

export default Projects