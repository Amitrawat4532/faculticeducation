// import { motion, motionValue, useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";

// import Scrollpage from "../components/Scrollpage";

// const Animationbox = (props) => {
//   const { scrollY, scrollYProgress } = useScroll();
//   const [scrVal, setScrVal] = useState(scrollY.current);
//   const v = motionValue(scrVal);

//   useEffect(() => {
//     scrollY.onChange((latest) => {
//       console.log(latest);
//       setScrVal(latest);
//     });
//   }, [scrollY]);

//   const w = useTransform(v, [150, 400], [45, 90]);
//   const dashOff = useTransform(v, [350, 700], [-425, -925]);

//   const length = useTransform(v, [200, 800], [1020, 2000]);
//   const width = useTransform(v, [200, 800], [290, 1020]);

//   console.log(length, width);
//   // increasing container width -> 153px-> 460px from [45vw -> 90vw] can be achieved by useTransorm ==> completed
//   // starting from 350 playing with strokeDashOffset and strokeDashArray to 750 ==> completed
//   // after 750 we have to change background along with image inside svg initially opacity and changing to one along with background color
//   // strokeDashOffset final val -> -925  initial val ->  -425

//   return (
//     <>
//       <Scrollpage />
//       <section
//         className="flex items-start justify-center h-[300vh]"
//         style={{
//           background: "rgb(235,238,244)",
//         }}
//       >
//         <motion.div
//           className=" mt-5 rounded-[5rem] py-16 "
//           animate={{ width: `${w.current}vw` }}
//           style={{
//             position: "sticky",
//             top: "60px",
//             background: "white",
//             opacity: "1",
//             // background:
//             //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
//             background: `linear-gradient(180deg,rgba(36,69,233,${scrollYProgress.current}),#e3ad85 95.99%)`,

//             // background: "red",
//           }}
//         >
//           <motion.img
//             src="../images/card6.webp"
//             style={{
//               position: "absolute",
//               top: "17%",
//               left: "42.9%",
//               height: "28rem",
//               opacity: scrollYProgress,
//             }}
//           />
//           <svg
//             className=" h-[30rem] w-fit flex m-auto p-10 inset-0"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 328 725"
//             // height="4px"
//             // width="auto"
//             shapeRendering="geometricPrecision"
//             textRendering="geometricPrecision"
//             style={{
//               opacity: 1,
//             }}
//             {...props}
//           >
//             <motion.path
//               d="M51.2 2h225.6c8.994 0 15.619.002 20.855.43 5.212.425 8.871 1.264 11.965 2.84a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.841 11.965.427 5.236.429 11.861.429 20.855v622.6c0 8.994-.002 15.619-.429 20.855-.426 5.212-1.265 8.871-2.841 11.965a29.994 29.994 0 0 1-13.11 13.11c-3.094 1.577-6.753 2.415-11.965 2.841-5.236.427-11.861.429-20.855.429H51.2c-8.994 0-15.619-.002-20.855-.429-5.212-.426-8.871-1.264-11.965-2.841a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.84-11.965C2.001 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.43-20.855.425-5.212 1.264-8.871 2.84-11.965A30 30 0 0 1 18.38 5.27c3.094-1.576 6.753-2.415 11.965-2.84C35.581 2.001 42.206 2 51.2 2Z"
//               fill="none"
//               stroke="#4281ee"
//               strokeWidth={8}
//               strokeLinecap="round"
//               strokeDashoffset={dashOff}
//               strokeDasharray={length}
//             />
//             <motion.path
//               d="M276.8 723H51.2c-8.994 0-15.619-.002-20.855-.43-5.212-.425-8.871-1.264-11.965-2.84a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.841-11.965C2.002 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.429-20.855.426-5.212 1.265-8.871 2.841-11.965A29.994 29.994 0 0 1 18.38 5.27c3.094-1.577 6.753-2.415 11.965-2.841C35.581 2.002 42.206 2 51.2 2h225.6c8.994 0 15.619.002 20.855.429 5.212.426 8.871 1.264 11.965 2.841a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.84 11.965.428 5.236.43 11.861.43 20.855v622.6c0 8.994-.002 15.619-.43 20.855-.425 5.212-1.264 8.871-2.84 11.965a30 30 0 0 1-13.11 13.11c-3.094 1.576-6.753 2.415-11.965 2.84-5.236.428-11.861.43-20.855.43Z"
//               fill="none"
//               stroke="#fd7a47"
//               strokeWidth={8}
//               strokeLinecap="round"
//               strokeDashoffset={dashOff}
//               strokeDasharray={length}
//             />
//           </svg>
//           {/* horizontal line */}
//           {/* <svg
//             id="ksp-line"
//             className="h-572ex w-full top-[-5.54vh] left-0 absolute ksp-line "
//             viewBox="0 0 340 576"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             transform="rotate(90deg)"
//           >
//             <motion.path
//               className="path"
//               opacity="0.8"
//               d="M-101 531.153C-101 531.153 -75.2392 519.232 -63 519.232C-15.0043 519.232 84.1054 661.591 129.002 487.277C173.899 312.963 198.326 199.5 221 123C239.883 59.2902 277.252 17.7752 315.5 5.67365C323.179 3.24417 330.893 2.00015 338.5 2C384 1.99912 373 81.3288 373 81.3288"
//               stroke="url(#paint0_linear_1619_18622)"
//               strokeWidth={4}
//               strokeLinecap="round"
//               strokeDasharray={dashOffTwo}
//               style={{ strokeDashoffset: "2158px" }}
//             />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_1619_18622"
//                 x1="191.583"
//                 y1="168.933"
//                 x2="589.278"
//                 y2="167.715"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="white" />
//                 <stop offset={1} stopColor="white" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//           </svg> */}
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default Animationbox;

