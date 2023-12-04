import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 bg-yellow-950 mt-[40px] text-white flex items-center justify-between">
      <Link href="/" className="font-bold text-xl"><span className="italic ">Opor!</span>  Mart</Link>
      <p>© 2023 ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
