import React, { useState } from "react";
import Services from "./Services";
import { motion, useScroll } from "framer-motion";
import Skills from "./Skills";
import Thirdpage from "./Thirdpage";
import Scrollpage from "./Scrollpage";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);

  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", () => {
      console.log(scrollYProgress);

      if (scrollYProgress.current >= 0.95) {
        setScrollDOne(true);
      } else {
        setScrollDOne(false);
      }
    });
  }

  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-transparent  z-10 overflowX-hidden">
        <motion.div
          className=" border-1  border-black rounded-full bg-white flex-col  flex justify-center items-center fixed z-10 overflow-hidden"
          style={{
            // scaleX: scrollYProgress,
            width: scrollY,
            height: scrollY,
            maxHeight: "200vh",
            maxWidth: "110vw",
          }}
          animate={{ opacity: 1 }}
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
          <div
            style={{
              paddingTop: "100px",
              overflowY: scrollDone ? "scroll" : "hidden",
            }}
          >
            <Skills />
            <Thirdpage />
            <Scrollpage />
            <Services />
          </div>
          {/* <div className="my-20">
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
            <h1>h3llo</h1>
          </div> */}
        </motion.div>
      </div>
    </>
  );
}
