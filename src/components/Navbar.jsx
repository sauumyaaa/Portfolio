import React from 'react'
import { FaLinkedin , FaGithub , FaInstagramSquare, FaLaptopCode } from "react-icons/fa";


function Navbar() {
    return (
       <nav className="mb-20 flex  items-center justify-between py-6">
        <div className='m-4 text-3xl'>
        < FaLaptopCode/>
        </div>
       
            <div className="bg-red-200 flex  flex-shrink-0 items-center">
                {/* logos ko piche krne k liye ye div use kiya */}
              
            </div>

            <div className='m-8 flex flex-center justify-center gap-7 text-4xl'>
                {/* yaha pe flex center aur justify center hatane se kuch ho ni raha */}
                <FaLinkedin />
                <FaInstagramSquare />
                <FaGithub />
                
               
            </div>

       </nav>
    )
}

export default Navbar