// import React, { useState } from "react";
// import { motion, useScroll } from "framer-motion";
// function Motion() {
//   const [scroll, setScroll] = useState(0);

//   setScroll();

//   return (
//     <div className="h-screen w-full bg-slate-300 flex justify-center items-center ">
//       <motion.div
//         className="h-100 w-100 bg-white rounded-full"
//         useScroll={{
//           scale: setScroll(),
//         }}
//       >
//         hii
//       </motion.div>
//     </div>
//   );
// }

// export default Motion;

import { motion, useScroll } from "framer-motion";

export default function Motion() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="h-full w-full bg-white rounded-full flex justify-center items-center fixed z-10"
        style={{ scaleX: scrollYProgress }}
        animate={{ opacity: 1 }}
        id="motion_container"
      >
        <motion.div className="w-96 h-full bg-white border-2 border-black">
          <h1>
            Hey this is me amit rawat and im from dehradun uttarakhand india
          </h1>
          <p>my home town is suituated in rudraprayag india</p>
        </motion.div>
      </motion.div>
    </>
  );
}
