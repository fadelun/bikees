import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"
import { ReactComponent as ToRight } from "../image/to-right.svg";
import { ReactComponent as ToLeft } from "../image/to-left.svg";
import { ReactComponent as ToBottom } from "../image/to-bottom.svg";
import { ReactComponent as Close } from "../image/close.svg";
import bikes from "../source/bikes";
import FormatNumber from "../utils/FormatNumber";


export default function Main() {
  const [spec, setSpec] = useState(false)
  const bike = bikes[1]


  const showMore = () => {
    setSpec(!spec)
  }

  return (
    <main className="relative">
      {/* bike showcase */}
      <div className="overview__bike container content mx-auto h-screen pt-20 ">
        <p className="bg-text text-[#ffffff0d] text-[20vw] font-bold tracking-tighter italic absolute left-[12%] top-[22%]">
          {bike.brand}
        </p>

        <div className="content relative">
          <h1 className="uppercase ">{bike.name}</h1>
          <div className="image-container w-2/4 mx-auto">
            <img src={bike.image} alt={bike.name} />
            <div className="button__show__spec hover:cursor-pointer border border-blue-400 mx-auto absolute top-[3%] bottom-[20%] left-[30%] right-[30%] opacity-0 hover:opacity-30"></div>
          </div>
        </div>

        <div className="btn absolute top-[60%]  left-4 ">
          <ToLeft />
        </div>
        <div className="btn absolute top-[60%]  right-4">
          <ToRight />
        </div>

        <buttpn onClick={() => showMore()} className="btn absolute left-[50%] bottom-2 hover:cursor-pointer">
          <ToBottom />
        </buttpn>


      </div>
      {/* spec bike */}
      {spec && <motion.div
        initial={{ y: "120vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.8
        }}
        className={`spec__bike content text-white absolute bg-[#181818]  right-0 left-0 top-14 pt-16 ${spec ? "block" : "hidden"} `} >
        <button onClick={() => showMore()} className="btn absolute top-1 right-1 hover:cursor-pointer">
          <Close />
        </button>
        <div className="container mx-auto ">
          <header className=" flex justify-between">


            <div className="image__container  w-2/5 ">
              <img src={bike.image} alt="Razy Three" />
              <ul className="image__list flex justify-center basis-4">
                <li className="w-3/12">
                  <img src={bike.image} alt="Razy Three" />
                </li>
                <li className="w-3/12">
                  <img src={bike.image} alt="Razy Three" />
                </li>
              </ul>
            </div>
            <div className="content w-3/6">
              <div className="head__of__bike border-b pb-3 mb-5">
                <h1 className='uppercase text-primary'>
                  {bike.brand} {bike.name}
                </h1>
                <p className="text-3xl font-semibold">
                  Rp{FormatNumber(bike.price)}
                </p>
              </div>
              <p className="desc mb-10">
                {bike.desc}
              </p>

              <button className="bg-white px-8 py-3 font-semibold text-3xl text-black">
                <p>Go to shop</p>
              </button>


            </div>
          </header>
          <main>
            <h3 className="spec__title pb-1 mb-4 mt-10 border-b">
              Spec
            </h3>
            <ul className="content mb-16">
              {
                bike && Object.entries(bike.spec).map(item => {
                  return (
                    <li className="flex mb-2">
                      <p className="capitalize basis-1/6 font-semibold">{item[0]}</p>
                      <p className="basis-5/6">{item[1]}</p>
                    </li>)
                })
              }




            </ul>
          </main>

        </div>
      </motion.div>}
    </main>
  );
}
