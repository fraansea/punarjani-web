import React from 'react';

interface ServiceFeature {
  icon: string;
  text: string;
}

interface ServiceCardProps {
  image: string;
  title: string;
  features: ServiceFeature[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, features }) => {
  return (
    <article className="bg-[rgba(248,248,248,1)] flex w-full flex-col overflow-hidden text-[19px] text-[rgba(114,114,114,1)] font-normal mx-auto pl-[21px] pr-[9px] py-6 rounded-[19px] max-md:max-w-full max-md:mt-[38px] max-md:pl-5">
      <img
        src={image}
        alt={title}
        className="aspect-[2] object-contain w-full self-stretch rounded-[19px] max-md:mr-2.5"
      />
      <h3 className="text-black text-[31px] font-medium mt-2.5 max-md:ml-[7px]">
        {title}
      </h3>
      <ul className="space-y-3.5 mt-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-stretch gap-3.5">
            <img
              src={feature.icon}
              alt=""
              className="aspect-[0.96] object-contain w-[23px] shrink-0"
            />
            <span className="grow shrink basis-auto">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
