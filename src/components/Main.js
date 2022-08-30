import React, { useState } from "react";

import { motion } from "framer-motion"

import { ReactComponent as ToBottom } from "../image/to-bottom.svg";

import { ReactComponent as Close } from "../image/close.svg";
import Overview from "./main/Overview";
import Details from "./main/Details";



export default function Main() {
  const [specContainer, setSpecContainer] = useState(true)
  const [detail, setDetail] = useState()



  const showMore = () => {
    setSpecContainer(!specContainer)
  }



  return (
    <main className="relative h-screen">
      {
        detail &&
        <div className="zoom__in fixed z-50 inset-0 py-10  bg-[#000000e0]">
          <button onClick={() => showMore()} className="btn absolute top-1 right-1 hover:cursor-pointer ">
            <Close />
          </button>

          <div className="image__container mx-auto w-2/5 border ">
            <img src={detail.image} alt={detail.name} className="mb-6" />

            <ul className="image__list flex justify-center basis-4 border  mx-auto">
              <li className="mr-2 w-1/4">
                <img src={detail.image} alt="Razy Three" />
              </li>
              <li className="mr-2 w-1/4">
                <img src={detail.image} alt="Razy Three" />
              </li>
            </ul>
          </div>



        </div>
      }
      <div className="bg-text text-[#ffffff0d] text-[20vw] font-bold tracking-tighter italic absolute inset-0 flex justify-center items-center">
        <p>
          {detail && detail.brand}

        </p>
      </div>

      <button onClick={() => showMore()} className="btn absolute left-[50%] bottom-2 hover:cursor-pointer z-10">
        <ToBottom />
      </button>

      {/* bike showcase */}
      <Overview setDetail={setDetail} detail={detail} />

      {/* detail bike */}
      {specContainer &&
        detail &&
        <Details detail={detail} showMore={showMore} />
      }


    </main>
  );
}
