import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import More from "./components/More"
import Techs from "./components/Techs"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {


  return (
    
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-pink-900'>
      {/* icons ka color change kia. aur text selection color */}
<div className="fixed top-0 -z-10 h-full w-full"> 
{/* to fix background? */}
<div className="relative h-full w-full bg-slate-950">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
</div>
  </div>

</div>
 
  <div className="container mx-auto px-8">
  <Navbar/>
  <Hero/>
  <Education/>
  <Techs/>
  <Projects/>
  <More/>
 
 
 
  <Contact/>
  </div>

   
    </div>
    
  )
}

export default App


{/* <h1 className='bg-amber-300 p-4 text-3xl 	flex justify-center'>hello</h1> */}