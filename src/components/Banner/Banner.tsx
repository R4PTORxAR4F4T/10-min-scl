import React from 'react';
import Trailer from '../Trailer/Trailer';

function getTextFromHtml(html) {
  const tempElement = document.createElement('div')
  tempElement.innerHTML = html
  return tempElement.textContent || ''
}

const Banner = ({data}) => {

    return (
        <div className='w-[100%]'>
            {/* Title Section */}
            <div className="hidden md:block bg-cover bg-center pt-8 w-full h-full "style={{ backgroundImage: "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')"}}>
                <div className="relative p-2 md:p-4 lg:p-8 lg:pl-36">
                    <h1 className="w-[50%] text-3xl md:text-4xl font-bold mb-4 text-white">
                    {data.data.title}
                    </h1>
                    <p className="w-[50%] flex items-center gap-2 text-yellow-400 mb-2">
                    ⭐⭐⭐⭐⭐ (82.6% শিক্ষার্থী কোর্স শেষ করে ৫ স্টার রেটিং দিয়েছেন)
                    </p>
                    <p className="w-[50%] text-base text-gray-400 max-w-160">
                    {getTextFromHtml(data.data.description)}
                    </p>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="static md:absolute right-2 md:right-10 lg:right-34 top-26 w-full md:w-[35%] lg:w-[27%] bg-white shadow-2xl z-10 p-1">
                <div className="mb-4">
                    <Trailer media={data.data.media}></Trailer>
                </div>

                <div className="md:hidden bg-cover bg-center pt-8 w-full h-full "style={{ backgroundImage: "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')"}}>
                    <div className="relative p-2 md:p-4 lg:p-8 lg:pl-36">
                        <h1 className="w-[100%] text-3xl font-bold mb-4 text-white">
                        {data.data.title}
                        </h1>
                        <p className="w-[100%] flex items-center gap-2 text-yellow-400 mb-2">
                        ⭐⭐⭐⭐⭐ (82.6% শিক্ষার্থী কোর্স শেষ করে ৫ স্টার রেটিং দিয়েছেন)
                        </p>
                        <p className="w-[100%] text-base font-light text-gray-400 max-w-160">
                        {getTextFromHtml(data.data.description)}
                        </p>
                    </div>
                </div>

                <div className='p-4'>
                    <div className='flex gap-2'>
                    <div className="text-2xl font-bold text-green-600 mb-2">৳3850</div>
                    <div className="text-gray-400 line-through mb-1">৳5000</div>
                    <div className=" text-white px-2 mb-4 bg-orange-400">১১৫০ টাকা ছাড়</div>
                    </div>

                    <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">Enroll</button>
                    
                    <div className="grid py-2 md:p-4">
                    <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                    <div>
                        {data?.data?.checklist?.map((item,index) => (
                        <div key={index+1} className="flex items-center mb-3 leading-5">
                            <div className="inline-block h-[20px] w-[20px]">
                            <img src={item.icon} width="20" height="20" />
                            </div>
                            <h4 className="mb-0 inline-block pl-4 text-[#111827]">{item.text}</h4>
                        </div>
                        ))}
                    </div>
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;