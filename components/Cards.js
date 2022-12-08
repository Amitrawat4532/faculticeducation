import React from "react";

import { motion } from "framer-motion";

function Cards() {
  const cardVariants = {
    // offscreen: {
    //   y: 0,
    // },
    // onscreen: {
    //   y: 50,
    //   transition: {
    //     type: "spring",
    //     // bounce: 0.4,
    //     duration: 1,
    //   },
    // },
  };

  const Cards = [
    // {
    //   img: ["../images/card1.webp"],
    // },
    {
      img: ["../images/card2.webp", "../images/card1.webp"],
    },
    {
      img: ["../images/card3.webp"],
    },
    // {
    //   img: ["../images/card4.webp"],
    // },
    {
      img: ["../images/card5.webp", "../images/card5.webp"],
    },
    // {
    //   img: ["../images/card6.webp"],
    // },
  ];
  return (
    <>
      <motion.div className="w-full h-[100vh] bg-white  flex flex-row justify-center items-center overflow-hidden border-9 border-black  ">
        {Cards.map((el, id) => {
          return (
            <>
              <div className="flex  flex-wrap " key={id}>
                <motion.div className="h-[130vh] w-[250px] flex flex-col justify-center items-start">
                  {el?.img.map((x, key) => (
                    <motion.div
                      key={key}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: false, amount: "all" }}
                      variants={cardVariants}
                    >
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
                      />
                      <motion.img
                        src="../images/card2.webp"
                        className="h-[500px] w-[250px]"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </>
          );
        })}
      </motion.div>
    </>
  );
}

export default Cards;
