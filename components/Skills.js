import React, { useState, useEffect } from "react";

function Skills() {
  const Data = [
    {
      img: "https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg",
      header: "Data visualization course",
      heading: "byKelly Anderson",
      lesson: "3 lesson",
      person: "30 person",
      circle_text: "$99.00",
    },
    {
      img: "https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg",
      header: "Data visualization course",
      heading: "byKelly Anderson",
      lesson: "3 lesson",
      person: "30 person",
      circle_text: "$99.00",
    },
    {
      img: "https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg",
      header: "Data visualization course",
      heading: "byKelly Anderson",
      lesson: "3 lesson",
      person: "30 person",
      circle_text: "$99.00",
    },
    {
      img: "https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg",
      header: "Data visualization course",
      heading: "byKelly Anderson",
      lesson: "3 lesson",
      person: "30 person",
      circle_text: "$99.00",
    },
    {
      img: "https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg",
      header: "Data visualization course",
      heading: "byKelly Anderson",
      lesson: "3 lesson",
      person: "30 person",
      circle_text: "$99.00",
    },
    {
      img: "https://facultic.ancorathemes.com/wp-content/uploads/2021/10/course1-copyright-890x664.jpg",
      header: "Data visualization course",
      heading: "byKelly Anderson",
      lesson: "3 lesson",
      person: "30 person",
      circle_text: "$99.00",
    },
  ];

  // const [apiData, setApiData] = useState();

  // const getApiData = async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();

  //     setApiData(data);
  //   } catch (error) {
  //     console.log("api fetching error");
  //   }
  // };

  // useEffect(() => {
  //   getApiData();
  // });

  // getApiData();

  return (
    <>
      {/* bg-neutral-200 */}
      <div className="h-full w-screen flex justify-start  items-center  flex-col gap-12 bg-neutral-200 ">
        <div className="flex justify-center  items-center flex-col  w-11/12  h-40 gap-5 ">
          <h4 className="text-1xl font-bold">WHAT WE TEACH</h4>
          <h1 className="text-2xl sm:text-6xl font-bold">
            Upgrade Your Skills
          </h1>
        </div>

        <div className="flex h-full w-full flex-col sm:flex-row sm:flex-wrap  sm:justify-center gap-8 items-center bg-neutral-200  ">
          {Data?.map((el, id) => {
            return (
              <div
                className="  w-96 flex-col px-4 sm:px-0 flex   overflow-hidden shadow-slate-400"
                key={id}
              >
                <img
                  id="zoom"
                  src={el.img}
                  className="h-80 w-96   transition duration-500 hover:scale-124"
                />
                <div className=" h-36 w-1/1  flex justify-center items-center flex-col gap-5 relative bg-white ">
                  <div
                    className="bg-black flex justify-center items-center p-10  text-cyan-50 text-center h-14 w-14 "
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "-26%",
                      borderRadius: "50%",
                    }}
                  >
                    <h4>{el.circle_text}</h4>
                  </div>
                  <h1 className="text-2xl hover:text-purple-700  transition duration-300 sm:text-3xl px-1 font-bold ">
                    {el.header}
                  </h1>
                  <a className="self-start px-5 hover:text-black transition duration-300  text-slate-500 ">
                    {el.heading}
                  </a>
                </div>
                <hr className="bg-slate-500 w-60 bg-center self-center"></hr>
                <div className="h-20 w-1/1  flex justify-around items-center  bg-white ">
                  <div className="flex-row flex gap-3 px-6">
                    <img src="../images/lesson.png" className="h-6 w-6"></img>
                    <h5 className="font-bold"> {el.lesson}</h5>
                  </div>
                  <div className="flex-row flex gap-3 px-6 ">
                    <img src="../images/user.png" className="h-6 w-6"></img>
                    <h5 className="font-bold">{el.person}</h5>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="h-28 w-full bg-white"></div> */}
        </div>
      </div>
    </>
  );
}

export default Skills;
