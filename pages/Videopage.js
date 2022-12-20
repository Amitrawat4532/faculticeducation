import React from "react";
// import bgvideo from "../public/images/bgvideo.mp4";
import Image from "next/image";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

const Videopage = () => {
  return (
    <>
      <Parallax
        pages={3}
        className="bg-[url('/images/bg.png')] h-screen w-full"
      >
        <ParallaxLayer>
          <div className="height-screen w-full ">
            <video
              width="100%"
              height="100%"
              controls
              preload="auto"
              loop
              autoPlay
              muted
              style={{ pointerEvents: "none" }}
            >
              <source src="/images/bgvideo.mp4" type="video/mp4" />
            </video>
            <div className="h-screen w-full  top-[20%] left-[42%]">
              <Image
                src="/images/phoneimg.webp"
                height="200"
                width="220"
                alt="hii"
              />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Videopage;
