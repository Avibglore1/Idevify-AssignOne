import React from "react";
import programmesImg from "./../assets/Home/programmes.png";
import arrowImg from "./../assets/Home/arrow.svg";
import helpImg from "./../assets/Home/help.png";

function Adhyay() {
  return (
    <>
      {/* Our Program Section */}
      <div className="w-full mb-28 md:mb-36 px-4">
        <div className="relative flex flex-col justify-center items-center">
          <h1 className="absolute top-1 z-10 text-3xl md:text-4xl font-londrina text-black">
            Our Program
          </h1>
          <div className="absolute top-7 w-36 md:w-48 h-6 md:h-8 rounded-3xl bg-[#FFCBC2]"></div>
        </div>
        <img src={programmesImg} alt="Our Programmes" className="w-full mt-20 max-w-full h-auto" />
      </div>

      {/* Support Section */}
      <div
        className="bg-cover bg-center bg-[url('./../../public/reinstatingdream.png')] flex flex-col justify-center items-center py-16"
        alt="Our Programmes"
      >
        <div className="relative flex flex-col justify-center items-center w-full">
          <h2 className="absolute z-10 font-londrina text-3xl md:text-5xl text-white">
            Tailored Support
          </h2>
          <div className="absolute -top-1 w-60 md:w-80 h-8 rounded-3xl bg-[#FFCBC2]"></div>
        </div>
        <p className="font-poppins font-semibold text-sm md:text-lg text-white text-center mt-12 md:mt-24 mb-8 md:mb-12 px-4 md:px-12">
          The ADHYAY Chapter Model is designed to create a multifaceted impact by dividing our
          initiatives into region-specific chapters, each catering to the unique needs of diverse
          beneficiary communities. Each chapter operates independently, focusing on core agendas
          such as education, gender equality, livelihood development, old-age assistance,
          healthcare, and tribal empowerment. By aligning programs with the local community’s
          specific requirements, we ensure that resources are efficiently utilized, and impact is
          targeted and measurable.
        </p>
      </div>

      {/* Adhyay Section */}
      <div className="mt-16 w-full px-4 md:px-12">
        <div className="relative flex flex-col items-center md:items-start">
          <h2 className="z-10 font-poppins font-bold text-2xl md:text-3xl ml-0 md:ml-2">
            What is Adhyay?
          </h2>
          <div
            className="absolute top-4 w-48 md:w-56 h-7 md:h-9 rounded-tl-none rounded-tr-3xl 
              rounded-bl-none rounded-br-3xl bg-[#FFCBC2]"
          ></div>
        </div>
        <div className="flex flex-col md:flex-row mt-6 gap-8">
          <div className="flex flex-col items-center md:items-start justify-center sm:w-full md:w-1/2 p-4">
            <p className="font-poppins font-semibold text-sm md:text-lg text-center md:text-left">
              ADHYAY, meaning "chapter" in Sanskrit, symbolizes a fresh beginning. It is a
              first-of-its-kind community where former civil service aspirants can channel their
              passion and expertise into meaningful opportunities that celebrate their zeal for
              governance, policy-making, and thought leadership.
            </p>
            <a
              href="#"
              className="text-[#FF6347] font-poppins font-semibold text-sm md:text-lg mt-8 flex items-center"
            >
              Read More <img src={arrowImg} className="inline ml-2 w-4 h-4 md:w-5 md:h-5" alt="arrow" />
            </a>
          </div>
          <img
            src={helpImg}
            alt="Adhyay Illustration"
            className="sm:w-full md:w-1/2 max-w-full h-auto mx-auto md:mx-0"
          />
        </div>
      </div>
    </>
  );
}

export default Adhyay;
