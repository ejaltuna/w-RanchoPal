import React from "react";
import BodyPage from "./Body/BodyPage";
import Footer from "./Footer/Footer";
import HeaderPage from "./Headers/HeaderPage";

export default function HomePage() {
  return (
    <>
      <HeaderPage />
      <BodyPage/>
      <Footer />
    </>
  );
}
