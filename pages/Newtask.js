/* eslint-disable @next/next/no-img-element */
import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Dummy from "/components/Dummy";

const Newtask = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrVal, setScrVal] = useState(scrollY.current);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScrVal(latest);
    });
  }, [scrollY]);

  const v = motionValue(scrVal);
  const w = useTransform(v, [150, 400], [60, 100]);
  const scale = useTransform(scrollYProgress, [5, 0], [0.2, 1]);
  // const scaleone = useTransform(scrollYProgress, [6, 0], [0.7, 1]);
  // const scaleone = useTransform(v, [2, 2], [2, 1]);
  // const variants = useTransform(v, [2, 1], [2, 1]);
  // const h = useTransform(v, [150, 400], [60, 100]);
  // const opacity = useTransform(v, [700, 900], [0, 1]);
  // const scaleRight = useTransform(scrollY, [2, 1], [2, 1]);
  // const yRight = useTransform(v, [400, 400], ["400", "400"]);
  // const xRight = useTransform(v, [400, 300], ["400", "400"]);

  const opacityText = useTransform(v, [100, 800], [0, 1]);
  // const animateText = useTransform(v, [1300, 1500], [10, 0]);

  return (
    <section className="flex flex-col  items-center h-[300vh] bg-slate-400 ">
      <Dummy />
      <motion.div
        style={{
          background: `${
            scrollY.current >= 700
              ? `white,${scrollYProgress.current}),#e3ad85 95.99%)`
              : "white"
          }`,
        }}
        className="sticky   mt-5 rounded-[5rem]  h-[120vh]"
        animate={{ width: `${w.current}vw` }}
      >
        {/* backgroundimg */}
        <img
          src="/images/backgroundimg.jpg"
          alt="image"
          className="h-[screen] w-[full]  rounded-[5rem]"
          // style={{ opacity: opacity.current }}
          style={{ opacity: opacityText.current }}
        />

        {/* center text div */}
        <div
          className="flex items-center flex-col justify-center w-full  "
          style={{
            // opacity: opacity.current,
            opacity: opacityText.current,
            position: "absolute",
            top: "5%",
            // left: "35%",
            zIndex: "100",
          }}
        >
          <h1 className="text-[60px] text-black">
            Smarter System <br />
          </h1>
          <h2 className="text-[60px] text-black"> Simplified</h2>
        </div>

        {/* center text 2nd div */}
        <div
          className="flex items-center flex-col  gap-5 justify-center w-full"
          style={{
            position: "absolute",
            top: "30%",
            // left: "27%",
            zIndex: "100",

            opacity: opacityText.current,
          }}
        >
          <h3 className="text-[35px] text-black">Smart Launcher</h3>
          <h3 className="text-[15px] text-black textAlign-center">
            A more intuitive and efficient launcher awaits. Large and small
            folders <br />
            dynamically adjust for enhanced organization. The smart experience
            <br />
            extends to widgets, improved app handling, and update notifications
            for <br />
            simplified handling of your content.
          </h3>
          {/* <Image
            src="/images/featurephone.webp"
            height="200"
            width="400"
            alt="hii"
            className="absolute top-[110%] left-[20%]"
            style={{ zIndex: "100" }}
          />
          <Image
            src="/images/phoneicon1.webp"
            height="200"
            width="68"
            alt="hii"
            className="absolute top-[285%] left-[72%]"
            style={{ zIndex: "100" }}
          />
          <Image
            src="/images/phoneicon2.webp"
            height="200"
            width="180"
            alt="hii"
            className="absolute top-[285%] left-[55%]"
            style={{ zIndex: "100" }}
          />
          <Image
            src="/images/phoneicon3.webp"
            height="200"
            width="170"
            alt="hii"
            className="absolute top-[460%] left-[58%]"
            style={{ zIndex: "100" }}
          /> */}
          {/* <Zoom /> */}
        </div>
        {/* zoom page */}
        <div className=" flex justify-center items-center absolute top-[50%] w-full">
          <motion.div
            style={{
              display: "flex",
              position: "sticky",
              top: "0px",
              // scale: scaleone.current,
            }}
          >
            <motion.div style={{ scale }}>
              <motion.img
                src="/images/featurephone.webp"
                style={{ zIndex: "100", height: "900px" }}
              />
              <motion.img
                src="/images/phoneicon1.webp"
                width="53"
                alt="hii"
                style={{
                  zIndex: "100",
                  position: "absolute",
                  top: "35%",
                  left: "85%",
                }}
              />
              <motion.img
                src="/images/phoneicon2.webp"
                width="150"
                alt="hii"
                style={{
                  zIndex: "100",
                  position: "absolute",
                  top: "35%",
                  left: "57%",
                }}
              />
              <motion.img
                src="/images/phoneicon3.webp"
                width="170"
                alt="hii"
                style={{
                  zIndex: "100",
                  position: "absolute",
                  top: "69%",
                  left: "58%",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        {/* zoom page */}
      </motion.div>
    </section>
  );
};

export default Newtask;
