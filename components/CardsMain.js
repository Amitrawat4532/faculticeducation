import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const CardsMain = ({ scrollCheck }) => {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({ target: ref });

  return (
    <>
      <motion.div
        className="flex  w-[110vw] justify-center items-center bg-#ebeef4 relative left-[-6vw]  gap-6  "
        ref={ref}
      >
        {/* Card Coantainer 1 */}
        <motion.div>
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card4.png"
            alt="image"
            style={{
              transform:
                scrollCheck.current > 0.95 &&
                `translateY(${scrollY.current}px)`,
              // transition: "0.5s all ease",
              // top: scrollY.current / 12,
              left: scrollY.current / 12,
            }}
          />
        </motion.div>
        {/* Card Coantainer 2 */}

        <motion.div style={{}}>
          <motion.div
            className="h-two py-3"
            style={{
              position: "relative",
              top: scrollY.current / 12,
              left: scrollY.current / 12,
            }}
          >
            <motion.img
              className="two  h-[460px] w-[220px]"
              src="../images/card5.png"
              alt="image"
              animate={{ y: -10, x: -30 }}
            />
          </motion.div>

          <div className="h-three py-3">
            <motion.img
              className="two h-[460px] w-[220px]"
              src="../images/card3.png"
              alt="image"
              animate={{ y: 30 }}
            />
          </div>
        </motion.div>

        {/* Card Coantainer 3 */}
        <motion.div
          className="h-four "
          style={{
            position: "relative",
            transform:
              scrollCheck.current > 0.95 && `translateY(${scrollY.current}px)`,
            // transition: "0.5s all ease",
            // top: scrollY.current / 12,
            left: scrollY.current / 12,
          }}
        >
          <motion.img
            animate={{ x: -30 }}
            className="two  h-[460px] w-[220px]"
            src="../images/card1.png"
            alt="image"
          />
        </motion.div>
        {/* Card Coantainer 4 */}
        <motion.div
          className="h-five "
          style={{
            postion: "relative",
            top: scrollY.current,
          }}
        >
          <motion.img
            className="two h-[460px] w-[220px]"
            src="../images/card9.png"
            alt="image"
            animate={{ y: 0 }}
          />
        </motion.div>
        {/* Card Coantainer 5 */}

        <motion.div className="heyyy  ">
          <motion.div
            className="h-two py-3"
            style={{
              position: "relative",
              top: scrollY.current / 12,
              right: scrollY.current / 12,
            }}
          >
            <motion.img
              className="two  h-[460px] w-[220px]"
              src="../images/card7.png"
              alt="image"
              animate={{ y: 30, x: 30 }}
            />
          </motion.div>

          <motion.div className="h-three py-3">
            <motion.img
              className="two h-[460px] w-[220px]"
              src="../images/card10.png"
              alt="image"
              animate={{ y: 70 }}
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
            top: scrollY.current / 12,
            left: -scrollY.current / 12,
          }}
        >
          <motion.img
            animate={{ y: -250, x: 20 }}
            className="two h-[460px] w-[220px] "
            src="../images/card8.png"
            alt="image"
            anitia
          />
        </motion.div>
      </motion.div>
    </>
  );
};
export default CardsMain;
