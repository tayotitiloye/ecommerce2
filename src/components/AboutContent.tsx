"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "src/app/utilis/motion";

function AboutContent() {
  return (
    <motion.div initial="hidden" animate="visible">
      <div className="bg-orange-100 px-4 text-yellow-900 my-8 h-32 flex items-center justify-start text-2xl md:6xl font-bold ">
        <Link href="/">Home</Link>
        <span className=" text-yellow-950">/ About</span>
      </div>
      <div className="lg:flex flex-row">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="h-[80vh] w-full lg:flex-1 relative "
        >
          <Image
            src="/friends.avif"
            alt="image"
            fill
            className="object-cover mb-10 p-4 md:p-7"
          />
        </motion.div>
        <motion.div variants={slideInFromRight(0.8)} className="lg:flex-1">
          <h1 className="text-3xl lg:text-5xl mb-8 font-bold my-5  px-4">
            Our Story
          </h1>
          <div className=" my-5 px-4 leading-6 md:px-32 lg:px-4 text-sm md:text-base tracking-wider">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutContent;
