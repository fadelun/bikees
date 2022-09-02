import React, { useState, useEffect } from "react";
import { ReactComponent as ToBottom } from "../image/to-bottom.svg";


import Overview from "./main/Overview";
import Details from "./main/Details";



export default function Main() {
  // specContainer => menampilkan page spec, detail => wadah untuk mengisi data sepeda
  // showImg => menampilkan gambar besar di page spec

  const [specContainer, setSpecContainer] = useState(false)
  const [detail, setDetail] = useState()
  const [showImg, setShowImg] = useState();




  useEffect(() => {
    if (!specContainer) setShowImg()
  }, [specContainer, showImg])

  const showMore = () => {
    setSpecContainer(!specContainer)

  }




  return (
    <main className="relative h-screen">

      <div className="bg-text text-[#ffffff0d] text-[20vw] font-bold tracking-tighter italic absolute inset-0 hidden sm:flex justify-center items-center">
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


      <Details detail={detail} showMore={showMore} showImg={showImg} setShowImg={setShowImg} specContainer={specContainer} />



    </main>
  );
}
