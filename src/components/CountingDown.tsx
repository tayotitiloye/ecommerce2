"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-05-31");
const CountingDown = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-700 flex justify-center items-center"
      date={endingDate}
    />
  );
};

export default CountingDown;
