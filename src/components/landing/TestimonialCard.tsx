import React from 'react';

interface TestimonialCardProps {
  image?: string;
  name: string;
  title: string;
  content: string;
  variant?: 'large' | 'small';
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  image, 
  name, 
  title, 
  content, 
  variant = 'small',
  className = ""
}) => {
  if (variant === 'large' && image) {
    return (
      <article className={`shadow-[0px_3px_18px_rgba(157,175,181,0.25)] border pb-[29px] rounded-[14px] border-[rgba(233,236,242,1)] border-solid ${className}`}>
        <img
          src={image}
          alt={name}
          className="aspect-[1.47] object-contain w-full rounded-[14px]"
        />
        <div className="w-full mt-[17px] px-5">
          <p className="w-[199px] gap-[9px] text-[13px] text-[rgba(35,37,39,1)] leading-[19px]">
            {content}
          </p>
          <div className="w-[83px] text-xs text-[rgba(41,50,56,1)] mt-[15px]">
            <div className="w-full gap-[9px]">
              <span className="font-bold">{name}</span>
              <span className="text-[rgba(125,122,122,1)]">{title}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`border flex w-full flex-col text-[rgba(41,50,56,1)] font-normal pl-[13px] pr-1 pt-[17px] pb-1.5 rounded-[13px] border-[rgba(233,236,242,1)] border-solid ${className}`}>
      <div className="flex gap-3 text-[11px]">
        {image && (
          <img
            src={image}
            alt={name}
            className="aspect-[1] object-contain w-[38px] shrink-0 rounded-[50%]"
          />
        )}
        <div>
          <div className="w-[60px] gap-2">
            <span className="font-bold">{name}</span>
            <span className="text-[rgba(125,122,122,1)]">{title}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch text-[13px] justify-center mt-[5px] p-[9px]">
        <p className="w-[165px] min-h-[114px] max-w-full gap-2">
          {content}
        </p>
      </div>
    </article>
  );
};
