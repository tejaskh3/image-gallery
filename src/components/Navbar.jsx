import React from "react";
import SearchField from "./SearchField";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-300 p-3 ">
      <p className="text-purple-900 text-2xl">Image Gallery</p>
      {/* <SearchField /> */}
    </nav>
  );
};

export default Navbar;
