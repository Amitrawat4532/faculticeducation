import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Cards from "./Cards";
import Thirdpage from "./Thirdpage";
import CardsMain from "./CardsMain";
import Skills from "./Skills";
import Scrollpage from "./Scrollpage";

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
          className=" border-1  border-black rounded-full bg-white flex-col  flex  fixed z-10 overflow-hidden "
          style={{
            // scaleX: scrollYProgress,
            width: scrollY,
            height: scrollY,
            // maxHeight: "400vh",
            maxWidth: "115vw",
            opacity: scrollY,
          }}
          id="motion_container"
        >
          <div
            style={{
              // paddingTop: "100px",
              maxWidth: "120vw",
              // height: "100%",
              // padding: "0 50px",
              overflowY: scrollDone ? "scroll" : "hidden",
            }}
          >
            <Cards scrollY={scrollYProgress.current} />
            {/* <CardsMain /> */}
            {/* <Thirdpage /> */}
            {/* <Skills /> */}

            {/* <Scrollpage /> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}
