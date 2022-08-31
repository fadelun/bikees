import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as Close } from "../../image/close.svg";
import FormatNumber from "../../utils/FormatNumber";

function Details({ detail, showMore, handleModal, specContainer }) {
    const [showImg, setShowImg] = useState();

    useEffect(() => {
        console.log(showImg)
    }, [showImg])

    const handleThumbs = (item) => {
        setShowImg(item)
    }




    return (
        <AnimatePresence>
            {specContainer && detail &&
                <motion.div
                    key="showUp"
                    initial={{ y: "100%", opacity: 0.2 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0.2 }}


                    transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6
                    }}
                    className="spec__bike content text-white absolute bg-[#181818]  right-0 left-0 top-0 pt-16 z-20 " >
                    <button onClick={() => showMore()} className="btn absolute top-1 right-1 hover:cursor-pointer ">
                        <Close />
                    </button>


                    <div className="container mx-auto ">
                        <header className=" flex justify-between">


                            <div className="image__container  w-2/5 ">
                                <img src={showImg ? showImg : detail.image[0]} alt={detail.name} onClick={handleModal} className="hover:cursor-pointer" />
                                <ul className="image__list flex justify-center w-full gap-x-2">

                                    {
                                        detail.image.map(item => {
                                            return <li onClick={() => handleThumbs(item)} className="w-1/4 border border-transparent hover:cursor-pointer  hover:border-[#293BFF]">
                                                <img src={item} alt="Razy Three" />
                                            </li>
                                        })
                                    }

                                </ul>
                                {/* <ul className="image__list flex justify-center w-full gap-x-2">
                                    <li className="w-1/4 border border-transparent hover:cursor-pointer  hover:border-[#293BFF]">
                                        <img src={detail.image} alt="Razy Three" />
                                    </li>
                                    <li className="w-1/4 border border-transparent hover:cursor-pointer  hover:border-[#293BFF]">
                                        <img src={detail.image} alt="Razy Three " />
                                    </li>
                                    <li className="w-1/4 border border-transparent hover:cursor-pointer  hover:border-[#293BFF]">
                                        <img src={detail.image} alt="Razy Three" />
                                    </li>
                                    <li className="w-1/4 border border-transparent hover:cursor-pointer  hover:border-[#293BFF]">
                                        <img src={detail.image} alt="Razy Three " />
                                    </li>
                                </ul> */}
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
                                                <p className="basis-5/6">{`${item[1] ? item[1] : "-"}`}</p>
                                            </li>)
                                    })
                                }




                            </ul>
                        </main>

                    </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default Details