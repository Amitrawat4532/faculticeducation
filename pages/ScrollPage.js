import Image from "next/image";
import React from "react";

import { ParallaxLayer, Parallax } from "@react-spring/parallax";

const ScrollPage = () => {
  return (
    <>
      <Parallax
        pages={3}
        className="bg-[url('/images/bg.png')] h-screen w-full"
      >
        <ParallaxLayer>
          <div className="h-screen w-full flex justify-center items-center">
            <Image
              src="/images/phoneimg.webp"
              height="200"
              width="220"
              alt="hii"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div className="h-screen w-full flex justify-center items-center">
            <Image
              src="/images/phone2.png"
              height="200"
              width="220"
              alt="hii"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <div className="h-screen w-full flex justify-center items-center">
            <Image
              src="/images/phone3.png"
              height="200"
              width="220"
              alt="hii"
            />
          </div>
        </ParallaxLayer>
      </Parallax>

      {/* <Parallax
        pages={4}
        className="bg-[url('/images/homebg.png')] h-screen w-full"
      >
        <ParallaxLayer>
          <div className="h-screen w-full flex justify-center items-center">
            <Image
              src="/images/phone2.png"
              height="200"
              width="220"
              alt="hii"
            />
          </div>
        </ParallaxLayer>
      </Parallax> */}

      {/* <Parallax
        pages={4}
        className="bg-[url('/images/homebg.png')] h-screen w-full"
      >
        <ParallaxLayer>
          <div className="h-screen w-full flex justify-center items-center">
            <Image
              src="/images/phoneimg.webp"
              height="200"
              width="220"
              alt="hii"
            />
          </div>
        </ParallaxLayer>
      </Parallax> */}

      {/* <Parallax>
        {" "}
        <div className="bg-[url('/images/bg.png')] h-screen w-full  flex justify-center items-center relative">
          <Image src="/images/phone2.png" height="200" width="220" alt="hii" />
        </div>{" "}
      </Parallax>
      <Parallax>
        <div className="bg-[url('/images/bg.png')] h-screen w-full  flex justify-center items-center relative">
          <Image src="/images/phone3.png" height="200" width="220" alt="hii" />
        </div>{" "}
      </Parallax> */}
    </>
  );
};

export default ScrollPage;

// https://oasis.opstatics.com/content/dam/oasis/page/ovaltine/oxygenos13/pc-1.flv
