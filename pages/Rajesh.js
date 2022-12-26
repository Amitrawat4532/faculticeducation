import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import { use, useEffect, useState } from "react";

// import Dummy from "/components/Dummy";

const Newtask = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrVal, setScrVal] = useState(scrollY.current);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScrVal(latest);
    });
  }, [scrollY]);

  const v = scrollYProgress;
  //   const w = useTransform(v, [150, 400], [60, 100]);
  //   const scale = useTransform(scrollYProgress, [1, 0.9], [0, 1]);
  // const h = useTransform(v, [150, 400], [60, 100]);
  const opacity = useTransform(v, [1200, 100], [0, 1]);
  const opacityimg = useTransform(v, [1600, 100], [0, 1]);
  const opacityText = useTransform(v, [100, 800], [0, 1]);
  const borderRadius = useTransform(v, [0, 1], ["20px", "0px"]);
  const backgroundColor = useTransform(
    v,
    [1, 1],
    ["url('/images/backgroundimg.jpg')", "url('/images/backgroundimg.jpg')"]
  );
  // const opacityImg = useTransform(v, [10, 100], [0, 1]);
  // icon transformation section
  // const icon3 = useTransform(scrollYProgress, [0.3, 0.4], [1.1, 0.6]);
  // icon transformation section

  return (
    <>
      <div className="h-screen"></div>
      <div
        className="bg-white-200 h-[300vh] w-full flex  justify-center items-start border-2 border-black"
        style={
          {
            // overflow: "hidden",
            //   width: scrollY.current,
          }
        }
      >
        {/*Hello</div> */}
        <motion.div
          style={{
            width: scrollY,
            maxWidth: "100%",
            // minWidth: "50%",
            height: "100vh",
            position: "sticky",
            top: "0px",
            borderRadius: borderRadius,
            backgroundImage: backgroundColor,
            backgroundSize: "100% 100%",
            border: "2px solid black",
          }}
        >
          <div className="flex justify-center items-center">
            <div className=" flex justify-center items-center overflow-y-visible">
              <div>
                <motion.div>
                  <motion.img
                    src="/images/featurephone.webp"
                    style={{
                      height: "700px",
                      position: "relative",
                    }}
                  />

                  <div className="absolute top-[35%] left-[53%] flex">
                    <motion.div
                      className="absolute left-[110px] w-[50]"
                      //   style={{ scale: scrollYProgress.current }}
                      animate={{
                        // y: scrollY,
                        width: "50",
                        scale: scrollY.current / 400,
                        // x: -scrollY.current / 24,
                      }}
                    >
                      <motion.img
                        src="/images/phoneicon1.webp"
                        width="53"
                        alt="hii"
                      />
                    </motion.div>

                    <motion.div className="relative">
                      <motion.img
                        src="/images/phoneicon2.webp"
                        width="170"
                        alt="hii"

                        // animate={{ top: scrollYProgress.current }}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute top-[120%]"
                      animate={{
                        x: scrollYProgress.current,
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
    </>
  );
};

export default Newtask;