// How to make a horizontal scroll using Next.JS - GSAPhttps://greensock.com › Forums › GSAP
// /* eslint-disable @next/next/no-img-element */
// import { motion, motionValue, useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import Scrollpage from "/components/Scrollpage";

// const New = (props) => {
//   const { scrollY, scrollYProgress } = useScroll();
//   const [scrVal, setScrVal] = useState(scrollY.current);

//   useEffect(() => {
//     scrollY.onChange((latest) => {
//       setScrVal(latest);
//       // console.log(latest);
//     });
//   }, [scrollY]);

//   const v = motionValue(scrVal);
//   const w = useTransform(v, [150, 400], [45, 95]);
//   const dashOff = useTransform(v, [350, 700], [-425, -925]);
//   const ldArray = useTransform(v, [450, 750], [290, 1020]);
//   const lrArray = useTransform(v, [450, 750], [2000, 1020]);
//   const opacity = useTransform(v, [700, 900], [0, 1]);
//   const line = useTransform(v, [1200, 1800], [2240, 70]);
//   const hideWidth = useTransform(v, [900, 1100], [5, 0]);

//   // increasing container width -> 153px-> 460px from [45vw -> 90vw] can be achieved by useTransorm ==> completed
//   // starting from 350 playing with strokeDashOffset and strokeDashArray to 750 ==> completed
//   // after 750 we have to change background along with image inside svg initially opacity and changing to one along with background color
//   // strokeDashOffset final val -> -925  initial val ->  -425

//   //FOR FUTURE USE(optional)
//   // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
//   // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
//   // console.log('width', vw, 'and length is', vh)

//   return (
//     <section className="flex flex-col m-auto items-center h-[400vh] bg-[#EBEEF4]">
//       <Scrollpage />
//       <motion.div
//         style={{
//           background: `${
//             scrollY.current >= 600
//               ? `linear-gradient(180deg,rgba(36,69,233,${scrollYProgress.current}),#e3ad85 99.99%)`
//               : "white"
//           }`,
//         }}
//         className={`  sticky top-10  mt-5 rounded-[5rem] py-16`}
//         animate={{ width: `${w.current}vw` }}
//       >
//         <img
//           src="/images/phone.png"
//           alt="image"
//           className="h-[578px] w-[310px] absolute  translate-x-[-50%] translate-y-[-16px] inset-x-1/2 z-10 "
//           style={{ opacity: opacity.current }}
//         />
//         <svg
//           className=" h-[492px] w-[221px] relative  flex m-auto z-20"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 328 725"
//           height="30rem"
//           width="auto"
//           shapeRendering="geometricPrecision"
//           textRendering="geometricPrecision"
//           style={{
//             opacity: 1,
//           }}
//           {...props}
//         >
//           <motion.path
//             d="M51.2 2h225.6c8.994 0 15.619.002 20.855.43 5.212.425 8.871 1.264 11.965 2.84a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.841 11.965.427 5.236.429 11.861.429 20.855v622.6c0 8.994-.002 15.619-.429 20.855-.426 5.212-1.265 8.871-2.841 11.965a29.994 29.994 0 0 1-13.11 13.11c-3.094 1.577-6.753 2.415-11.965 2.841-5.236.427-11.861.429-20.855.429H51.2c-8.994 0-15.619-.002-20.855-.429-5.212-.426-8.871-1.264-11.965-2.841a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.84-11.965C2.001 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.43-20.855.425-5.212 1.264-8.871 2.84-11.965A30 30 0 0 1 18.38 5.27c3.094-1.576 6.753-2.415 11.965-2.84C35.581 2.001 42.206 2 51.2 2Z"
//             fill="none"
//             stroke="#4281ee"
//             strokeWidth={hideWidth.current}
//             strokeLinecap="round"
//             strokeDashoffset={dashOff}
//             strokeDasharray={`${ldArray.current} ${lrArray.current}`}
//           />
//           <motion.path
//             d="M276.8 723H51.2c-8.994 0-15.619-.002-20.855-.43-5.212-.425-8.871-1.264-11.965-2.84a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.841-11.965C2.002 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.429-20.855.426-5.212 1.265-8.871 2.841-11.965A29.994 29.994 0 0 1 18.38 5.27c3.094-1.577 6.753-2.415 11.965-2.841C35.581 2.002 42.206 2 51.2 2h225.6c8.994 0 15.619.002 20.855.429 5.212.426 8.871 1.264 11.965 2.841a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.84 11.965.428 5.236.43 11.861.43 20.855v622.6c0 8.994-.002 15.619-.43 20.855-.425 5.212-1.264 8.871-2.84 11.965a30 30 0 0 1-13.11 13.11c-3.094 1.576-6.753 2.415-11.965 2.84-5.236.428-11.861.43-20.855.43Z"
//             fill="none"
//             stroke="#fd7a47"
//             strokeWidth={hideWidth.current}
//             strokeLinecap="round"
//             strokeDashoffset={dashOff}
//             strokeDasharray={`${ldArray.current} ${lrArray.current}`}
//           />
//         </svg>

