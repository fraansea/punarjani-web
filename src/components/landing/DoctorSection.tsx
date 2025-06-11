import React from 'react';

export const DoctorSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1250px] ml-[34px] mt-[100px] max-md:max-w-full max-md:mt-10">
      <header className="text-black text-7xl font-normal self-center mt-[120px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 text-center mb-[100px] max-md:mb-10">
        <h2 className="flex items-center justify-center gap-8">
          <span>Meet Our</span>
          <span className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-cyan-100 overflow-hidden">
            <img src="/doctorrr.png" alt="doctor" className="w-24 h-24 rounded-full object-cover" />
          </span>
          <span>Expert Doctor</span>
        </h2>
      </header>
      
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[57%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/74215b7128fb429b6752310b37b38d583adaafed?placeholderIfAbsent=true"
            alt="Dr. Affrin Firos"
            className="aspect-[1.5] object-contain w-full grow rounded-[19px] max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
          <article className="flex flex-col self-stretch items-stretch text-black font-normal my-auto max-md:max-w-full max-md:mt-10">
            <h3 className="text-[69px] font-medium mr-9 max-md:max-w-full max-md:text-[40px] max-md:mr-2.5">
              AFFRIN FIROS
            </h3>
            <p className="text-[rgba(94,94,94,1)] text-3xl uppercase mt-[35px]">
              mbbs,ms,phd
            </p>
            <p className="text-[15px] mt-[30px] max-md:max-w-full">
              Dr. [Doctor's Name], a highly experienced **BNYS
              practitioner** with **24 years of expertise**, specializes in
              **Naturopathy, Acupuncture, and Holistic Healing**. Holding
              advanced certifications in **Therapeutic Counseling and Dorn
              Therapy**, the doctor blends traditional wisdom with modern
              techniques to promote natural wellness..
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/b8ac7168-7c32-4d66-892e-9eda53552bdd?placeholderIfAbsent=true"
              alt="Learn more about Dr. Firos"
              className="aspect-[3.47] object-contain w-[139px] bg-black max-w-full mt-5 rounded-lg"
            />
          </article>
        </div>
      </div>
    </section>
  );
};
