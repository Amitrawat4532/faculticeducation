import { motion, useScroll } from "framer-motion";

const CardsMain = () => {
  const { scrollY, scrollYProgress } = useScroll();
  // const cardVariants = {
  //   offscreen: {
  //     y: 0,
  //   },
  //   onscreen: {
  //     y: -100,
  //     transition: {
  //       // type: "spring",
  //       // bounce: 0.4,
  //       duration: 4,
  //     },
  //   },
  // };
  // const cardVariantsDown = {
  //   offscreen: {
  //     y: 0,
  //   },
  //   onscreen: {
  //     y: 70,
  //     transition: {
  //       // type: "spring",
  //       // bounce: 0.4,
  //       duration: 4,
  //     },
  //   },
  // };
  // const cardVariantsDowntwo = {
  //   offscreen: {
  //     y: 20,
  //   },
  //   onscreen: {
  //     y: 180,
  //     transition: {
  //       // type: "spring",
  //       // bounce: 0.4,
  //       duration: 4,
  //     },
  //   },
  // };
  return (
    <motion.div className="flex min-h-[100vh] w-[110vw] mt-20  justify-center items-center bg-#ebeef4 relative left-[-6vw]  gap-6  ">
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
      <motion.div
        className="heyyy  "
        style={{
          position: "relative",
          top: -scrollY.current / 4,
        }}
      >
        <motion.div className="h-two py-3">
          <motion.img
            className="two  h-[460px] w-[220px]"
            src="../images/card5.png"
            alt="image"

            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: false, amount: "all" }}
            // variants={cardVariants}
          />
        </motion.div>

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
      </motion.div>

      {/* Card Coantainer 3 */}
      <motion.div
        className="h-four "
        style={{
          position: "relative",
          top: -scrollY.current / 4,
        }}
      >
        <motion.img
          animate={{ y: -50 }}
          className="two  h-[460px] w-[220px]"
          src="../images/card1.png"
          alt="image"
          // initial="offscreen"
          // whileInView="onscreen"
          // viewport={{ once: false, amount: "all" }}
          // variants={cardVariantsDown}
        />
      </motion.div>
      {/* Card Coantainer 4 */}
      <motion.div
        className="h-five "
        style={{
          position: "relative",
          top: -scrollY.current / 8,
        }}
      >
        <motion.img
          className="two h-[460px] w-[220px]"
          src="../images/card9.png"
          alt="image"
          // initial="offscreen"
          // whileInView="onscreen"
          // viewport={{ once: false, amount: "all" }}
          // variants={cardVariantsDowntwo}
        />
      </motion.div>
      {/* Card Coantainer 5 */}
      <motion.div
        className="hey translate-y-24"
        style={{
          position: "relative",
          top: -scrollY.current / 4,
        }}
      >
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
      </motion.div>

      {/* Card Coantainer 6 */}
      <motion.div
        className="h-seven "
        style={{
          position: "relative",
          top: -scrollY.current / 6,
        }}
      >
        <motion.img
          animate={{ y: -40 }}
          className="two h-[460px] w-[220px] "
          src="../images/card6.png"
          alt="image"
          // initial="offscreen"
          // whileInView="onscreen"
          // viewport={{ once: false, amount: "all" }}
          // variants={cardVariants}
        />
      </motion.div>
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
    </motion.div>
  );
};
export default CardsMain;
