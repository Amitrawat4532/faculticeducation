import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Animationbox = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.4, 2]);
  return (
    <>
      <div
        className="flex justify-center items-end  w-full h-[200vh] "
        style={{
          background: "rgb(235,238,244)",
        }}
      >
        <motion.div
          className=" border-2 border-black  flex Items-center justify-center mb-12 "
          style={{
            // width: "200vh",
            // height: "600px",
            width: "100vh",
            height: "300px",
            background: "white",
            scale,
            borderRadius: "50px",
          }}
        >
          <img src="/images/cardscroll.png" className="pt-12" />
        </motion.div>
      </div>
    </>
  );
};
export default Animationbox;
