/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const CardsMain = () => {
 
  return (
    <div className="flex h-screen w-full border-2 border-purple-500">
      <motion.div className="chch max-w-screen-2xl h-[125vh] w-full flex items-center overflow-hidden border-2 border-red-900">

        <div className="h-one scale-125">
        <motion.img 
          initial={{x:-30}}
          animate={{x:-50}}          
          className="two "
          src="../images/card1.webp"        
          alt="image"
        />
        </div>


      <div className="heyyy scale-125 ">
        <div className="h-two">
        <motion.img 
          className="two"
          src="../images/card2.webp"               
          alt="image"
        />
        </div>

        <div className="h-three">
        <motion.img 
          className="two"
          src="../images/card3.webp" 
          alt="image"
        />
        </div>

        </div>

        <div className="h-four scale-125 ">
        <motion.img 
        initial={{y:0}}
        animate={{y:-50}}
          className="two"
          src="../images/card4.webp" 
          alt="image"
        />
        </div>

        <div className="h-five scale-125 ">
        <motion.img 
          className="two"
          src="../images/card6.webp" 
          alt="image"
        />

        </div>


        <div className="hey scale-125">
        <div className="h-six">
        <motion.img 
          className="two"
          src="../images/card6.webp" 
          alt="image"
        />
        </div>

        <div className="h-six">
        <motion.img 
          className="two"
          src="../images/card6.webp" 
          alt="image"
        />

        </div>



        </div>


        <div className="h-seven scale-125 ">
        <motion.img 
          initial={{y:0}}
          animate={{y:-40}}
          className="two"
          src="../images/card3.webp" 
          alt="image"
        />

        </div>


        <div className="h-eight scale-125">
        <motion.img 
          initial={{x:30}}
          animate={{x: 50}}   
          className="two"
          src="../images/card3.webp" 
          alt="image"
        />
        </div>

      </motion.div>
    </div>
  );
};
export default CardsMain;
