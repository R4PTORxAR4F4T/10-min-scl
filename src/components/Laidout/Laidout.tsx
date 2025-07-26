import React from "react";

const Laidout = ({features}) => {
  return (
    <div className="pt-5">
        <div className="flex flex-col gap-3">
          <h2 className=" text-xl font-semibold leading-[30px] text-black">
            {features.name}
          </h2>
          <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
            {features.values.map((item,index)=>(
                <div key={index} className="flex flex-row items-start gap-3 m-1 ">
                <div>
                    <div
                    className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: "1" }}
                    >
                    <img
                        alt={item.title}
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        src={item.icon}
                        style={{ color: "transparent" }}
                    />
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                        {item.title}
                    </h2>
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                        {item.subtitle}
                    </h2>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Laidout;
