import React from 'react';
import { Navigation } from './Navigation';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[941px] w-full max-w-[1361px] items-stretch pb-[50px] px-[62px] rounded-[100px] max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/e05533f7fd5911f5e0481014df233af6df2d2d48?placeholderIfAbsent=true"
        alt="Clinic background"
        className="absolute h-full w-full object-cover inset-0"
      />
      
      <header className="relative z-10 flex w-full gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex h-10 flex-col pt-[7px] px-1 ml-[-16px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/0a0c59f2c5526bc67922bf11f30f9a8542982de4?placeholderIfAbsent=true"
            alt="Punarjani Clinic Logo"
            className="aspect-[4.13] object-contain w-[194px] max-w-full"
          />
        </div>
        
        <Navigation />
        
        <div className="self-stretch flex items-stretch gap-5 text-xl text-white font-semibold my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/6e71a09dec1c7a3c756636e7af53774bca08f0fe?placeholderIfAbsent=true"
            alt="Contact icon"
            className="aspect-[1] object-contain w-10 shrink-0"
          />
          <button className="self-stretch bg-[rgba(144,176,5,1)] gap-2.5 overflow-hidden px-7 py-2 rounded-[32px] hover:bg-[rgba(124,151,4,1)] transition-transform transform hover:scale-105 max-md:px-5">
            Contact
          </button>
        </div>
      </header>

      <div className="relative self-center flex w-[239px] max-w-full items-stretch gap-4 text-[32px] text-white font-semibold whitespace-nowrap text-center mt-[143px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/22f58827c880f319d57f54e2fae92c272c06a7d0?placeholderIfAbsent=true"
          alt="Location icon"
          className="aspect-[1] object-contain w-[51px] shrink-0"
        />
        <div className="grow shrink w-[162px] my-auto">
          patturaikkal
        </div>
      </div>

      <h1 className="relative text-white text-8xl font-semibold text-center self-center mt-[55px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Punarjani Naturopathy Acupuncture Clinic
      </h1>

      <div className="relative w-[741px] max-w-full ml-10 mt-[199px] max-md:mt-10 animate-slide-in-left">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[59%] max-md:w-full max-md:ml-0">
            <article className="shadow-[0px_3px_19px_-1px_rgba(0,0,0,0.2)] relative grow overflow-hidden text-[13px] text-white font-normal pt-[17px] pb-[11px] px-[21px] rounded-[13px] border-[rgba(142,142,142,1)] border-solid border-2 max-md:max-w-full max-md:mt-7 max-md:px-5">
              <p>
                Experience the harmony of healing and wellness, where ancient
                therapies meet modern care. At Punarjani Naturopathy &
                Acupuncture Clinic, we blend tradition and science to restore
                balance, relieve pain, and revitalize your well-being.
              </p>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/53b40604-ad16-4d27-b64f-88be66476365?placeholderIfAbsent=true"
                alt="Learn more"
                className="aspect-[3.5] object-contain w-[119px] bg-black max-w-full mt-[17px] rounded-md"
              />
            </article>
          </div>
          
          <div className="w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <article className="shadow-[0px_3px_19px_-1px_rgba(0,0,0,0.2)] relative flex grow flex-col overflow-hidden pl-[22px] pr-[57px] py-[13px] rounded-[13px] border-[rgba(142,142,142,1)] border-solid border-2 max-md:mt-7 max-md:px-5">
              <div className="text-white text-base font-semibold leading-[30px]">
                Available <span className="text-xl">Monday–Friday</span>
                <br />
                <span className="text-xl text-white">2–6 PM</span>
              </div>
              <button className="bg-black overflow-hidden text-[11px] text-white font-medium text-center mt-[38px] px-[21px] py-[17px] w-[240px] rounded-[13px] hover:bg-gray-800 transition-transform transform hover:scale-105 max-md:px-5">
                Book Now
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
