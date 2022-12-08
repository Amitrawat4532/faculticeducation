/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const CardsMain = () => {
  const cardVariants = {
    // offscreen: {
    //   y: 0,
    // },
    // onscreen: {
    //   y: 40,
    //   transition: {
    //     // type: "spring",
    //     // bounce: 0.4,
    //     duration: 0.5,
    //   },
    // },
  };
  const cardVariantsDown = {
    // offscreen: {
    //   y: 0,
    // },
    // onscreen: {
    //   y: -20,
    //   transition: {
    //     // type: "spring",
    //     // bounce: 0.4,
    //     duration: 0.5,
    //   },
    // },
  };
  return (
    <div className="flex h-full w-[110vw] py-52  justify-center items-center bg-white relative left-[-4vw] overflow-hidden">
      {/* Card Coantainer 1 */}
      <motion.div className="">
        <motion.img
          // animate={{ x: -10 }}
          className="two "
          src="../images/card4.webp"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 2 */}
      <div className="heyyy ">
        <div className="h-two">
          <motion.img className="two " src="../images/card5.webp" alt="image" />
        </div>

        <div className="h-three">
          <motion.img className="two " src="../images/card3.webp" alt="image" />
        </div>
      </div>

      {/* Card Coantainer 3 */}
      <div className="h-four ">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: -50 }}
          className="two "
          src="../images/card1.webp"
          alt="image"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariantsDown}
        />
      </div>
      {/* Card Coantainer 4 */}
      <div className="h-five ">
        <motion.img
          className="two "
          src="../images/card9.webp"
          alt="image"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: "all" }}
          variants={cardVariants}
        />
      </div>
      {/* Card Coantainer 5 */}
      <div className="hey">
        <div className="h-six">
          <motion.img
            className="two "
            src="../images/card7.webp"
            alt="image"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: "all" }}
            variants={cardVariantsDown}
          />
        </div>

        <div className="h-six">
          <motion.img className="two " src="../images/card9.webp" alt="image" />
        </div>
      </div>

      {/* Card Coantainer 6 */}
      <div className="h-seven ">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: -40 }}
          className="two "
          src="../images/card6.webp"
          alt="image"
        />
      </div>
      {/* Card Coantainer 7 */}
      <div className="">
        <motion.img
          animate={{ y: -120 }}
          className="two "
          src="../images/card8.webp"
          alt="image"
        />
      </div>
    </div>
  );
};
export default CardsMain;
