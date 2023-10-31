import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-black flex flex-col items-center px-6'>
        {/* <img src="/payroll.png" className='w-[100px]' alt="" /> */}
        <div className='flex flex-row justify-center pt-8'>
            <p className='font-londrina text-limee text-[50px] md:text-[100px] lg:text-[170px]'>SPONSPORSHIP</p>
        </div>
        <div className='sm:px-8 md:px-12 lg:px-20  flex flex-row justify-center p-4'>
            <p className='text-[#78818c] text-[20px] md:text-[35px] lg:text-[40px] text-left'>
              <span className='font-semibold text-white'>Hello World brings together </span> the world’s developers, enterprise leaders, 
                and security professionals with interactive sessions on Startups, Design, 
                and the Tech experience. Come for the learning, stay for the fun.<span className='font-semibold text-white'> We’ll see you there!</span>

            </p>
        </div>
        <div className='flex flex-row flex-wrap justify-around py-4 md:py-8'>
            <div className='flex flex-col items-start px-4  md:px-12 lg:px-20'>
                <p className='font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]' >1,000+</p>
                <span className='text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]'>attendees</span>
            </div>
            <div className='flex flex-col items-start px-4 md:px-12 lg:px-20'>
                <p className='font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]' >3+</p>
                <span className='text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]'>speakers</span>
            </div>
            <div className='flex flex-col items-start px-4  md:px-12 lg:px-20'>
                <p className='font-semibold text-white text-left text-[20px] md:text-[35px] lg:text-[40px]' >1,000+</p>
                <span className='text-[#78818c] text-[10px] text-left md:text-[25px] lg:text-[30px]'>attendees</span>
            </div>

        </div>
        {/* <div className='p-4'>
            <p className='text-white font-bold text-[50px] lg:text-[40px]'>CONNECT WITH OUR VIBRANT COMMUNITY</p>
        </div> */}
        <div className='p-4'>
            <a href="">
                <button className=' transition-all duration-300 ease-in-out hover:scale-110 bg-transparent border border-limee text-xl text-limee py-4 px-4'>
                    BECOME A SPONSOR
                </button>
            </a>
        </div>
    </div>
  )
}

export default page