//         <svg
//           id="ksp-line"
//           className="w-full transform top-1/2 left-0 -translate-y-1/2  absolute ksp-line pc-only z-0"
//           viewBox="0 0 1840 618"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.path
//             className="path"
//             opacity="0.8"
//             d="M-108 532.5C-108 532.5 52.0001 524.5 106 524.5C402 524.5 462 740.5 696 508.5C930 276.5 1244 138.282 1307 109.5C1370 80.7183 1543 29.5002 1692 10.5008C1841 -8.49862 1948 10.5009 1948 10.5009"
//             stroke="url(#paint0_linear_1095_27984)"
//             strokeWidth={4}
//             strokeLinecap="round"
//             strokeDashoffset={line.current}
//             strokeDasharray="2239.341552734375"
//           />
//           <defs>
//             <linearGradient
//               id="paint0_linear_1095_27984"
//               x1="1039.48"
//               y1="12.256"
//               x2="2794.07"
//               y2="0.0944021"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="white" />
//               <stop offset={1} stopColor="white" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//         </svg>

//         <div
//           className=" absolute top-48 left-96 border-2 border-black flex h-48 w-48"
//           style={{ opacity: opacity.current }}
//         >
//           <h1 className="text-3xl text-white font-extrabold self-">
//             Smooth Stable Seamless
//           </h1>
//         </div>

