import { motion, useScroll } from "framer-motion";

const CardsMain = () => {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <motion.div className="flex  w-[110vw]   justify-center items-center bg-#ebeef4 relative left-[-6vw]  gap-6  ">
      {/* Card Coantainer 1 */}
      <motion.div>
        <motion.img
          className="two h-[460px] w-[220px]"
          src="../images/card4.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 2 */}
      <motion.div className="heyyy  ">
        <motion.div
          className="h-two py-3"
          style={{
            position: "relative",
            top: scrollY.current / 1,
            left: scrollY.current / 5,
          }}
        >
          <motion.img
            className="two  h-[460px] w-[220px]"
            src="../images/card5.png"
            alt="image"
            animate={{ y: -350, x: -80 }}
          />
        </motion.div>

        <div className="h-three py-3">
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card3.png"
            alt="image"
          />
        </div>
      </motion.div>

      {/* Card Coantainer 3 */}
      <motion.div
        className="h-four "
        style={{
          position: "relative",
          top: scrollY.current / 1,
          left: scrollY.current / 5,
        }}
      >
        <motion.img
          animate={{ y: -400, x: -70 }}
          className="two  h-[460px] w-[220px]"
          src="../images/card1.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 4 */}
      <motion.div className="h-five ">
        <motion.img
          className="two h-[460px] w-[220px]"
          src="../images/card9.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 5 */}

      <motion.div className="heyyy  ">
        <motion.div
          className="h-two py-3"
          style={{
            position: "relative",
            top: scrollY.current / 2,
            right: scrollY.current / 12,
          }}
        >
          <motion.img
            className="two  h-[460px] w-[220px]"
            src="../images/card7.png"
            alt="image"
            animate={{ y: -100, x: 30 }}
          />
        </motion.div>

        <motion.div className="h-three py-3">
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card10.png"
            alt="image"
            animate={{ y: 90 }}
          />
        </motion.div>
      </motion.div>

      {/* Card Coantainer 6 */}
      <motion.div className="h-seven ">
        <motion.img
          className="two h-[460px] w-[220px] translate-y-[7vh]"
          src="../images/card6.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 7 */}
      <motion.div
        style={{
          position: "relative",
          top: scrollY.current / 1,
          left: -scrollY.current / 5,
        }}
      >
        <motion.img
          animate={{ y: -600, x: 70 }}
          className="two h-[460px] w-[220px] "
          src="../images/card8.png"
          alt="image"
        />
      </motion.div>
    </motion.div>
  );
};
export default CardsMain;
