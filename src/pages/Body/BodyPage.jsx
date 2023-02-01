import React from "react";
import SectionBlog from "./Sections/SectionBlog";
import SectionGallery from "./Sections/SectionGallery";
import SectionTurismo from "./Sections/SectionTurismo";

function BodyPage() {
  return (
    <>
      <div id="turismo" className="md:pt-2 py-5 md:py-3 bg-gray-200">
        <SectionTurismo />
      </div>

      <div id="memes" className="md:pt-2 py-5 md:py-3 bg-gray-200">
        <SectionBlog />
      </div>

      <div className="md:pt-2 py-5 md:py-3 bg-gray-200">
        {/* <SectionGallery /> */}
      </div>
    </>
  );
}

export default BodyPage;
