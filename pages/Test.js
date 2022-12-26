/* eslint-disable @next/next/no-img-element */
import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Scrollpage from "/components/Scrollpage";

const Animationbox = (props) => {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrVal, setScrVal] = useState(scrollY.current);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScrVal(latest);
    });
  }, [scrollY]);

  const v = motionValue(scrVal);
  const w = useTransform(v, [150, 800], [45, 95]);

  const opacity = useTransform(v, [700, 900], [0, 1]);

  //   const opacityText = useTransform(v, [1300, 1500], [0, 1]);
  //   const animateText = useTransform(v, [1300, 1500], [10, 0]);
  //   const opacity = useTransform(v, [1200, 100], [0, 1]);
  const opacityimg = useTransform(v, [1600, 100], [0, 1]);
  //   const opacityText = useTransform(v, [100, 800], [0, 1]);

  // increasing container width -> 153px-> 460px from [45vw -> 90vw] can be achieved by useTransorm ==> completed
  // starting from 350 playing with strokeDashOffset and strokeDashArray to 750 ==> completed
  // after 750 we have to change background along with image inside svg initially opacity and changing to one along with background color
  // strokeDashOffset final val -> -925  initial val ->  -425

  //FOR FUTURE USE(optional)
  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  // console.log('width', vw, 'and length is', vh)

  return (
    <section className="flex flex-col m-auto items-center h-[400vh] bg-[#EBEEF4]">
      <Scrollpage />
      <motion.div
        style={{
          background: `${
            scrollY.current >= 800
              ? `white,${scrollYProgress.current + 5}),#e3ad85 95.99%)`
              : "white"
          }`,
          height: "100vh",
          minWidth: "50%",
          maxWidth: "100%",
        }}
        className="sticky top-10   rounded-[5rem] "
        animate={{ width: `${scrollYProgress.current * 200}vw` }}
      >
        <img
          src="/images/backgroundimg.jpg"
          alt="image"
          className=" absolute  h-screen w-full z-10 "
          style={{ opacity: opacity.current }}
        />
        <div className=" flex justify-center items-center absolute top-[10%] w-full overflow-y-visible z-20">
          <motion.div
            style={{
              display: "flex",
              position: "sticky",
              top: "20px",
            }}
          >
            <motion.div style={{}}>
              <motion.img
                src="/images/featurephone.webp"
                style={{
                  zIndex: "100",
                  height: "600px",
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
                    // top: "38%",
                    // left: "78%",
                    // top: scrollYProgress.current / 12,
                    // left: scrollY.current / 24,
                    y: -400,
                    x: 320,
                  }}
                >
                  <motion.img
                    src="/images/phoneicon1.webp"
                    width="53"
                    alt="hii"
                    // position="fixed"
                    animate={{
                      y: scrollY.current / 36,
                      scale: scrollYProgress.current * 3,
                      x: -scrollY.current / 24,
                    }}
                  />
                </motion.div>

                <div>
                  <motion.div
                    style={{
                      zIndex: "100",
                      position: "absolute",
                      top: "32%",
                      left: "57%",
                      y: 10,
                      x: 0,
                      // scaleone,
                    }}
                  >
                    <motion.img
                      src="/images/phoneicon2.webp"
                      width="170"
                      alt="hii"
                      animate={{
                        y: scrollY.current / 10,
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
                      top: "70%",
                      //   left: "58%",
                      x: -100,
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
      </motion.div>
    </section>
  );
};

export default Animationbox;
