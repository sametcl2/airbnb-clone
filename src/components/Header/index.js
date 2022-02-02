import React from "react";
import Menu from "../Menu";
import Logo from "../../assets/icons/logo";
import Region from "../../assets/icons/region";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <header className="flex justify-between items-center h-[80px] w-full px-[80px] py-[20px] absolute bg-black">
      <div className="flex-initialfloat-left">
        <Logo />
      </div>
      <div className="flex ml-[350px] mr-auto text-center bg-black">
        <button className="py-2 px-4 text-white text-[17px]">
          Konaklama yerleri
        </button>
        <button className="py-2 px-4 text-white text-[17px]">Deneyimler</button>
        <button className="py-2 px-4 text-white text-[17px]">
          Çevrim içi deneyimler
        </button>
      </div>
      <div className="flex-initial flex items-center float-right">
        <button className="text-white font-semibold">
          <p className="text-[15px]">Ev sahibi olun</p>
        </button>
        <div className="ml-5">
          <Region />
        </div>
        <div className="ml-5">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
