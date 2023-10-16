import React from 'react'

const Abou = () => {
  return (
<div className="flex lg:min-h-screen">
    <div className='hidden md:flex md:flex-row w-full flex-shrink'>
        
        <div className='w-full flex flex-col'>
            <div className=' h-auto p-6 flex flex-row justify-start pb-0'>
                <div className="">
                    <span className="font-['Google Sans']  text-5xl font-bold leading-10 text-stone-900">
                        Explore
                    <br />
                    </span>
                    <span className="font-['Google Sans']  text-8xl font-bold  text-slate-700">Startups</span>
                </div>
                <div className="relative p-0">
                    <img  className="h-60 w-60 right-0" src="/assets/startupss.png" alt="" />
                </div>
                
            </div>
            <div className='flex flex-row justify-between px-0'>
             <div className="p-16 pr-0 ">
                <div className="pb-4"> 
                  <span className="text-stone-900 text-start md:text-3xl lg:text-5xl font-normal font-['Google Sans'] leading-10">What are</span><span className="text-slate-500 text-5xl font-normal font-['Google Sans'] leading-10"> </span><span className="text-slate-700 md:text-3xl lg:text-5xl font-medium font-['Google Sans'] leading-10">Startups ?</span>
                </div>
                <div className="pb-4">      
                  <span className="text-stone-900 text-start md:text-3xl lg:text-5xl font-normal font-['Google Sans'] leading-10">Startup Lifecycle</span>
                </div >
                <div className="pb-4">
                  <span className="text-stone-900 text-start md:text-3xl lg:text-5xl font-normal font-['Google Sans'] leading-10">Market Research</span>
                </div>
                <div className="pb-4">
                  <span className="text-stone-900 text-start md:text-3xl lg:text-5xl font-normal font-['Google Sans'] leading-10" >How to Pitch?</span>
                </div >
                <div className="pb-4">
                  <span className="text-stone-900  text-start md:text-3xl lg:text-5xl font-normal font-['Google Sans'] leading-10">How to get startup ideas?</span>
                </div>
             </div>
             
             <div className="flex flex-col justify-center items-center px-0 p-0">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden bg-[#b7b7b7] h-80 w-100' src="/assets/Dine.jpg" alt="" />
                <div className="w-96 h-14 p-4 text-slate-700 text-center md:text-3xl text-4xl font-bold font-['Google Sans']">Dinesh Nalam</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-slate-700 p-0 text-2xl font-bold font-['Google Sans'] leading-10">Lead, GDSC MLRIT<br/></span>
                    <span className="text-slate-700 text-xl font-normal font-['Google Sans'] leading-relaxed">EY Scholarship Finalist<br/>
                        State Level Pitch Fest Winner</span>
                </div>
             </div>
             

            </div>

        </div>
        <div className="flex items-center w-[48px] px-8 justify-center bg-white">
            <p className="-rotate-90 text-slate-700  text-6xl opacity-60 font-bold font-['Google Sans']">SPEAKER</p>
        </div>
    </div>
    
    </div>
     
  )
}

export default Abou