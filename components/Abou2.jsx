import React from 'react'

const Abou2 = () => {
  return (
<div className="flex min-h-screen ">
    <div className='hidden lg:flex lg:flex-row-reverse w-full'>
        
        <div className='w-full flex flex-col'>
            <div className=' h-auto p-6 flex flex-row-reverse pb-0'>
                <div className="flex flex-col justify-start items-end">
                    <span className="font-['Google Sans'] text-end text-5xl font-bold leading-10 text-stone-900">
                        Explore
                    <br />
                    </span>
                    <span className="font-['Google Sans'] text-8xl font-bold  text-slate-700">Design</span>
                </div>
                <div className="relative p-0">
                    <img  className="h-60 w-60 right-0" src="/assets/design.png" alt="" />
                </div>
                
            </div>
            <div className='flex flex-row-reverse justify-between px-0 w-6/10'>
             <div className="p-16 pr-0">
                <div className="pb-4"> 
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">What is </span><span className="text-slate-500 text-5xl font-normal font-['Google Sans'] leading-10"> </span><span className="text-slate-700 text-5xl font-medium font-['Google Sans'] leading-10">Design ?</span>
                </div>
                <div className="pb-4">      
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Design as a Career</span>
                </div >
                <div className="pb-4">
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Elements of Graphic Design</span>
                </div>
                <div className="pb-4">
                  <span className="text-stone-900 text-5xl  text-start font-normal font-['Google Sans'] leading-10" >Graphic Design Principles</span>
                </div >
                <div className="pb-4">
                  <span className="text-stone-900 text-5xl text-start font-normal font-['Google Sans'] leading-10">Intro to UI/UX Design</span>
                </div>
             </div>
             
             <div className="flex flex-col justify-center items-center px-0 p-0">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden bg-[#b7b7b7] w-100 h-80 rounded-full' src="/assets/sherlock.jpg" alt="" />
                <div className="w-96 h-14 p-4 text-slate-700 text-center text-4xl font-bold font-['Google Sans']">Sri Nikhil</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-slate-700 p-0 text-2xl font-bold font-['Google Sans'] leading-10">Design Lead, GDSC MLRIT<br/></span>
                    <span className="text-slate-700 text-xl font-normal font-['Google Sans'] leading-relaxed">Most Valuable Student, HoneSt.<br/>
                        UI/UX Hyderabad Community</span>
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

export default Abou2