import React from 'react';

interface Condition {
  icon: string;
  name: string;
}

export const ConditionsSection: React.FC = () => {
  const conditions: Condition[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/e7eeb3e73a3b27d1a25d0f626d0400e4dc71f9e4?placeholderIfAbsent=true", name: "Back & Spine Issues" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/4e53e0560ed3d027d673546896ac4f04bc50726e?placeholderIfAbsent=true", name: "Joint & Muscle Pain" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/6ffd6f7cacb0f1519c1d56231af8585a252e8209?placeholderIfAbsent=true", name: "Foot & Heel Pain" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/14dee57d843940ac9de4a7292110d707f121cd6e?placeholderIfAbsent=true", name: "Headaches & Migraines" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/c63d252cd877f124cdcfcb52a955cc4661862df8?placeholderIfAbsent=true", name: "Respiratory Conditions" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/1b7a8f5df6374f2464933164a105f37c21e86714?placeholderIfAbsent=true", name: "Chronic Conditions" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/04e69ed4207ef4c47b05653f8f14bd16cda4baa2?placeholderIfAbsent=true", name: "Nerve & Compression Syndromes" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/003a2ce15de493d8c798f8830783d8058182cf5d?placeholderIfAbsent=true", name: "Mental Health & Stress" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/abebe1226908f5aa75f628e7f6f797762961779d?placeholderIfAbsent=true", name: "General Health & Wellness" }
  ];

  return (
    <section className="bg-[rgba(231,231,231,1)] w-full overflow-hidden mt-[120px] pt-[75px] pb-[119px] px-[30px] rounded-[17px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <header>
        <h2 className="text-black text-[42px] font-medium max-w-full mb-12 ml-[10px]">
          Experience expert care for a range of conditions<br />
          treated at our clinic
        </h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 max-w-5xl mx-auto">
        {conditions.map((condition, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white/0 p-2 rounded-lg">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
              <img src={condition.icon} alt="" className="w-6 h-6 object-contain" />
            </span>
            <span className="text-2xl text-[rgba(36,36,36,1)] font-normal">{condition.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
