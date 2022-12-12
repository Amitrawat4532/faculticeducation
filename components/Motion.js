import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CardsMain from "./CardsMain";
import Scrollpage from "./Scrollpage";
import Skills from "./Skills";

export default function Motion() {
  const { scrollY, scrollYProgress } = useScroll(); 
  const [val, setVal] = useState()
  const op = useTransform(scrollY, [0,120], [0,1])

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setVal(latest)
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
          overflowX: "hidden",
          overflowY: scrollYProgress.current > 0.97 ? "scroll" : "hidden",
        }}
      >
        <motion.div
          style={{
            position: "relative",
            opacity: op ,
          }}
        >
          <CardsMain />
          <Scrollpage />
          <Skills />
        </motion.div>
      </motion.div>

    </>
  );
}
