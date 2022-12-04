import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Cards from "./Cards";
import Thirdpage from "./Thirdpage";
import Services from "./Services";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);

  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", () => {
      if (scrollYProgress.current >= 0.95) {
        setScrollDOne(true);
        // console.log(window.pageYOffset, scrollY.current);
      } else {
        setScrollDOne(false);
      }
    });
  }

  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-transparent  z-10 overflowX-hidden">
        <motion.div
          className=" border-1  border-black rounded-full bg-white flex-col  flex justify-center items-center fixed z-10 overflow-hidden "
          style={{
            // scaleX: scrollYProgress,
            width: scrollY,
            height: scrollY,
            maxHeight: "200vh",
            maxWidth: "110vw",
            opacity: scrollYProgress,
          }}
          id="motion_container"
        >
          <div
            style={{
              paddingTop: "100px",
              overflowY: scrollDone ? "scroll" : "hidden",
            }}
          >
            <Cards scrollY={scrollYProgress.current} />
            <Thirdpage />
          </div>
        </motion.div>
      </div>
    </>
  );
}
