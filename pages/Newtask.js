/* eslint-disable @next/next/no-img-element */
import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import { use, useEffect, useState } from "react";

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
  const scale = useTransform(scrollYProgress, [2.7, 0.4], [0.1, 1]);
  // const h = useTransform(v, [150, 400], [60, 100]);
  const opacity = useTransform(v, [1200, 100], [0, 1]);
  const opacityText = useTransform(v, [100, 800], [0, 1]);
  // icon transformation section
  const icon3 = useTransform(scrollYProgress, [0.3, 0.4], [1.1, 0.6]);
  // icon transformation section

  return (
    <>
      <section className="flex flex-col  items-center h-[285vh] bg-slate-800 ">
        <Dummy />
        <motion.div
          style={{
            background: `${
              scrollY.current >= 700
                ? `white,${scrollYProgress.current}),#e3ad85 95.99%)`
                : "white"
            }`,
          }}
          className="sticky   mt-5 rounded-[5rem]  h-[130vh]"
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
              top: "35%",
              // left: "27%",
              zIndex: "100",

              // opacity: opacityText.current,
            }}
          >
            <h3
              className="text-[35px] text-black"
              style={{ opacity: opacity.current }}
            >
              Smart Launcher
            </h3>
            <h3
              className="text-[15px] text-black textAlign-center"
              style={{ opacity: opacity.current }}
            >
              A more intuitive and efficient launcher awaits. Large and small
              folders <br />
              dynamically adjust for enhanced organization. The smart experience
              <br />
              extends to widgets, improved app handling, and update
              notifications for <br />
              simplified handling of your content.
            </h3>

            {/* <Zoom /> */}
          </div>
          {/* zoom page */}
          <div className=" flex justify-center items-center absolute top-[55%] w-full overflow-y-visible">
            <motion.div
              style={{
                display: "flex",
                position: "sticky",
                top: "20px",
              }}
            >
              <motion.div style={{ scale }}>
                <motion.img
                  src="/images/featurephone.webp"
                  style={{
                    zIndex: "100",
                    height: "800px",
                    position: "sticky",
                    top: "10px",
                  }}
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
                  animate={{
                    x: 0,
                    y: 0,
                    scale: icon3.scrolly,
                    rotate: 100,
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
                    // scaleone,
                  }}
                  // animate={{ scale: `${icon3.current}vw` }}
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
    </>
  );
};

export default Newtask;
