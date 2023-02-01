import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../public/Imagen/Carousel/1.png";
import img2 from "../../public/Imagen/Carousel/2.png";
import img3 from "../../public/Imagen/Carousel/3.png";
import img4 from "../../public/Imagen/Carousel/4.png";

function CarouselC() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          width={"100%"}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <div className=" bg-[#84221582]  rounded-xl transition-all ">
            <h2 className="text-2xl font-bold">First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          width={"100%"}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <div className=" bg-[#84221582]  rounded-xl transition-all ">
            <h2 className="text-2xl font-bold">First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          width={"100%"}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <div className=" bg-[#84221582]  rounded-xl transition-all ">
            <h2 className="text-2xl font-bold">First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img3}
          width={"100%"}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <div className=" bg-[#84221582]  rounded-xl transition-all ">
            <h2 className="text-2xl font-bold">First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;
