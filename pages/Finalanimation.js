import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// import Dummy from "/components/Dummy";

const Newtask = () => {
  const { scrollY, scrollYProgress, scrollX } = useScroll();
  const [scrVal, setScrVal] = useState(scrollY.current);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScrVal(latest);
      console.log(latest);
    });
  }, [scrollY]);

  const v = motionValue(scrVal);
  const w = useTransform(v, [1312, 1900], [30, 0]);
  const P = useTransform(v, [1214, 2050], [30, 0]);

  const P1 = useTransform(v, [1214, 2050], [1.3, 3.4]);
  const P2 = useTransform(v, [1214, 2050], [0, 65]);
  const P3 = useTransform(v, [1214, 2050], [0, 235]);
  const Q = useTransform(v, [1214, 2050], [1, 0]);
  const R = useTransform(v, [1214, 2050], [0, 250]);

  //   const w = useTransform(v, [150, 400], [60, 100]);
  //   const scale = useTransform(scrollYProgress, [1, 0.9], [0, 1]);
  // const h = useTransform(v, [150, 400], [60, 100]);
  const opacity = useTransform(v, [1200, 100], [0, 1]);
  const opacityimg = useTransform(v, [1900, 100], [0, 1]);
  const opacityText = useTransform(v, [100, 800], [0, 1]);
  // const borderRadius = useTransform(v, [0, 1], ["0px", "50px"]);
  // const scale = useTransform(scrollYProgress, [1214, 2050], [1, 5]);
  // const backgroundColor = useTransform(
  //   v,
  //   [0, 1],
  //   ["red", "url('/images/backgroundimgdown.jpg')"]
  // );
  // const opacityImg = useTransform(v, [10, 100], [0, 1]);
  // icon transformation section
  // const icon3 = useTransform(scrollYProgress, [0.3, 0.4], [1.1, 0.6]);
  // icon transformation section

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-[80px]">Hey this is dummy page</h1>
      </div>
      <div
        className="bg-white-200 h-[70vh]  flex  justify-center items-start  overflow-visible border-2 border-black"
        animate={{ width: `${scrollYProgress.current * 280}vw` }}
        style={{ maxWidth: "100%", minWidth: "50%" }}
      >
        {/*Hello</div> */}
        <motion.div
          // className=" border-2 border-black"
          style={{
            maxWidth: "100%",
            minWidth: "50%",
            height: "70vh",
            position: "sticky",
            top: "0px",
            // borderRadius: borderRadius,
            backgroundImage: "url('/images/backgroundimgup.jpg')",
            backgroundSize: "100% 100%",
            // border: "2px solid black",
            borderTopRightRadius: "50px",
            borderTopLeftRadius: "50px",
            // opacity: opacity.current,
            //  opacity: opacityimg,
            // background: `${
            //   scrollY.current >= 700
            //     ? `white,${scrollYProgress.current}),#e3ad85 95.99%)`
            //     : "white"
            // }`,
          }}
          animate={{ width: `${scrollYProgress.current * 280}vw` }}
        >
          {/* center text div */}
          <div
            className="flex items-center flex-col justify-center w-full  "
            style={{
              // opacity: opacity.current,
              opacity: opacityText.current,
              // position: "absolute",
              // top: "5%",
              // left: "35%",
              paddingTop: "60px",
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
            className="flex items-center flex-col  gap-5  w-full"
            style={{
              // left: "27%",
              zIndex: "100",
              paddingTop: "80px",
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
        </motion.div>
      </div>

      {/* 2page */}
      <div
        className="bg-white-200 h-[160vh] w-full flex  justify-center items-start "
        style={
          {
            // overflow: "hidden",
            // width: scrollY.current,
          }
        }
      >
        {/*Hello</div> */}
        <motion.div
          // className="border-2 border-black"
          style={{
            // width: scrollY,
            maxWidth: "100%",
            minWidth: "50%",
            height: "300vh",
            position: "sticky",
            top: "0px",
            // borderRadius: borderRadius,
            backgroundImage: "url('/images/backgroundimgdown.jpg')",
            backgroundSize: "100% 100%",
          }}
          animate={{
            width: `${scrollYProgress.current * 280}vw`,
            // y: w.current,
          }}
        >
          <div className=" sticky top-[0px]">
            <div className=" flex justify-center items-center overflow-y-visible ">
              <div>
                <motion.div>
                  <motion.img
                    src="/images/featurephone.webp"
                    style={{
                      height: "700px",
                      position: "relative",
                      paddingTop: "25px",
                      // border: "2px solid black",
                      marginTop: "3rem",
                      marginBottom: "2rem",
                      marginLeft: "2rem",
                    }}
                  />

                  <div className="absolute top-[39%] left-[53%] flex">
                    <motion.div
                      className="absolute left-[80px] w-[50]"
                      // style={{ top: 50 }}
                      animate={{
                        // y: scrollY,
                        width: "50",
                        // scale: scrollY.current / 600,
                        // y: scrollY.current / 48,
                        x: P.current,
                        scale: P1.current,
                        y: P2.current,
                      }}
                    >
                      <motion.img
                        src="/images/phoneicon1.webp"
                        width="53"
                        alt="hii"
                      />
                    </motion.div>

                    <motion.div
                      className="relative"
                      // animate={{ y: (scrollY.current / 98) * 13 }}
                    >
                      <motion.img
                        src="/images/phoneicon2.webp"
                        width="170"
                        alt="hii"
                        animate={{
                          y: P3.current,
                        }}
                        // animate={{ top: scrollYProgress.current }}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute top-[120%]"
                      // style={{ opacity: opacityimg.current }}
                      animate={{
                        x: R.current,
                        opacity: Q.current,
                      }}
                    >
                      <motion.img
                        src="/images/phoneicon3.webp"
                        width="170"
                        alt="hii"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-[80px]">Hey this is dummy page</h1>
      </div>
    </>
  );
};

export default Newtask;
