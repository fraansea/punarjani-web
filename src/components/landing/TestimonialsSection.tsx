import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/9c0b3768b3114931cf3680763093c55bb7ed0470?placeholderIfAbsent=true",
      name: "Istiak Ahmed",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      variant: 'large' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/f5171064816cc2032b75904ac9ca5f64d4504120?placeholderIfAbsent=true",
      name: "Jon Sari",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
      variant: 'small' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/8ab24fba29b49ad149cfb1d8f6114c2d65823052?placeholderIfAbsent=true",
      name: "Rahul Deb",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
      variant: 'small' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/beca337ac674756ede04fc02f51a282bb4d87878?placeholderIfAbsent=true",
      name: "Nazmul Karim",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
      variant: 'small' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/7435bbbceab5fe0db5550b2f3b82d0f91e796b60?placeholderIfAbsent=true",
      name: "Ahmed Saimoon",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      variant: 'small' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/1f5f9e6d7bfe191d2fb52ee62c4f2875fbc2d078?placeholderIfAbsent=true",
      name: "Sakib Mo",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      variant: 'small' as const
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/e33da5801f2c33d32647957b40d71a3bed3b872e?placeholderIfAbsent=true",
      name: "Amir Khan",
      title: "CEO, Avito",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
      variant: 'small' as const
    }
  ];

  return (
    <section className="bg-white shadow-[0px_4px_19px_rgba(157,175,181,0.25)] flex flex-col items-center justify-center mt-[120px] px-20 py-[57px] rounded-[45px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full max-w-[1026px] flex-col items-stretch max-md:max-w-full">
        <header className="self-center w-full max-w-full text-center mb-8">
          <h2 className="flex flex-wrap items-center justify-center gap-6 text-[65px] font-medium">
            <span>What Our</span>
            <span className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-yellow-300">
              <img src="/smile.png" alt="smile" className="w-16 h-16" />
            </span>
            <span>Happy</span>
            <span className="w-full"></span>
            <span>Clients Say</span>
          </h2>
        </header>
        
        <div className="mt-[59px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[24%] max-md:w-full max-md:ml-0">
              <div className="grow font-normal max-md:mt-[17px]">
                <TestimonialCard {...testimonials[0]} />
                <TestimonialCard {...testimonials[1]} className="mt-3.5" />
              </div>
            </div>
            
            <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-[17px]">
                <div className="w-full max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[65%] max-md:w-full max-md:ml-0">
                      <div className="shadow-[0px_3px_18px_rgba(157,175,181,0.25)] border grow rounded-[14px] border-[rgba(233,236,242,1)] border-solid max-md:max-w-full max-md:mt-[17px]">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                          <div className="w-[55%] max-md:w-full max-md:ml-0">
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/8ab24fba29b49ad149cfb1d8f6114c2d65823052?placeholderIfAbsent=true"
                              alt="Rahul Deb"
                              className="aspect-[1.06] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:mt-[19px]"
                            />
                          </div>
                          <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="w-full font-normal mt-[17px] max-md:mt-9">
                              <p className="w-[203px] min-h-[95px] gap-[9px] text-[13px] text-[rgba(35,37,39,1)] leading-[19px]">
                                {testimonials[2].content}
                              </p>
                              <div className="w-[83px] text-xs text-[rgba(41,50,56,1)] mt-[15px]">
                                <div className="w-full gap-[9px]">
                                  <span className="font-bold">{testimonials[2].name}</span>
                                  <span className="text-[rgba(125,122,122,1)]">{testimonials[2].title}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[35%] ml-5 max-md:w-full max-md:ml-0">
                      <TestimonialCard {...testimonials[3]} className="max-md:mt-[17px]" />
                    </div>
                  </div>
                </div>
                
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                    <div className="w-[65%] max-md:w-full max-md:ml-0">
                      <div className="grow text-[rgba(41,50,56,1)] font-normal mt-4 max-md:max-w-full max-md:mt-[33px]">
                        <TestimonialCard {...testimonials[4]} className="border flex w-full flex-col items-stretch pt-[21px] pb-[13px] px-[33px] rounded-[14px] border-[rgba(233,236,242,1)] border-solid max-md:max-w-full max-md:px-5" />
                        <TestimonialCard {...testimonials[5]} className="border flex w-full flex-col items-stretch mt-[13px] pt-6 pb-2.5 px-[33px] rounded-[14px] border-[rgba(233,236,242,1)] border-solid max-md:max-w-full max-md:px-5" />
                      </div>
                    </div>
                    <div className="w-[35%] ml-5 max-md:w-full max-md:ml-0">
                      <TestimonialCard {...testimonials[6]} className="max-md:mt-[17px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
