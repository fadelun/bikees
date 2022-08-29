import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"

import { ReactComponent as ToBottom } from "../image/to-bottom.svg";
import { ReactComponent as Close } from "../image/close.svg";
import bikes from "../source/bikes";
import FormatNumber from "../utils/FormatNumber";
import Overview from "./main/Overview";



export default function Main() {
  const [specContainer, setSpecContainer] = useState(false)
  const [detail, setDetail] = useState()

  const showMore = () => {
    setSpecContainer(!specContainer)
  }

  return (
    <main className="relative">

      <button onClick={() => showMore()} className="btn absolute left-[50%] bottom-2 hover:cursor-pointer z-10">
        <ToBottom />
      </button>

      {/* bike showcase */}
      <Overview setDetail={setDetail} detail={detail} />

      {/* detail bike */}
      {specContainer && detail && <motion.div
        initial={{ y: "120vh" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.8
        }}
        className={`spec__bike content text-white absolute bg-[#181818]  right-0 left-0 top-14 pt-16 z-20 ${detail ? "block" : "hidden"} `} >
        <button onClick={() => showMore()} className="btn absolute top-1 right-1 hover:cursor-pointer ">
          <Close />
        </button>
        <div className="container mx-auto ">
          <header className=" flex justify-between">


            <div className="image__container  w-2/5 ">
              <img src={detail.image} alt="Razy Three" />
              <ul className="image__list flex justify-center basis-4">
                <li className="w-3/12">
                  <img src={detail.image} alt="Razy Three" />
                </li>
                <li className="w-3/12">
                  <img src={detail.image} alt="Razy Three" />
                </li>
              </ul>
            </div>
            <div className="content w-3/6">
              <div className="head__of__bike border-b pb-3 mb-5">
                <h1 className='uppercase text-primary'>
                  {detail.brand} {detail.name}
                </h1>
                <p className="text-3xl font-semibold">
                  Rp{FormatNumber(detail.price)}
                </p>
              </div>
              <p className="desc mb-10">
                {detail.desc}
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
                detail && Object.entries(detail.spec).map(item => {
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
