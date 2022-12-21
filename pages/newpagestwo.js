import Image from "next/image";
import React from "react";

const newpage = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="stickey top-0">
            <video
              width="100%"
              height="100%"
              preload="auto"
              loop
              autoPlay
              muted
              style={{
                pointerEvents: "none",
                position: "relative",
              }}
            >
              <source src="/images/bgvideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="content">{/* <h1>hii my name is amit 1</h1> */}</div>
          <Image
            src="/images/phoneimg.webp"
            height="200"
            width="220"
            alt="hii"
            className="fixed top-[7rem] left-[40rem] z-10 "
          />
        </div>

        <div className="section">
          <div className="sticky">
            <video
              width="100%"
              height="100%"
              preload="auto"
              loop
              autoPlay
              muted
              style={{ pointerEvents: "none" }}
            >
              <source src="/images/bgvideo2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="content">{/* <h1>hii my name is amit 2</h1> */}</div>
          <Image
            src="/images/phone2.png"
            height="200"
            width="220"
            alt="hii"
            className="absolute top-[7rem] left-[40rem] z-0"
          />
        </div>

        <div className="section">
          <div className="fixed">
            <video
              width="100%"
              height="100%"
              preload="auto"
              autoPlay
              muted
              loop
              style={{ pointerEvents: "none" }}
            >
              <source src="/images/bgvideo3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="content">
            {/* <h1>hii my name is amit 3</h1> */}
            <Image
              src="/images/phone3.png"
              height="200"
              width="220"
              alt="hii"
              className="absolute top-[7rem] left-[40rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default newpage;
