import React from "react";

import { motion } from "framer-motion";

function Cards() {
  const cardVariants = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: 60,
      transition: {
        type: "spring",
        // bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="w-full h-[100vh] bg-white  flex  justify-center items-center overflow-hidden border-9 border-black "
        style={{
          position: "relative",
          // top: "-100px",
        }}
      >
        <motion.img
          src="../images/card2.webp"
          className="h-[500px] w-[250px]"
        />
        <></>
        <motion.img
          src="../images/card2.webp"
          className="h-[500px] w-[250px]"
        />
        <motion.img
          src="../images/card2.webp"
          className="h-[500px] w-[250px]"
        />
        <motion.img
          src="../images/card2.webp"
          className="h-[500px] w-[250px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariants}
          // animate={{ y: 100 }}
        />
      </motion.div>
    </>
  );
}

export default Cards;
