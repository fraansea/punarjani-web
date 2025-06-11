import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(218,228,244,1)] flex w-full flex-col overflow-hidden items-center mt-[120px] pt-[88px] pb-[22px] rounded-2xl max-md:max-w-full max-md:mt-10">
      <div className="w-full overflow-hidden relative" style={{ height: '130px' }}>
        <div className="absolute left-0 top-0 w-full h-full flex items-center">
          <div className="animate-marquee whitespace-nowrap text-white text-[112px] font-semibold">
            Punarjani Naturopathy Acupuncture Clinic
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1247px] ml-[11px] mt-[110px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <nav className="w-1/5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col text-base text-black font-normal max-md:mt-10">
              <h3 className="text-xl font-medium self-stretch">navigation</h3>
              <a href="#home" className="mt-8 hover:text-gray-600 transition-colors">home</a>
              <a href="#services" className="mt-[13px] hover:text-gray-600 transition-colors">Services</a>
              <a href="#about" className="mt-[13px] hover:text-gray-600 transition-colors">about us</a>
              <a href="#contact" className="mt-3 hover:text-gray-600 transition-colors">contact</a>
            </div>
          </nav>
          
          <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex items-stretch gap-[40px_46px] text-base text-black font-normal max-md:mt-10">
              <div className="flex flex-col items-stretch whitespace-nowrap">
                <h3 className="text-xl font-medium">socials</h3>
                <a href="#youtube" className="mt-[33px] hover:text-gray-600 transition-colors">youtube</a>
                <a href="#instagram" className="mt-[13px] hover:text-gray-600 transition-colors">instagram</a>
                <a href="#facebook" className="mt-3 max-md:mr-0.5 hover:text-gray-600 transition-colors">facebook</a>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-medium">resourses</h3>
                <a href="#terms" className="self-stretch mt-[35px] hover:text-gray-600 transition-colors">terms of use</a>
                <a href="#policy" className="mt-3 hover:text-gray-600 transition-colors">policy</a>
              </div>
            </div>
          </div>
          
          <div className="w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch mt-[9px] max-md:mt-10">
              <button className="self-stretch bg-white min-h-[46px] gap-2 overflow-hidden text-xl text-black font-medium px-[23px] py-[11px] rounded-[26px] hover:bg-gray-100 transition-colors max-md:px-5">
                contact now
              </button>
              <div className="flex gap-[13px] ml-[11px] mt-3 max-md:ml-2.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/565fb1d8a989cbfb92b607640ab56dfde2115531?placeholderIfAbsent=true"
                  alt="Social media"
                  className="aspect-[0.98] object-contain w-11 shrink-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/fb8b0c81f8d37608a643eb43d31d0ab0d2e49936?placeholderIfAbsent=true"
                  alt="Social media"
                  className="aspect-[1.02] object-contain w-[45px] shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex w-full max-w-[1219px] gap-5 text-base text-black font-medium justify-between mt-28 max-md:max-w-full max-md:mt-10">
        <div className="mt-[74px] max-md:mt-10">
          <a href="mailto:xyz@gmail.com" className="hover:text-gray-600 transition-colors">xyz@gmail.com</a>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/efc5e1efaa3893cbfc590ea85f03f4c13c5d79c2?placeholderIfAbsent=true"
          alt="Clinic logo"
          className="aspect-[0.99] object-contain w-[101px] self-stretch shrink-0 max-w-full"
        />
        <div className="mt-[71px] max-md:mt-10">since 1999</div>
      </div>
    </footer>
  );
};
