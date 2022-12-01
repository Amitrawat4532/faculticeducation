import React from "react";

function Cards() {
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
      <div className="w-full h-[170vh] bg-slate-200  flex flex-row justify-center items-end overflow-hidden ">
        {Cards.map((el, id) => {
          return (
            <>
              <div
                className="flex flex-row justify-center items-center flex-wrap py-20"
                key={id}
                // style={{
                //   paddingTop: id % 2 === 0 ? "80px" : "0",
                // }}
              >
                <div className="h-[110vh] w-60 flex flex-col justify-center items-center ">
                  {el?.img.map((x, key) => (
                    <img key={key} src={x} className="h-[400px] w-full " />
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
