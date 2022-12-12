import { motion, useScroll } from "framer-motion";

const CardsMain = () => {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <motion.div className="flex min-h-[100vh] w-[110vw] mt-20  justify-center items-center bg-#ebeef4 relative left-[-6vw]  gap-6  ">
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
          }}
        >
          <motion.img
            className="two  h-[460px] w-[220px]"
            src="../images/card5.png"
            alt="image"
            animate={{ y: -350 }}
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
        }}
      >
        <motion.img
          animate={{ y: -400 }}
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
            top: scrollY.current / 1,
          }}
        >
          <motion.img
            className="two  h-[460px] w-[220px]"
            src="../images/card7.png"
            alt="image"
            animate={{ y: -350 }}
          />
        </motion.div>

        <div className="h-three py-3">
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card10.png"
            alt="image"
          />
        </div>
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
        }}
      >
        <motion.img
          animate={{ y: -700 }}
          className="two h-[460px] w-[220px] "
          src="../images/card8.png"
          alt="image"
        />
      </motion.div>
    </motion.div>
  );
};
export default CardsMain;
