import React from 'react'

const Abou2 = () => {
  return (
<div className="hidden md:flex  md:flex-col min-h-screen  bg-black ">
    <div className='md:flex md:flex-row-reverse w-full'>
        
        <div className='w-full flex flex-col pt-4'>
            <div className=' h-auto p-6 pt-8 flex flex-row-reverse justify-start pb-0 gap-4 border-r-8 border-[rgb(140,254,62)]'>
                <div className="leading-[75px] lg:leading-[100px] flex justify-start items-end flex-col gap-4">
                    <span className="pr-[3rem] text-end text-[75px] lg:text-[100px] leading-[100px] font-bold text-white ">
                        Explore
                    <br />
                    </span>
                    <span className='pt-4 pr-[2.9rem] text-end text-[135px] lg:text-[180px] font-bold  text-limee'>Design</span>
                </div>
                <div className="absolute p-0 lg:right-[36rem] right-[26rem] z-[0]">
                  <svg className='lg:h-[333px] h-[150px]' viewBox="0 0 421 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                    <path d="M210.501 215.763L61.3965 123.669L210.501 31.5757L359.605 123.669L210.501 215.763Z" fill="#F4F4F4"/>
                    <path opacity="0.25" d="M210.499 389.426V215.763L359.603 123.669V297.332L210.499 389.426Z" fill="#F4F4F4"/>
                    <path opacity="0.5" d="M210.501 389.426L61.3965 297.332V123.669L210.501 215.763V389.426Z" fill="#F4F4F4"/>
                    </g>
                  </svg>
                </div>
                
            </div>
            <div className='flex flex-row-reverse justify-between px-0 pr-5'>
             <div className="p-16 pl-0 flex flex-col justify-start flex-wrap items-end">
                <div className="pb-4"> 
                  <span className="text-white text-2xl lg:text-4xl text-start font-normal font-['Google Sans'] leading-10">What is </span><span className="text-white text-5xl font-normal font-['Google Sans'] leading-10"> </span><span className="text-white text-3xl lg:text-5xl font-medium font-['Google Sans'] leading-10">Design ?</span>
                </div>
                <div className="pb-4">      
                  <span className="text-white text-2xl lg:text-4xl text-start font-normal font-['Google Sans'] leading-10">Design as a Career</span>
                </div >
                <div className="pb-4">
                  <span className="text-white text-2xl lg:text-4xl text-start font-normal font-['Google Sans'] leading-10">Elements of Graphic Design</span>
                </div>
                <div className="pb-4">
                  <span className="text-white text-2xl lg:text-4xl  text-start font-normal font-['Google Sans'] leading-10" >Graphic Design Principles</span>
                </div >
                <div className="pb-4">
                  <span className="text-white text-2xl lg:text-4xl text-start font-normal font-['Google Sans'] leading-10">Intro to UI/UX Design</span>
                </div>
             </div>
             
             <div className="flex flex-col justify-center items-center px-0 p-8">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden  w-100 h-80 ' src="/assets/sherlock.png" alt="" />
                <div className="w-96 h-14 p-4 text-white text-center text-3xl lg:-4xl font-bold font-['Google Sans']">Sri Nikhil</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-limee p-0 text-xl lg:text-2xl font-bold font-['Google Sans'] leading-10">Design Lead, GDSC MLRIT<br/></span>
                    <span className="text-[rgb(235,235,235)]  text-lg lg:text-xl font-normal font-['Google Sans'] leading-relaxed">Most Valuable Student, HoneSt.<br/>
                        UI/UX Hyderabad Community</span>
                </div>
             </div>
            
             

            </div>

        </div>
        <div className="flex items-center w-[48px] pt-[20rem] px-12 justify-center">
            <p className="-rotate-90 text-limee pl-8   text-6xl lg:text-8xl  font-bold font-['Google Sans']">SPEAKER</p>
        </div>
    </div>
    
    
    
     
  </div>
  )
}

export default Abou2
