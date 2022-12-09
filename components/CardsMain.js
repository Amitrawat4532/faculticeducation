/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const CardsMain = () => {
  const cardVariants = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: -100,
      transition: {
        // type: "spring",
        // bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariantsDown = {
    offscreen: {
      y: 0,
    },
    onscreen: {
      y: 70,
      transition: {
        // type: "spring",
        // bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariantsDowntwo = {
    offscreen: {
      y: 20,
    },
    onscreen: {
      y: 180,
      transition: {
        // type: "spring",
        // bounce: 0.4,
        duration: 4,
      },
    },
  };
  return (
    <div className="flex h-full w-[110vw] pt-52  justify-center items-center bg-#ebeef4 relative left-[-6vw] overflow-hidden gap-6">
      {/* Card Coantainer 1 */}
      <motion.div>
        <motion.img
          // animate={{ y: -500 }}
          className="two h-[460px] w-[220px]"
          src="../images/card4.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 2 */}
      <div className="heyyy  ">
        <div className="h-two py-3">
          <motion.img
            className="two  h-[460px] w-[220px]"
            src="../images/card5.png"
            alt="image"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: false, amount: "all" }}
            // variants={cardVariants}
          />
        </div>

        <div className="h-three py-3">
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card3.png"
            alt="image"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: false, amount: "all" }}
            // variants={cardVariants}
          />
        </div>
      </div>

      {/* Card Coantainer 3 */}
      <div className="h-four ">
        <motion.img
          animate={{ y: -50 }}
          className="two  h-[460px] w-[220px]"
          src="../images/card1.png"
          alt="image"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsDown}
        />
      </div>
      {/* Card Coantainer 4 */}
      <div className="h-five ">
        <motion.img
          className="two h-[460px] w-[220px]"
          src="../images/card9.png"
          alt="image"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsDowntwo}
        />
      </div>
      {/* Card Coantainer 5 */}
      <div className="hey translate-y-24">
        <div className="h-six py-3">
          <motion.img
            className="two h-[460px] w-[220px] "
            src="../images/card7.png"
            alt="image"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: false, amount: "all" }}
            // variants={cardVariants}
          />
        </div>

        <div className="h-six py-3 ">
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card10.png"
            alt="image"
          />
        </div>
      </div>

      {/* Card Coantainer 6 */}
      <div className="h-seven ">
        <motion.img
          animate={{ y: -40 }}
          className="two h-[460px] w-[220px] "
          src="../images/card6.png"
          alt="image"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariants}
        />
      </div>
      {/* Card Coantainer 7 */}
      <div className="">
        <motion.img
          animate={{ y: -240 }}
          className="two h-[460px] w-[220px] "
          src="../images/card8.png"
          alt="image"
          // initial="offscreen"
          // whileInView="onscreen"
          // viewport={{ once: false, amount: "all" }}
          // variants={cardVariants}
        />
      </div>
    </div>
  );
};
export default CardsMain;
