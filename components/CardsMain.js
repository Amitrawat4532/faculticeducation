/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const CardsMain = () => {
  const cardVariantsDown = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: 60,

      transition: {
        type: 'ease-in',
        duration: 3,
      },
    },
  };

  const cardVariantsUp = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: -30,

      transition: {
        type:'ease-in',
        duration: 3,
      },
    },
  };
  return (
    <div className="flex  flex-row py-20 h-screen w-full">
      <motion.div className="h-screen w-full flex flex-row justify-center items-center overflow-hidden">

        <div className="h-[700px]">
        <motion.img 
          className="h-[500px] w-[250px]"
          src="../images/card1.webp" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "some" }}
          variants={cardVariantsDown}
          alt="image"
        />
        </div>

        <div className="h-[700px]">
        <motion.img 
          className="h-[500px] w-[250px]"
          src="../images/card2.webp" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "some" }}
          variants={cardVariantsUp}
          alt="image"
        />
        </div>

        <div className="h-[700px]">
        <motion.img 
          className="h-[500px] w-[250px]"
          src="../images/card3.webp" 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsDown}
          alt="image"
        />
        </div>

      </motion.div>
    </div>
  );
};
export default CardsMain;
