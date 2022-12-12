import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import CardsMain from "./CardsMain";
import Scrollpage from "./Scrollpage";
import Skills from "./Skills";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);
  const [scrollVal, setScrollVal] = useState(0);

  // if (typeof window !== "undefined") {
  //   // browser code
  //   window.addEventListener("scroll", () => {
  //     console.log(scrollYProgress.current, "----scroll y progres");
  //     setScrollVal(window.pageYOffset / 5);
  //     if (scrollY.current >= 410) {
  //       setScrollDOne(true);
  //     } else {
  //       setScrollDOne(false);
  //     }
  //   });
  // }

  const [val, setVal] = useState()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setVal(latest)
      console.log("Page scroll: ", latest)
    })
  }, [scrollY])

  return (
    <>
      <motion.div
        className="  flex-col flex fixed "
        style={{
          background: "white",
          width: "100vw",
          height: "100vh",
          maxWidth: "115vw",
          opacity: 1,
          clipPath: `circle(${val}vw at 50% 50%)`,
          zIndex: "10",
          // transition: ".2s all ease",
          overflowX: "hidden",
          overflowY: scrollYProgress.current > 0.97 ? "scroll" : "hidden",

          // overflowY: "scroll",
        }}
      >
        <motion.div
          // initial={{ scale: 1.5, transition: { duration: 50 } }}
          // whileInView={{ scale: 1 }}
          // className="mt-48"
          style={{
            position: "relative",
            opacity: scrollYProgress,
            // scale: 1.8 - scrollYProgress.current / 4,
            // top: scrollYProgress,
          }}
        >
          <CardsMain />
          <Scrollpage />
          <Skills />
        </motion.div>
      </motion.div>

      {/* <motion.div
        style={{
          overflowX: "hidden",
          // height: "100%",
          // overflow: "scroll",
          // overflowY: scrollYProgress.current > 0.1 ? "scroll" : "hidden",
          // zIndex: "40",
          // transition: ".2s all ease",
          // transform: `scale(${
          //   scrollYProgress.current < 0.1 && 1.1 - scrollYProgress.current
          // })`,
          // scale:
          //   scrollYProgress.current < 0.2 &&
          //   `${1.2 - scrollYProgress.current}`,
        }}
      >
      </motion.div> */}
      {/* <Skills /> */}
    </>
  );
}
