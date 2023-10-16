import React from 'react'

const Abou1 = () => {
  return (
<div className="flex min-h-screen ">
    <div className='hidden lg:flex lg:flex-row w-full'>
        <div className='w-full flex flex-col'>
            <div className=' h-auto p-6 flex flex-row justify-start pb-0'>
                <div className="">
                    <span className="font-['Google Sans']  text-5xl font-bold leading-10 text-stone-900">
                        Explore
                    <br />
                    </span>
                    <span className="font-['Google Sans']  text-8xl font-bold  text-slate-700">Tech</span>
                </div>
                <div className="relative p-0">
                    <img  className="h-60 w-60 right-0" src="/assets/Vector.png" alt="" />
                </div>
                
            </div>
            <div className='flex flex-row justify-between px-0 w-6/10'>
             <div className="p-16 pr-0 ">
                <div className="pb-4"> 
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Intro to</span><span className="text-slate-500 text-5xl font-normal font-['Google Sans'] leading-10"> </span><span className="text-slate-700 text-5xl font-medium font-['Google Sans'] leading-10">Computer Science</span>
                </div>
                <div className="pb-4">      
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Software Development Lifecycle</span>
                </div >
                <div className="pb-4">
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Various Computer Languages</span>
                </div>
                <div className="pb-4">
                  <span className="text-stone-900 text-5xl  text-start font-normal font-['Google Sans'] leading-10" >Generative AI</span>
                </div >
                <div className="pb-4">
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Open Source and Git</span>
                </div>
             </div>
             
             
             <div className="flex flex-col justify-center items-center px-0 p-0">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden  h-80 w-100 rounded-full' src="/assets/Reaper.png" alt="" />
                <div className="w-96 h-14 p-4 text-slate-700 text-center text-4xl font-bold font-['Google Sans']">Adithya Vardhan</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-slate-700 p-0 text-2xl font-bold font-['Google Sans'] leading-10">Tech Lead, GDSC MLRIT<br/></span>
                    <span className="text-slate-700 text-xl font-normal font-['Google Sans'] leading-relaxed">Founder & CEO, HITO Tech Pvt Ltd<br/>
                        Founder, CloudTax</span>
                </div>
             </div>
             

            </div>

        </div>
        <div className="flex items-center w-[48px] px-8 justify-center bg-white">
            <p className="-rotate-90 text-slate-700 pl-8  text-end text-6xl opacity-60 font-bold font-['Google Sans']">SPEAKER</p>
        </div>
    </div>
    
    
    
     
  </div>
  )
}

export default Abou1