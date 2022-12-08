/* eslint-disable @next/next/no-img-element */
import React from "react";

function Services() {
  const Data = [
    {
      img: "../images/icon1.png",
      header: "Faster ",
      headerOne: "Info Assimilation",
    },
    {
      img: "../images/icon2.png",
      header: "Creative",
      headerOne: "Study Approach",
    },
    {
      img: "../images/icon3.png",
      header: "Math",
      headerOne: "Is Easier Here",
    },
    {
      img: "../images/icon4.png",
      header: "Become ",
      headerOne: "a Novel Writer",
    },
  ];
  return (
    <>
      <div className="h-full w-full" style={{ backgroundColor: "#F5F7FA" }}>
        {/* 1st box */}
        <div className="h-full  w-full  flex flex-col sm:flex-row ">
          {/* left box */}
          <div className=" min-h-32 sm:pb-28 sm:h-96 w-full gap-10 flex flex-col justify-center  md:items-start  ">
            <div className=" px-6 sm:px-5 flex flex-col  gap-1 lg:px-24  ">
              <h4
                className="text-start "
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                {" "}
                TOP SERVICES
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                Courses make your study productive.
              </h1>
            </div>
          </div>
          {/* right box */}
          <div className=" h-full sm:h-96 w-full flex flex-col  gap-5 sm:gap-11 justify-center items-start px-6 sm:px-5 py-8 lg:py-12  ">
            <h3 className="text-1xl" style={{ color: "#797C7F" }}>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco sed do
              <br /> eiusmod tempor incididunt ut labore.
            </h3>
            <p className="text-1xl" style={{ color: "#797C7F" }}>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna <br />
              aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        {/* 2nd box */}
        <div className="w-full  flex justify-start px-3 sm:px-3 lg:px-20  py-6 flex-wrap gap-10 sm:gap-10 md:gap-2 flex-col sm:flex-row">
          {/* <div className="h-full w-full sm:px-12 gap-10  flex  flex-col sm:flex-row   border-2 border-blue-700"> */}
          {Data.map((el, id) => {
            return (
              <div
                className=" px-2 sm:pl-2 pr-28 mx-4  flex flex-col  gap-8 relative overflow-hidden"
                key={id}
              >
                <img src={el.img} className="h-24 w-24" alt="image" />
                <div>
                  <h3 className="text-1xl font-bold  md:text-2xl">
                    {el.header}
                  </h3>
                  <h2 className="text-1xl font-bold md:text-2xl">
                    {el.headerOne}
                  </h2>
                </div>
                <a className="text-2xl font-bold read_more"></a>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Services;
