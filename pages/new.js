import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const New = (props) => {
  const { scrollY } = useScroll();
  const [scrVal, setScrVal] = useState(scrollY.current)
  const v = motionValue(scrVal)

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScrVal(latest)
      console.log(latest);
    });
  }, [scrollY]);

  const w = useTransform(v, [150, 400], [45,90])
  const dashOff = useTransform(v, [350, 700], [-425, -925])

// increasing container width -> 153px-> 460px from [45vw -> 90vw] can be achieved by useTransorm ==> completed
// starting from 350 playing with strokeDashOffset and strokeDashArray to 750 ==> completed
// after 750 we have to change background along with image inside svg initially opacity and changing to one along with background color
// strokeDashOffset final val -> -925  initial val ->  -425

  return (
    <section className='flex items-center justify-center h-[300vh]'>
      <motion.div className="bg-orange-300 border-2 border-red-400 mt-5 rounded-[5rem] py-16 " 
        animate={{width: `${w.current}vw`}}>
        <svg
          className=" h-[30rem] w-fit flex m-auto p-10 inset-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 328 725"
          height='30rem'
          width='auto'
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
            strokeWidth={4}
            strokeLinecap="round"
            strokeDashoffset={dashOff}
            strokeDasharray="1015"
            pathLength={-0.2}
          />
          <motion.path
            d="M276.8 723H51.2c-8.994 0-15.619-.002-20.855-.43-5.212-.425-8.871-1.264-11.965-2.84a29.997 29.997 0 0 1-13.11-13.11c-1.576-3.094-2.415-6.753-2.841-11.965C2.002 689.419 2 682.794 2 673.8V51.2c0-8.994.002-15.619.429-20.855.426-5.212 1.265-8.871 2.841-11.965A29.994 29.994 0 0 1 18.38 5.27c3.094-1.577 6.753-2.415 11.965-2.841C35.581 2.002 42.206 2 51.2 2h225.6c8.994 0 15.619.002 20.855.429 5.212.426 8.871 1.264 11.965 2.841a29.997 29.997 0 0 1 13.11 13.11c1.576 3.094 2.415 6.753 2.84 11.965.428 5.236.43 11.861.43 20.855v622.6c0 8.994-.002 15.619-.43 20.855-.425 5.212-1.264 8.871-2.84 11.965a30 30 0 0 1-13.11 13.11c-3.094 1.576-6.753 2.415-11.965 2.84-5.236.428-11.861.43-20.855.43Z"
            fill="none"
            stroke="#fd7a47"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDashoffset={dashOff}
            strokeDasharray="1015"
            pathLength={-0.2}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default New;
