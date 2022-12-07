import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import CardsMain from "./CardsMain";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);
  const [scrollVal, setScrollVal] = useState(0);

  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", () => {
      setScrollVal(window.pageYOffset / 5);
      console.log(scrollY.current);
      if (scrollY.current >= 410) {
        setScrollDOne(true);
      } else {
        setScrollDOne(false);
      }
    });
  }

  return (
    <>
      <div className="h-full w-full flex justify-center items-center bg-transparent fixed  z-10 overflowX-hidden ">
        <motion.div
          className="  bg-white flex-col  flex  z-10 overflow-hidden "
          style={{
            width: "100vw",
            height: "100vh",
            maxWidth: "115vw",
            opacity: 1,
            clipPath: `circle(${scrollY.current / 5}% at 50% 50%)`,
          }}
          id="motion_container"
        >
          <div
            style={{
              maxWidth: "120vw",
              overflowY: scrollDone ? "scroll" : "hidden",
            }}
          >
            {/* <Cards /> */}
            <CardsMain />
          </div>
        </motion.div>
      </div>
    </>
  );
}
