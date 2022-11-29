import React, { useEffect } from "react";

import { motion, useScroll } from "framer-motion";
import Skills from "./Skills";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <>
      <div className="h-full w-full flex justify-center bg-transparent  z-10 overflow-hidden">
        <motion.div
          className="  rounded-full bg-white  flex justify-center items-center fixed z-10 overflow-hidden"
          style={{
            // scaleX: scrollYProgress,
            width: scrollY,
            height: scrollY,
            maxHeight: "150vh",
          }}
          // animate={{ opacity: 0.8 }}
          id="motion_container"
        >
          {/* <motion.div
            className="  bg-white border-2 border-black flex flex-col justify-center items-center absolute z-0"
            style={{
              opacity: scrollYProgress,
            }}
          >
            <h1>Hey this is dummy text1</h1>
            <h2>Hey this is dummy text2</h2>

            <h3>Hey this is dummy text3</h3>
          </motion.div>
          <motion.div
            style={{
              overflow: "scroll",
              opacity: scrollYProgress,
            }}
          >
            <h1>Hey this is dummy text1</h1>
            <h2>Hey this is dummy text2</h2>
            <h3>Hey this is dummy text3</h3> <h1>Hey this is dummy text1</h1>
            <h2>Hey this is dummy text2</h2>
            <h3>Hey this is dummy text3</h3> <h1>Hey this is dummy text1</h1>
            <h2>Hey this is dummy text2</h2>
          </motion.div> */}

          <Skills />
        </motion.div>
      </div>
    </>
  );
}
