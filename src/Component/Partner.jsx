import React from 'react'
import arrowImg from "./../Images/arrow.svg"
import meetingImgOne from "./../Images/meetingImgOne.png"
import meetingImgTwo from "./../Images/meetingImgTwo.png"
import footer from "./../Images/footer.png"

function Partner() {
  return (
    <>
     <div className='flex flex-col'>
      <div className='relative flex flex-col items-center md:items-start'>
          <h1 className='absolute top-2 md:left-1 z-10 font-londrina text-3xl lg:text-4xl'>Why We’re Your Ideal Partner!</h1>
          <div className='absolute top-6 w-80 h-8 rounded-tl-none rounded-tr-3xl rounded-bl-none rounded-br-3xl
          bg-[#FFCBC2]'></div>
      </div> 
      <div className='flex flex-col md:flex-row p-2 md:p-0'>
        <div className='flex flex-col items-center justify-center text-center w-full md:w-1/2'>        
            <p className='mt-20 md:mt-0 font-poppins text-2xl'>At ADHYAY, we may be a new face in the NGO landscape, but our team is anything but new to making a difference.Our strength............
            </p>
            <a href="#" className='text-[#FF6347] mt-7 font-poppins font-semibold text-lg'>Read More <img src={arrowImg} className='inline ml-2' alt="arrow"/></a>
        </div>
        <img src={meetingImgOne} alt="" className='w-full md:w-1/2'/>
      </div>
      <div className='flex flex-col md:flex-row p-2 md:p-0'>
        <img src={meetingImgTwo} alt="" className='w-full md:w-1/2'/>
        <div className='flex flex-col items-center justify-center text-center w-full md:w-1/2'>
            <p className='font-poppins font-bold text-xl sm:pt-3 md:pt-0'>Let’s write the next chapter of your story—together.</p>
            <a href="#" className='text-[#FF6347] font-poppins font-semibold text-lg mt-4'>Proceed<img src={arrowImg} className='inline ml-4' alt="arrow"/></a>
        </div>
      </div>
    </div>
    <div className='mt-28'>
      <div className='relative flex flex-col items-center md:items-start mb-10'>
          <h1 className='absolute md:left-1 -top-14 z-10 text-3xl lg:text-4xl font-londrina text-black'>Our Partners</h1>
          <div className='absolute -top-10 w-36 h-6 rounded-tl-none rounded-tr-3xl rounded-bl-none rounded-br-3xl
           bg-[#FFCBC2]'></div>
      </div>
      <img src={footer} alt="footer-section" />
    </div>
    </>
  )
}

export default Partner