//         <div
//           className=" absolute top-80 right-[200px] border-2 border-black flex flex-col gap-7"
//           style={{ opacity: opacity.current }}
//         >
//           <h1 className="text-3xl text-white font-extrabold">
//             Elevate your
//             <br /> experience
//           </h1>
//           <h3 className="text-white font-bold">
//             OxygenOS glides like silk with next-gen <br /> core stability and
//             enhanced reliability. <br /> System-level performance is <br />
//             sublimely smooth with HyperBoost and <br />
//             AI System Booster, elevating mobile gaming <br /> while ensuring
//             smooth app opening.
//           </h3>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default New;

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
  const w = useTransform(v, [150, 400], [45, 95]);
  const dashOff = useTransform(v, [350, 700], [-425, -925]);
  const ldArray = useTransform(v, [450, 750], [290, 1020]);
  const lrArray = useTransform(v, [450, 750], [2000, 1020]);
  const opacity = useTransform(v, [700, 900], [0, 1]);
  const line = useTransform(v, [1200, 1800], [2240, 70]);
  const hideWidth = useTransform(v, [900, 1100], [5, 0]);
  const opacityText = useTransform(v, [1300, 1500], [0, 1]);
  const animateText = useTransform(v, [1300, 1500], [10, 0]);

  const variant = {
    initial: { opacity: 0, y: 0 },
    animate: { y: animateText.current, opacity: opacityText.current },
  };

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
              ? `linear-gradient(180deg,rgba(36,69,233,${scrollYProgress.current}),#e3ad85 95.99%)`
              : "white"
          }`,
        }}
        className="sticky top-10  mt-5 rounded-[5rem] py-16"
        animate={{ width: `${w.current}vw` }}
      >
        <img
          src="/images/phone.png"
          alt="image"
          className="h-[578px] w-[310px] absolute  translate-x-[-50%] translate-y-[-16px] inset-x-1/2 z-10 "
          style={{ opacity: opacity.current }}
        />
        <svg
          className=" h-[492px] w-[221px] relative  flex m-auto z-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 328 725"
          height="30rem"
          width="auto"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          style={{
            opacity: 1,
          }}
          {...props}
        >
          <motion.path
            d="M51.2 2h225.6c8.994 0 15.619.002 20.855.43 5.212.425 8.871 1.264 11.965 2.84a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.841 11.965.427 5.236.429 11.861.429 20.855v622.6c0 8.994-.002 15.619-.429 20.855-.426 5.212-1.265 8.871-2.841 11.965a29.994 29.994 0 0 1-13.11 13.11c-3.094 1.577-6.753 2.415-11.965 2.841-5.236.427-11.861.429-20.855.429H51.2c-8.994 0-15.619-.002-20.855-.429-5.212-.426-8.871-1.264-11.965-2.841a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.84-11.965C2.001 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.43-20.855.425-5.212 1.264-8.871 2.84-11.965A30 30 0 0 1 18.38 5.27c3.094-1.576 6.753-2.415 11.965-2.84C35.581 2.001 42.206 2 51.2 2Z"
            fill="none"
            stroke="#4281ee"
            strokeWidth={hideWidth.current}
            strokeLinecap="round"
            strokeDashoffset={dashOff}
            strokeDasharray={`${ldArray.current} ${lrArray.current}`}
          />
          <motion.path
            d="M276.8 723H51.2c-8.994 0-15.619-.002-20.855-.43-5.212-.425-8.871-1.264-11.965-2.84a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.841-11.965C2.002 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.429-20.855.426-5.212 1.265-8.871 2.841-11.965A29.994 29.994 0 0 1 18.38 5.27c3.094-1.577 6.753-2.415 11.965-2.841C35.581 2.002 42.206 2 51.2 2h225.6c8.994 0 15.619.002 20.855.429 5.212.426 8.871 1.264 11.965 2.841a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.84 11.965.428 5.236.43 11.861.43 20.855v622.6c0 8.994-.002 15.619-.43 20.855-.425 5.212-1.264 8.871-2.84 11.965a30 30 0 0 1-13.11 13.11c-3.094 1.576-6.753 2.415-11.965 2.84-5.236.428-11.861.43-20.855.43Z"
            fill="none"
            stroke="#fd7a47"
            strokeWidth={hideWidth.current}
            strokeLinecap="round"
            strokeDashoffset={dashOff}
            strokeDasharray={`${ldArray.current} ${lrArray.current}`}
          />
        </svg>

        <motion.h1
          initial="initial"
          animate="animate"
          variants={variant}
          className=" hidden md:block lg:text-5xl md:text-4xl text-2xl leading-none text-white absolute top-[25%] right-[calc(60%+15vh)] text-right w-[5rem] md:w-[10rem] lg:w-[12rem]"
        >
          Smooth Stable Seamless
        </motion.h1>

        <motion.div
          initial="initial"
          animate="animate"
          variants={variant}
          className="hidden md:block absolute w-[10rem] md:w-[12rem] top-[45%] text-white left-[calc(60%+15vh)]"
        >
          <h2 className="text-xl md:text-2xl  lg:text-3xl leading-none">
            Elevate your experience
          </h2>
          <p className="text-xs md:text-sm lg:w-[18rem] lg:text-base w-[14rem] mt-4 ">
            OxygenOS glides like silk with next-gen core stability and enhanced
            reliability. System-level performance is sublimely smooth with
            HyperBoost and AI System Booster, elevating mobile gaming while
            ensuring smooth app opening.
          </p>
        </motion.div>

        <svg
          id="ksp-line"
          className="w-full transform top-1/2 left-0 -translate-y-1/2  absolute ksp-line pc-only z-0"
          viewBox="0 0 1840 618"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            className="path"
            opacity="0.8"
            d="M-108 532.5C-108 532.5 52.0001 524.5 106 524.5C402 524.5 462 740.5 696 508.5C930 276.5 1244 138.282 1307 109.5C1370 80.7183 1543 29.5002 1692 10.5008C1841 -8.49862 1948 10.5009 1948 10.5009"
            stroke="url(#paint0_linear_1095_27984)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDashoffset={line.current}
            strokeDasharray="2239.341552734375"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1095_27984"
              x1="1039.48"
              y1="12.256"
              x2="2794.07"
              y2="0.0944021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
};

export default Animationbox;
