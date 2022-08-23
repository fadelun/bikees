import React from "react";
import ImgBike from "../image/bikes/Rayz-Three.png";
import { ReactComponent as ToRight } from "../image/to-right.svg";
import { ReactComponent as ToLeft } from "../image/to-left.svg";
import { ReactComponent as ToBottom } from "../image/to-bottom.svg";
import bikes from "../source/bikes";


export default function Main() {
  const bike = bikes[1]

  return (
    <main className="container mx-auto  h-screen pt-20 ">

      <p className="bg-text text-[#ffffff0d] text-[20vw] font-bold tracking-tighter italic absolute left-[12%] top-[22%]">
        {bike.brand}
      </p>

      {/* </div> */}
      <div className="content absolute">
        <h1 className="uppercase ">{bike.name}</h1>
        <div className="image-container w-2/4 mx-auto">
          <img src={ImgBike} alt="Razy Three" />
          <div className="button__show__spec hover:cursor-pointer border border-blue-400 mx-auto absolute top-[3%] bottom-[20%] left-[30%] right-[30%] opacity-0 hover:opacity-30"></div>
        </div>
      </div>

      <div className="btn absolute top-[60%] inset-y-0 left-4 ">
        <ToLeft />
      </div>
      <div className="btn absolute top-[60%] inset-y-0 right-4">
        <ToRight />
      </div>

      <div className="btn absolute left-[50%] bottom-2">
        <ToBottom />
      </div>

      <div className="aside text-white  absolute bg-black inset-0 top-14">
        <div className="container mx-auto ">
          <header className=" flex justify-between">


            <div className="image-container bg-blue-600 w-2/5 ">
              <img src={ImgBike} alt="Razy Three" />
              {/* <div className='button__show__spec hover:cursor-pointer border border-blue-400 mx-auto absolute top-[3%] bottom-[20%] left-[30%] right-[30%] opacity-0 hover:opacity-30'></div> */}
            </div>
            <div className="content bg-blue-200 w-3/6">
              <div className="head__of__bike border-b pb-3 mb-5">
                <h1 className='uppercase '>
                  {bike.brand} | {bike.name}
                </h1>
                <p className="text-3xl font-semibold">
                  Rp.{bike.price}
                </p>
              </div>
              <p className="desc ">
                {bike.desc}
              </p>

              <main>

              </main>



            </div>
          </header>

        </div>
      </div>
    </main>
  );
}
