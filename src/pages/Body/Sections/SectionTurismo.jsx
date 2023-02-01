import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../../public/Imagen/slider/elpalmar.png";
import img2 from "../../../../public/Imagen/slider/elpalmar1.png";
import img3 from "../../../../public/Imagen/slider/elpalmar2.png";

function SectionTurismo() {
  return (
    <>
      <div className="py-6">
        <h2 className=" text-2xl md:text-5xl font-bold text-center p-3">
          <i>Capanaparo bonito</i>
        </h2>
        <div className="container md:flex md:p-3 p-0 text-center  ">
          <div className="p-2 md:w-1/2  h-auto rounded-xl">
            <Carousel controls={true} fade={true} interval={5000}>
              <Carousel.Item>
                <img
                  className="d-block  rounded-xl"
                  src={img1}
                  width={"100%"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className=" md:bg-[#84221582] bg-transparent md:text-orange-900 text-gray-800 rounded-xl transition-all ">
                    <h2 className="md:text-2xl text-md font-bold">
                      <i>Ranchopal</i>
                    </h2>
                    <p className="hidden md:block ">Llanura de mis palmares.</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block rounded-xl"
                  src={img2}
                  width={"100%"}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <div className=" md:bg-[#84221582] bg-transparent md:text-orange-900 text-gray-800 rounded-xl transition-all">
                    <h2 className="md:text-2xl text-md font-bold">
                      <i>Pasar un rato agradable</i>
                    </h2>
                    <p className="hidden md:block ">
                      para compartir con la naturaleza
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block   rounded-xl"
                  src={img3}
                  width={"100%"}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <div className="md:bg-[#84221582] bg-transparent md:text-orange-900 text-gray-800 rounded-xl transition-all">
                    <h2 className="md:text-2xl text-md font-bold">
                      <i>Llanura apureña</i>
                    </h2>
                    <p className="hidden md:block ">
                      Paisajes diferentes y bellos en todo momento.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className=" md:w-1/2 h-auto my-auto">
            <h2 className="text-center text-xl font-semibold p-2 pb-4">
              Turismo en el Capanaparo.
            </h2>
            <p className="text-center md:text-justify md:px-5 px-2">
              En el capanaparo se zona donde puedes estar en donde se puede
              pasar y relajar todas las cosas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTurismo;
