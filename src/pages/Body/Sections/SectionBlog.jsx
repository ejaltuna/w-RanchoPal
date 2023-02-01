import React from "react";
import ReactPlayer from "react-player";

function SectionBlog() {
  return (
    <>
      <div className="py-5 bg-orange-800">
        <h2 className=" text-white text-center mx-auto md:text-5xl text-2xl font-bold py-5 px-2">
          <i> Momentos captados.</i>
        </h2>
        <div className="flex">
          <div className="mx-auto w-[256px] h-[400px]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Vi9LFEswMBI&t=1s"
              controls
              loop
              width={256}
              height={400}
              playing={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionBlog;
