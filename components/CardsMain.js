import { motion, useScroll } from "framer-motion";

const CardsMain = () => {
  const { scrollY } = useScroll();

  return (
    <motion.div className="flex  w-[110vw] justify-center items-center bg-#ebeef4 relative left-[-6vw]  gap-6">
      {/* Card Coantainer 1 */}
      <motion.div>
        <motion.img
          className="two"
          src="../images/card4.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 2 */}
      <motion.div className="heyyy  translate-y-[-20px]">
        <motion.div
          className="h-two py-3 translate-y-[-50px]"
        >
          <motion.img
            className="two "
            animate={{y: (scrollY.current)/6}}
            src="../images/card5.png"
            alt="image"
          />
        </motion.div>

        <div className="h-three py-3">
          <motion.img
            className="two"
            src="../images/card3.png"
            alt="image"
          />
        </div>
      </motion.div>

      {/* Card Coantainer 3 */}
      <motion.div
        className=" two h-four translate-y-[-200px]"
       
  
      >
        <motion.img
          // initial={{y: -300}}
          animate={{y: (scrollY.current)/6}}
          src="../images/card1.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 4 */}
      <motion.div className="h-five translate-y-[-50px]">
        <motion.img
          className="tw "
          src="../images/card9.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 5 */}

      <motion.div className="heyyy  ">
        <motion.div
          className="h-two py-3 translate-y-[-50px]"
          
        >
          <motion.img
            animate={{y: (scrollY.current)/6}}
            className="two"
            src="../images/card7.png"
            alt="image"
          />
        </motion.div>

        <motion.div className="h-three py-3">
          <motion.img
            className="two "
            src="../images/card10.png"
            alt="image"
          />
        </motion.div>
      </motion.div>

      {/* Card Coantainer 6 */}
      <motion.div className="h-seven ">
        <motion.img
          className="two  translate-y-[7vh]"
          src="../images/card6.png"
          alt="image"
        />
      </motion.div>
      {/* Card Coantainer 7 */}
      <motion.div
        className="last-card translate-y-[-300px]"
      >
        <motion.img
          className="two "
          animate={{y: (scrollY.current)/6}}
          src="../images/card8.png"
          alt="image"
        />
      </motion.div>
    </motion.div>
  );
};
export default CardsMain;
