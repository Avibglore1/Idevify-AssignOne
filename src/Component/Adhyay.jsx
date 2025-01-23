import React from 'react'
import programmesImg from "./../Images/programmes.png"
import arrowImg from "./../Images/arrow.svg"
import helpImg from "./../Images/help.png"

function Adhyay() {
  return (
    <>
        {/* our program */}
    <div className='w-full mb-28 md:mb-36'>
      <div className='relative flex flex-col justify-center items-center'>
        <h1 className='absolute top-1 z-10 text-4xl font-londrina text-black'>our program</h1>
        <div className='absolute top-7 w-48 h-6 md:h-8 rounded-3xl bg-[#FFCBC2]'></div>
      </div>        
        <img src={programmesImg} className='w-full mt-20'/>
    </div>
    {/* Support */}
      <div className="bg-[url('./Images/Reinstatingdream.png')] 
        flex flex-col justify-center items-center" alt='our-programmes'>
      <div className='relative flex flex-col justify-center items-center mt-32 w-full'>
          <h2 className='absolute z-10 font-londrina text-5xl text-white'>Tailored Support</h2>
          <div className='absolute -top-1 w-80 h-8 rounded-3xl bg-[#FFCBC2]'></div>
      </div>
      <p className='font-poppins font-semibold text-lg text-white text-center mt-24 mb-12 p-1'>
        The ADHYAY Chapter Model is designed to create a multifaceted impact by dividing our initiatives into region-specific chapters, each 
        catering to the unique needs of diverse beneficiary communities. Each chapter operates independently, focusing on core agendas such as
        education, gender equality, livelihood development, old-age assistance, healthcare, and tribal empowerment. By aligning programs with
        the local community’s specific requirements, we ensure that resources are efficiently utilized, and impact is targeted and measurable.
      </p>     
    </div>
       {/* Adhyah */}
    <div className='mt-16 w-full'>
      <div className='relative flex flex-col items-center md:items-start'>
          <h2 className='z-10 font-poppins font-bold text-3xl ml-2'>What is Adhyay?</h2>
          <div className='absolute top-4 w-56 h-9 rounded-tl-none rounded-tr-3xl rounded-bl-none rounded-br-3xl 
            bg-[#FFCBC2]'></div>
      </div>      
      <div className='flex flex-col md:flex-row mt-4 '>
          <div className='flex flex-col items-center justify-center sm:w-full md:w-1/2 p-5'>
            <p className='font-poppins font-semibold text-lg'>ADHYAY, meaning "chapter" in Sanskrit, symbolizes a fresh
              beginning. It is a first-of-its-kind community where former
              civil service aspirants can channel their passion and expertise
              into meaningful opportunities that celebrate their zeal for 
              governance, policy-making, and thought leadership.
            </p>
            <a href="#" className='text-[#FF6347] font-poppins font-semibold text-lg mt-16'>Read More <img src={arrowImg} className='inline ml-1' alt="arrow"/> </a>
          </div>
          <img src={helpImg} alt="" className='sm:w-full md:w-1/2 ml-auto'/>
      </div>
   </div>
    </>
  )
}

export default Adhyay