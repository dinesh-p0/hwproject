import React from 'react'

const Partners = () => {
  return (
    <div className='bg-black min-h-screen p-8'>
        <div className='hidden md:flex md:flex-col'>
            <div>
                <p className='text-limee  text-center  md:text-[80px] lg:text-[100px] font-bold'>OUR PARTNERS</p>
            </div>
            <div className='flex flex-row  justify-evenly items-center pt-16 p-8 '>
                <img src="/assets/Part1.png" alt="" width={250} />
                <img src="/assets/Part2.png" alt="" width={250} />
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img src="/assets/THE.png" alt="" width={100} />
                    <img src="/assets/Part3.png" alt="" width={150} />
                    <img src="/assets/LEAGUE.png" alt="" width={100} />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Partners