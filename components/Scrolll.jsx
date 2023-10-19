import React from 'react'

const Scrolll = () => {
  return (
<div className=" w-full px-6 bg-black min-h-screen md:pt-[150px]">
     <div className="text-center h-auto flex flex-col items-center">
        <div className='flex flex-col md:hidden items-center gap-1'> 
            <div className='flex flex-col items-center'>
                <p className='text-limee  text-center  text-[50px]  font-bold'>OUR</p>
            </div>
            <div className='pb-16 flex flex-col items-center'>
                <p className='text-limee   text-center  text-[50px] font-bold'>PARTNERS</p>
            </div>
        </div>
        <div className='hidden md:flex pb-[40px]'>
            <p className='text-limee  text-center  text-[80px] font-bold'>OUR PARTNERS</p>
        </div>
        <div className=" w-full flex-nowrap py-16 flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className='px-8'>
                <img src="/assets/Part1.png" className='lg:w-[200px] md:w-[175px] w-[100px]' alt="StudenTribe" />
            </li>
            <li className='px-8'>
                <img src="/assets/Part2.png" className='lg:w-[200px] md:w-[175px] w-[100px]' alt='Git' />
            </li>
            <li className='px-8'>
                <div className='flex flex-col justify-center items-center gap-2 md:gap-4'>
                    <img src="/assets/THE.png" alt="" className='lg:w-[175px] md:w-[150px] w-[75px]'  />
                    <img src="/assets/Part3.png" alt="" className='lg:w-[200px] md:w-[175px] w-[100px]' />
                    <img src="/assets/LEAGUE.png" alt="" className='lg:w-[175px] md:w-[150px] w-[75px]' />
                </div>
            </li>
         </ul>
         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li className='px-8'>
                <img src="/assets/Part1.png" className='lg:w-[200px] md:w-[175px] w-[100px]' alt="StudenTribe" />
            </li>
            <li className='px-8'>
                <img src="/assets/Part2.png" className='lg:w-[200px] md:w-[175px] w-[100px]' alt='Git' />
            </li>
            <li className='px-8'>
                <div className='flex flex-col justify-center items-center gap-2 md:gap-4'>
                    <img src="/assets/THE.png" alt="" className='lg:w-[175px] md:w-[125px] w-[75px]'  />
                    <img src="/assets/Part3.png" alt="" className='lg:w-[200px] md:w-[150px] w-[100px]' />
                    <img src="/assets/LEAGUE.png" alt="" className='lg:w-[175px] md:w-[125px] w-[75px]' />
                </div>
            </li>
         </ul>
        </div>
     </div>
</div>

  ) 
}

export default Scrolll
