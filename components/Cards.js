import React from "react";
// import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

function Cards({ scrollY }) {
  // const { scrollY, scrollYProgress } = useScroll();

  const Cards = [
    {
      img: ["../images/card1.webp"],
    },
    {
      img: ["../images/card2.webp", "../images/card1.webp"],
    },
    {
      img: ["../images/card3.webp"],
    },
    {
      img: ["../images/card4.webp"],
    },
    {
      img: ["../images/card5.webp", "../images/card5.webp"],
    },
    {
      img: ["../images/card6.webp"],
    },
  ];
  return (
    <>
      <motion.div className="w-full h-[170vh] bg-slate-200  flex flex-row justify-center items-end overflow-hidden">
        {Cards.map((el, id) => {
          return (
            <>
              <div
                className="flex flex-row justify-center items-center flex-wrap py-20"
                key={id}
                style={
                  {
                    // paddingTop: id % 2 === 0 ? "80px" : "0",
                  }
                }
              >
                <motion.div className="h-[110vh] w-[250px] flex flex-col justify-center items-center">
                  {el?.img.map((x, key) => (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      key={key}
                    >
                      <img
                        key={key}
                        src={x}
                        className="h-[500px] w-[250px]"
                        // style={{
                        //   transform:
                        //     id % 2 === 0
                        //       ? `translateY(${scrollY})`
                        //       : `translateY(${-scrollY})`,
                        // }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </>
          );
        })}
      </motion.div>
    </>
  );
}

export default Cards;
