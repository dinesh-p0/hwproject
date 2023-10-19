import React from 'react'

const Scrolll = () => {
  return (
<div className="md:hidden w-full px-6 bg-black min-h-screen grid content-center">
     <div className="text-center">
        <div className=" w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
         <ul x-ref="logos" className="flex animate-infinite-scroll items-center justify-center [&_li]:mx-8 ">
            <li>
                <img src="/assets/Part1.png"  width={2000} alt="StudenTribe" />
            </li>
            <li>
                <img src="/assets/Part2.png" width={2000} alt='Git' />
            </li>
            <li>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img src="/assets/THE.png" alt="" width={150} />
                    <img src="/assets/Part3.png" alt="" width={2000} />
                    <img src="/assets/LEAGUE.png" alt="" width={150} />
                </div>
            </li>
         </ul>
        </div>
     </div>
</div>

  ) 
}

export default Scrolll