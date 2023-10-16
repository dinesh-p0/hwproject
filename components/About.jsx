import React from 'react'

const About = () => {
  return (
  <div className="relative min-h-screen ">
    <div className='hidden lg:flex lg:flex-row'>
    <div className='relative w-auto h-auto p-8'>
      <div className="">
        <span className="font-['Google Sans']  text-5xl font-bold leading-10 text-stone-900">
          Explore
        <br />
        </span>
        <span className="font-['Google Sans']  text-8xl font-bold  text-slate-700">Startups</span>
      </div>
      </div>
      <div className="relative w-auto pt-16 px-0">
        <img  className="h-40 w-40 right-0" src="data:image/png;base64,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" alt="" />
     </div>
    </div>
    <div className="hidden lg:flex flex-row justify-center gap-0">
      <div className="p-16 pr-0">
        <div className="pb-4">
          <span className="text-stone-900 text-5xl font-normal font-['Google Sans'] leading-10">Intro to </span><span className="text-slate-500 text-5xl font-normal font-['Google Sans'] leading-10"> </span><span className="text-slate-700 text-5xl font-medium font-['Google Sans'] leading-10">Computer Science</span>
        </div>
        <div className="pb-4">      
          <span className="text-stone-900 text-5xl font-normal font-['Google Sans'] leading-10">Startup Lifecycle</span>
        </div >
        <div className="pb-4">
          <span className="text-stone-900 text-5xl font-normal font-['Google Sans'] leading-10">Market Research</span>
        </div>
        <div className="pb-4">
          <span className="text-stone-900 text-5xl font-normal font-['Google Sans'] leading-10" >How to Pitch?</span>
        </div >
        <div className="pb-4">
          <span className="text-stone-900 text-5xl font-normal font-['Google Sans'] leading-10">How to get startup ideas?</span>
        </div>
      </div>
      <div className=" flex flex-row justify-evenly w-1/2 relative">
          <div className="flex flex-col justify-center items-center px-0 -pt-4 p-0 relative">
            <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" />
            <div className="w-96 h-14 p-4 text-slate-700 text-center text-4xl font-bold font-['Google Sans'] leading-10">Dinesh Nalam</div> 
            <div className="text-center"><span className="text-slate-700 text-2xl font-bold font-['Google Sans'] leading-10">Lead, GDSC MLRIT<br/></span><span className="text-slate-700 text-xl font-normal font-['Google Sans'] leading-relaxed">EY Scholarship Finalist<br/>State Level Pitch Fest Winner</span></div>
          </div>
          {/* <div className="flex">
            <p className=" pt-0 -rotate-90 text-slate-700 -indent-30 text-6xl opacity-60 font-bold font-['Google Sans']">SPEAKER</p>
          </div> */}
      </div>
    </div>
  </div>
  )
}

export default About