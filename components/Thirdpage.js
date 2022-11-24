import React from "react";

function Thirdpage() {
  const Data = [
    {
      image: "../images/internet.png",
      header: "Current Students",
      number: "180",
      paragraph: "Natus error sit voluptatem actium doloremque laudantium",
    },
    {
      image: "../images/internet.png",
      header: "Courses Completed",
      number: "254",
      paragraph: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      image: "../images/internet.png",
      header: "Occupations Taken",
      number: "391",
      paragraph: "Et dolore magna aliqua ut enim ad minim veniam",
    },
  ];
  return (
    <>
      <div className="h-screen  w-full flex   px-7 py-7 sm:px-20   ">
        <div className="flex  w-full h-full items-start   flex-col sm:flex-row py-9">
          {/* section left  */}
          <div className=" h-full w-full  sm:w-2/4  px-4 sm:px-8 gap-8 sm:gap-5 md:gap-10 flex flex-col justify-center ">
            <div className="gap-1 sm:gap-5 flex flex-col">
              <h5 className="text-1xl font-bold">WHAT WE DO</h5>
              <h1 className=" text-3xl   sm:text-6xl font-bold">
                We make sure it&apos;s easy to learn.
              </h1>
            </div>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et{" "}
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
            <button className="bg-blue-700 w-44 h-12 text-white   rounded-3xl">
              About us
            </button>
          </div>
          {/* section right */}
          <div className="h-full w-full  sm:w-2/4  gap-5 flex flex-col justify-center   ">
            {Data?.map((el, id) => {
              return (
                <>
                  <div
                    className="h-auto py-4 w-full  flex flex-col-reverse sm:flex-row  justify-around sm:justify-between  sm:items-start  px-4 gap-4 sm:gap-4 "
                    key={id}
                  >
                    <div className="flex flex-row sm:flex-row gap-5">
                      <img
                        src={el.image}
                        className="w-28 h-20 object-contain "
                      />
                      <div>
                        <h1 className="text-2xl font-bold">{el.header}</h1>
                        <h2>{el.paragraph}</h2>
                      </div>
                    </div>
                    <h3 className="text-6xl font-bold ">{el.number}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Thirdpage;
