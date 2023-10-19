import React from 'react'

const Speaker = () => {
  return (
    <div className=' md:hidden w-full flex flex-col justify-center items-center gap-8 py-4 bg-black'>
        <div className='flex justify-center'>
            <div className="flex flex-col justify-center items-center p-8 py-24 relative   rounded-xl ">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden h-50 w-60' src="/assets/Dine.png" alt="" />
                <div className="w-96 h-14 p-4 text-white text-center  text-3xl font-bold font-['Google Sans']">Dinesh Nalam</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-limee p-0 text-xl font-bold font-['Google Sans'] leading-10">Lead, GDSC MLRIT<br/></span>
                    <span className="text-[rgba(235,235,235)]  text-lg text- font-normal font-['Google Sans'] leading-relaxed">EY Scholarship Finalist<br/>
                        State Level Pitch Fest Winner</span>
                </div>
                <div className="flex absolute left-[330px] w-[48px] px-4 justify-center">
                    <p className="-rotate-90  text-limee  text-4xl  font-bold font-['Google Sans']">STARTUPS</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className="flex flex-col justify-center items-center p-8 py-24 relative  rounded-xl">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden  h-50 w-60' src="/assets/Sherlock.png" alt="" />
                <div className="w-96 h-14 p-4 text-white text-center  text-3xl font-bold font-['Google Sans']">Sri Nikhil</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-limee p-0 text-xl font-bold font-['Google Sans'] leading-10">Design Lead, GDSC MLRIT<br/></span>
                    <span className="text-[rgba(235,235,235)] text-lg font-normal font-['Google Sans'] leading-relaxed">Most Valuable Student, HoneSt.<br/>
                    UI/UX Hyderabad Community</span>
                </div>
                <div className="flex absolute left-[330px] w-[48px] px-4 justify-center">
                    <p className="-rotate-90  text-limee text-4xl  font-bold font-['Google Sans']">DESIGN</p>
                </div>
            </div>
        </div>
        <div>
            <div className="flex flex-col justify-center items-center p-8 py-24 relative rounded-xl">
                {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
                <img className=' overflow-hidden  h-60 w-70' src="/assets/Reaper.png" alt="" />
                <div className="w-96 h-14 p-4  text-white text-center text-3xl font-bold font-['Google Sans']">Adithya Vardhan</div> 
                <div className="text-center  z-20 relative">
                    <span className="text-limee p-0 text-xl font-bold font-['Google Sans'] leading-10">Tech Lead, GDSC MLRIT<br/></span>
                    <span className="text-[rgb(235,235,235)] text-lg font-normal font-['Google Sans'] leading-relaxed">Founder & CEO, HITO Tech Pvt Ltd<br/>
                    Founder, CloudTax</span>
                </div>
                <div className="flex absolute left-[330px] w-[48px] px-0 flex-column justify-center">
                    <p className="-rotate-90  text-limee  text-4xl  font-bold font-['Google Sans']">TECH</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Speaker
