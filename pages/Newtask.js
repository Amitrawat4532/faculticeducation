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
  const opacityimg = useTransform(v, [1600, 100], [0, 1]);
  const opacityText = useTransform(v, [100, 800], [0, 1]);
  // const opacityImg = useTransform(v, [10, 100], [0, 1]);
  // icon transformation section
  // const icon3 = useTransform(scrollYProgress, [0.3, 0.4], [1.1, 0.6]);
  // icon transformation section

  return (
    <>
      {" "}
      <Dummy />
      <section className="flex flex-col  items-center h-[185vh] bg-slate-800 ">
        <motion.div
          style={{
            background: `${
              scrollY.current >= 700
                ? `white,${scrollYProgress.current}),#e3ad85 95.99%)`
                : "white"
            }`,
            minWidth: "50%",
          }}
          className="sticky   mt-5 rounded-[5rem]  h-[130vh]"
          animate={{ width: `${scrollYProgress.current * 280}vw` }}
        >
          {/* backgroundimg */}
          <img
            src="/images/backgroundimg.jpg"
            alt="image"
            className="h-[250vh] w-[full]  rounded-[5rem]"
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
                  // animate={{
                  //   y: scrollY.current,
                  //   //scale: scrollYProgress.current,
                  //   // x: -scrollY.current / 24,
                  // }}
                />
                <div>
                  <motion.div
                    style={{
                      zIndex: "100",
                      position: "absolute",
                      top: "38%",
                      left: "78%",
                      // top: scrollYProgress.current / 12,
                      // left: scrollY.current / 24,
                      y: -30,
                      x: 30,
                    }}
                  >
                    <motion.img
                      src="/images/phoneicon1.webp"
                      width="53"
                      alt="hii"
                      // position="fixed"
                      animate={{
                        y: scrollY.current / 18,
                        scale: scrollYProgress.current * 4,
                        x: -scrollY.current / 24,
                      }}
                    />
                  </motion.div>

                  <div>
                    <motion.div
                      style={{
                        zIndex: "100",
                        position: "absolute",
                        top: "38%",
                        left: "57%",
                        y: -330,
                        x: 0,
                        // scaleone,
                      }}
                    >
                      <motion.img
                        src="/images/phoneicon2.webp"
                        width="170"
                        alt="hii"
                        animate={{
                          y: scrollY.current / 2.6,
                          //scale: scrollYProgress.current,
                          // x: -scrollY.current / 24,
                        }}
                        // animate={{ top: scrollYProgress.current }}
                      />
                    </motion.div>
                  </div>
                  <div>
                    <motion.div
                      style={{
                        zIndex: "100",
                        position: "absolute",
                        top: "69%",
                        left: "58%",
                        x: -500,
                        opacity: opacityimg.current,
                      }}
                    >
                      <motion.img
                        src="/images/phoneicon3.webp"
                        width="170"
                        alt="hii"
                        animate={{
                          x: scrollY.current / 2.1,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
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
