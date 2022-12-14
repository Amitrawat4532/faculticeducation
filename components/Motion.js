import React, { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import CardsMain from "./CardsMain";
import Scrollpage from "./Scrollpage";
import Skills from "./Skills";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);
  const [scrollVal, setScrollVal] = useState(17);

  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", () => {
      // console.log(scrollYProgress.current, "----scroll y progres");
      setScrollVal(window.pageYOffset / 5);
      if (scrollY.current >= 410) {
        setScrollDOne(true);
      } else {
        setScrollDOne(false);
      }
    });
  }

  const getScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    // const scroll = scrollHeight - scrollTop - clientHeight;
    // console.log(scrollHeight, scrollTop, clientHeight);
    console.log(scrollTop);
    if (scrollTop <= 400 && scrollTop > 17) {
      // We are not at the bottom of the scroll content

      setScrollVal(scrollTop);
    } else if (scrollTop === 400) {
      // We are at the bottom
    }
  };

  return (
    <>
      <motion.div
        onScroll={(e) => getScroll(e)}
        className="  flex-col flex fixed "
        style={{
          background: "white",
          width: "100vw",
          height: "100vh",
          maxWidth: "115vw",
          opacity: 1,
          clipPath: `circle(${scrollY.current / 5}% at 50% 50%)`,
          zIndex: "10",
          // transition: ".2s all ease",
          overflowX: "hidden",
          overflowY: scrollYProgress.current > 0.97 ? "scroll" : "hidden",
          // overflowY: "scroll",
        }}
      >
        <motion.div
          style={{
            position: "relative",
            opacity: scrollYProgress,
          }}
        >
          <CardsMain scrollCheck={scrollYProgress} scrollVal={scrollVal / 4} />
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
