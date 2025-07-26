import React from "react";

const FreePDF = ({group_join}) => {
  return (
    <div>
      <div className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12" style={{
        backgroundImage: `url('${group_join.values[0].background.image}')`,
        backgroundSize: 'cover'
      }}>
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2">
          <img
            src={group_join.values[0].top_left_icon_img}
            className="mb-4"
            style={{ height: "40px" }}
            alt="Pointer"
          />
          <h2
            className="text-xl font-semibold"
            style={{ color: "rgb(255, 255, 255)" }}
          >
            {group_join.values[0].title}
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "rgb(237, 237, 237)" }}
          >
            {group_join.values[0].description}
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            {group_join.values[0].cta.text}
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="items-center hidden w-1/2 md:flex">
          <img
            src={group_join.values[0].thumbnail}
            height="200"
            alt="IELTS Course Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default FreePDF;
