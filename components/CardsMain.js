/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";
const CardsMain = () => {
  //   const cardVariants = {
  //     offscreen: {
  //       y: 0,
  //     },
  //     onscreen: {
  //       y: -50,

  //       transition: {
  //         type: "spring",
  //         // bounce: 0.4,
  //         duration: 1,
  //       },
  //     },
  //   };
  return (
    // <div className="h-screen w-full bg-red-400">
    <div className="flex  flex-row py-20 h-screen w-full">
      <motion.div className="h-screen w-full flex flex-row justify-center items-center">
        <motion.div
          //   initial="offscreen"
          //   whileInView="onscreen"
          //   viewport={{ once: false, amount: "all" }}
          //   variants={cardVariants}
          className="h-screen w-full flex flex-row justify-center items-end"
        >
          <div className="h-[500px] w-[250px]">
            <img src="../images/card1.webp" />
          </div>
          <div className="h-[500px] w-[250px]">
            <img src="../images/card1.webp" />
          </div>
          <div className="h-[500px] w-[250px]">
            <img src="../images/card1.webp" />
          </div>
          <div className="h-[500px] w-[250px]">
            <img src="../images/card1.webp" />
          </div>
          <div className="h-[500px] w-[250px]">
            <img src="../images/card1.webp" />
          </div>
          <div className="h-[500px] w-[250px]">
            <img src="../images/card1.webp" />
          </div>
        </motion.div>
      </motion.div>
    </div>
    // </div>
  );
};
export default CardsMain;
