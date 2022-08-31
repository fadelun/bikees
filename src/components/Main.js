import React, { useState } from "react";

import { motion } from "framer-motion"

import { ReactComponent as ToBottom } from "../image/to-bottom.svg";

import { ReactComponent as Close } from "../image/close.svg";
import Overview from "./main/Overview";
import Details from "./main/Details";



export default function Main() {
  const [specContainer, setSpecContainer] = useState(false)
  const [detail, setDetail] = useState()
  const [modal, setModal] = useState()



  const showMore = () => {
    setSpecContainer(!specContainer)

  }

  const handleModal = () => {
    setModal(!modal)
  }



  return (
    <main className="relative h-screen">
      {
        modal && detail &&
        <div className="zoom__in fixed z-50 inset-0 py-10  bg-primary">
          <button onClick={handleModal} className="btn absolute top-1 right-1 hover:cursor-pointer ">
            <Close />
          </button>

          <div className="image__container mx-auto w-3/6 ">
            <img src={detail.image} alt={detail.name} className="mb-6" />
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


      <Details detail={detail} showMore={showMore} handleModal={handleModal} specContainer={specContainer} />



    </main>
  );
}
