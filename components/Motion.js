import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import CardsMain from "./CardsMain";

export default function Motion() {
  const { scrollY } = useScroll();
  const [scrollDone, setScrollDOne] = useState(false);

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
    <motion.div
      className="  bg-white flex-col  flex  z-10 overflow-hidden fixed"
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "115vw",
        opacity: 1,
        clipPath: `circle(${scrollY.current / 5}% at 50% 50%)`,
      }}>
      <div>
        <CardsMain />
      </div>
    </motion.div>
  );
}
