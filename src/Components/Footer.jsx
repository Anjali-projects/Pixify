import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[6px] text-white">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-2"
      >
        <div>© 2024 Appy. All rights reserved.</div>
        <div>Terms · Privacy Policy . FAQ</div>
      </div>
    </footer>
  );
};

export default Footer;
