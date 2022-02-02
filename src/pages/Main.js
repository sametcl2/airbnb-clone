import React from "react";
import MainImage from "../assets/images/landing.png";
import Header from "../components/Header";

function Main() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center w-screen h-[130vh] bg-black px-[80px] py-[20px] ">
        <img className="w-full h-screen mt-3" src={MainImage} alt="Main Landing" />
      </main>
    </>
  );
}

export default Main;
