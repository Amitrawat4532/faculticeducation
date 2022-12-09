import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

import CardsMain from "./CardsMain";

export default function Motion() {
  const { scrollY } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);
  const [scrollVal, setScrollVal] = useState(0);

  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", () => {
      setScrollVal(window.pageYOffset / 5);
      if (scrollY.current >= 410) {
        setScrollDOne(true);
      } else {
        setScrollDOne(false);
      }
    });
  }

  return (
    <>
      <motion.div
        className="  flex-col  flex  fixed"
        style={{
          background: "white",
          width: "100vw",
          height: "100vh",
          maxWidth: "115vw",
          opacity: 1,
          clipPath: `circle(${scrollY.current / 5}% at 50% 50%)`,
          zIndex: "10",
        }}
      >
        <motion.div
          style={{
            // zIndex: "40",
            transform: `translateY(${-scrollY.current / 2}px)`,
          }}
        >
          <CardsMain />
        </motion.div>
      </motion.div>
    </>
  );
}
