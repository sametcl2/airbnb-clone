import React from "react";
import Hamburger from "../../assets/icons/hamburger";
import Person from "../../assets/icons/person";

const Menu = () => {
  return (
    <div className="bg-white w-[77px] h-[42px] rounded-full flex justify-around items-center">
      <Hamburger />
      <Person />
    </div>
  );
};

export default Menu;
