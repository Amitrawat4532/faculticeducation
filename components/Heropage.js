import React from "react";
import { motion, useScroll } from "framer-motion";
function Heropage() {
  return (
    <>
      <div className="stickey">
        <svg
          className="trx_addons_shape bg-indigo-700 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 40"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M1920 40C1920 40 1831.52 10 1753.2 10C1674.88 10 1606.72 40 1606.72 40C1606.72 40 1547.84 20 1497.79 20C1447.75 20 1386.54 40 1386.54 40C1386.54 40 1305.49 0 1233.74 0C1162 0 1079.57 40 1079.57 40C1079.57 40 979.465 0 855.443 0C731.421 0 643.486 40 643.486 40C643.486 40 556.627 0 489.375 0C422.123 0 354.475 40 354.475 40C354.475 40 265.451 10 176.831 10C88.2111 10 0 40 0 40V0L1920 0V40Z"
          ></path>
        </svg>
      </div>
      <motion.div
        className="  h-screen bg-indigo-700 flex justify-center relative rounded-full "
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}

        // transition={{
        //   duration: 2,
        //   ease: "easeInOut",
        //   times: [0, 0.2, 0.5, 0.8, 1],
        //   repeat: Infinity,
        //   repeatDelay: 1,
        // }}
        // initial={{ opacity: "10" }}
      >
        <motion.div className=" items-center h-96 absolute top-20 w-11/12  flex justify-center flex-col gap-5">
          <h2 className="text-white text-1xl sm:text-2xl lg:text-2xl">
            Consectetur adipiscing elit.
          </h2>
          <h1 className="text-white text-3xl font-bold  text-center sm:text-4xl lg:text-6xl">
            Distant learning is <br /> the future of education
          </h1>

          <div className="border-2   flex bg-white rounded-full">
            <input
              type="search"
              placeholder="Enter your Email Address"
              className="h-10 w-60 rounded-3xl px-6  sm:w-90"
            ></input>
            <img src="../images/sent.png" className="rounded-3xl w-10 " />
          </div>
          <div className="flex justify-center gap-4">
            <input
              type="checkbox"
              className=" rounded-1xl color-indigo-600 "
            ></input>
            <label>
              I agree to the{" "}
              <a href="#" className="underline underline-offset-1">
                Privacy Policy
              </a>
            </label>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-16 rotate-90 hidden  lg:block">
          <img src="https://facultic.ancorathemes.com/wp-content/uploads/2022/03/shape-05.svg"></img>
        </div>
        <div className="absolute top-8 right-10 hidden lg:block">
          <img src="https://facultic.ancorathemes.com/wp-content/uploads/2022/03/shape-06.svg"></img>
        </div>
        <div className="absolute top-8 left-10 hidden lg:block">
          <img src="https://facultic.ancorathemes.com/wp-content/uploads/2022/03/shape-02.svg"></img>
        </div>

        <div className="absolute bottom-12 right-6 hidden lg:block">
          <img src="https://facultic.ancorathemes.com/wp-content/uploads/2022/03/shape-04.svg"></img>
        </div>
      </motion.div>
      <div>
        <svg
          className="trx_addons_shape bg-indigo-700 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 40"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M1920 40C1920 40 1831.52 10 1753.2 10C1674.88 10 1606.72 40 1606.72 40C1606.72 40 1547.84 20 1497.79 20C1447.75 20 1386.54 40 1386.54 40C1386.54 40 1305.49 0 1233.74 0C1162 0 1079.57 40 1079.57 40C1079.57 40 979.465 0 855.443 0C731.421 0 643.486 40 643.486 40C643.486 40 556.627 0 489.375 0C422.123 0 354.475 40 354.475 40C354.475 40 265.451 10 176.831 10C88.2111 10 0 40 0 40V0L1920 0V40Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Heropage;
