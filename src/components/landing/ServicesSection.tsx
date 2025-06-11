import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/9d26f2b83873672ade8955d1b70e13e16bae3353?placeholderIfAbsent=true",
      title: "Electro Acupuncture",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/ca2402bf8b67cce738b36db47d0b2aa9e3c73335?placeholderIfAbsent=true", text: "Electric stimulation with acupuncture needles." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/f1650daa20cbf9406433a563890a81a0e407bc67?placeholderIfAbsent=true", text: "Needles inserted at specific points." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/a40e2e62da65fe288890bd9a02d2584e69135845?placeholderIfAbsent=true", text: "Mild electric pulses applied." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/c75665b899d29f8fa463f6f327c5642deb8dd8ed?placeholderIfAbsent=true", text: "Relieves pain and inflammation." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/96f4a2a40e7ba3ecc16f627c6337889bc7256eee?placeholderIfAbsent=true", text: "Enhances circulation and muscle recovery." }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/008709aa882bc1ed7c944995f6bd7d097cc47dfa?placeholderIfAbsent=true",
      title: "Electro Acupuncture",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/975a9492701228e423f85662aea2eeaf7779215c?placeholderIfAbsent=true", text: "Electric stimulation with acupuncture needles." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/5ae875f9d347ca88e447c736b352a072d19e5816?placeholderIfAbsent=true", text: "Needles inserted at specific points." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/c4642559e22b3eddfcab3aef244afc5c21e536cb?placeholderIfAbsent=true", text: "Mild electric pulses applied." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/0c50c7ba327091208c7fe8e8a75b422d41c04f28?placeholderIfAbsent=true", text: "Relieves pain and inflammation." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/bb8b0b2d9ac984771b433d6dc5d4388d134528a8?placeholderIfAbsent=true", text: "Enhances circulation and muscle recovery." }
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/3cff56997b983c9ea29ad599e96cddcf3475522e?placeholderIfAbsent=true",
      title: "Electro Acupuncture",
      features: [
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/13dc5a2d33c999c811afeac7401acc4a565b441e?placeholderIfAbsent=true", text: "Electric stimulation with acupuncture needles." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/41e9d1a9e3b9876bd178b96da36a57d85f2c7997?placeholderIfAbsent=true", text: "Needles inserted at specific points." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/364cf55d5fae36f6c66801ffab741ed3730af24b?placeholderIfAbsent=true", text: "Mild electric pulses applied." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/e8ccb4e50017f7496335691bc2afeae0209b125c?placeholderIfAbsent=true", text: "Relieves pain and inflammation." },
        { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/cff3fa5dc3874ab2d27058962eb858fc6d7bf50e?placeholderIfAbsent=true", text: "Enhances circulation and muscle recovery." }
      ]
    }
  ];

  return (
    <section className="self-stretch flex w-full flex-col items-stretch mt-[118px] px-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <header className="text-black text-7xl font-normal mt-[120px] max-md:max-w-full max-md:text-[40px] max-md:mt-10 text-center">
        <h2 className="flex items-center justify-center gap-8">
          <span>Enhance</span>
          <span className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-green-100">
            <img src="/graphline.png" alt="graph line" className="w-16 h-16" />
          </span>
          <span>Your Experience</span>
        </h2>
      </header>
      
      <div className="max-md:max-w-full mt-[118px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {services.map((service, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
