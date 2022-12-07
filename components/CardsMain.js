/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";
const CardsMain = () => {
  const cardVariantsDown = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: 80,

      transition: {
        // type: "spring",
        // bounce: 0.4,
        duration: 3,
      },
    },
  };
  const cardVariantsUp = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: -40,

      transition: {
        // type: "spring",
        // bounce: 0.4,
        duration: 3,
      },
    },
  };
  return (
    // <div className="h-screen w-full bg-red-400">
    <div className="flex  flex-row py-20 h-screen w-full">
      <motion.div className="h-screen w-full flex flex-row justify-center items-center">
        <motion.div
          className="h-[500px] w-[250px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsDown}
        >
          <img src="../images/card1.webp" />
        </motion.div>

        <motion.div
          className="h-[500px] w-[250px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsUp}
        >
          <img src="../images/card2.webp" />
        </motion.div>

        <motion.div
          className="h-[500px] w-[250px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsDown}
        >
          <img src="../images/card4.webp" />
        </motion.div>
      </motion.div>
    </div>
    // </div>
  );
};
export default CardsMain;
