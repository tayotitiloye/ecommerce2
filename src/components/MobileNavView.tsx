"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartBtn from "./CartBtn";
import { signOut, useSession } from 'next-auth/react'


const data = [
    {
        id: 1,
        title: 'Home',
        url:'/'
    },
    {
        id: 2,
        title: 'About',
        url:'/about'
    },
    {
        id: 3,
        title: 'Product',
        url:'/product'
    },
    {
        id: 4,
        title: 'Cart',
        url:'/cart'
    },
]
// const links = [
//   { id: 1, title: "Homepage", url: "/" },
//   { id: 2, title: "Menu", url: "/menu" },
//   { id: 3, title: "Working Hours", url: "/" },
//   { id: 4, title: "Contact", url: "/" },
// ];

const MobileNavBar = () => {
    const [open, setOpen] = useState(false);
   // const {status} = useSession()


  // TEMPORARY
  const user = false;
  return (
    <div>
      {/* LONG WAY */}
      {/* {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )} */}
      
      {/* SHORTCUT */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt="image"
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-yellow-800"
      />
      {open && (
        <div className="bg-yellow-600 text-white absolute left-0 top-16 w-full h-[calc(100vh-3rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {data.map((item) => (
            <Link className=" hover:bg-yellow-800 hover:scale-105 transition w-full px-5" href={item.url} key={item.id} onClick={() => setOpen(false) }>
              {item.title}
            </Link>
          ))}

          {/* LONG WAY */}
          {/* {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )} */}

          {/* SHORTCUT */}
          {/* <Link
            href={status === 'authenticated' ? "/orders" : "login"}
            onClick={() => setOpen(false)}
            className=" hover:bg-yellow-800 hover:scale-105 transition w-full px-5"          
             >
            {status === 'authenticated' ? "Orders" : "Login"}
          </Link> */}
          <Link href="/cart" onClick={() => setOpen(false)} className="bg bg-yellow-200 p-5 rounded-full">
            <CartBtn/>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
