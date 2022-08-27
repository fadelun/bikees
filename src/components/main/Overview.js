import React from 'react';
import bikes from "../../source/bikes";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
// import { ReactComponent as ToRight } from "../image/to-right.svg";
// import { ReactComponent as ToLeft } from "../image/to-left.svg";
// import { ReactComponent as ToBottom } from "../image/to-bottom.svg";

function Overview() {
    return (
        // <>
        //     {bikes && bikes.map(bike => {
        //         console.log(bike)
        //     })}
        // </>
        <div className="overview__bike container content mx-auto h-screen pt-20 ">
            <Swiper navigation={true} modules={[Navigation]} className="">
                {bikes && bikes.map((bike, i) => {

                    return <SwiperSlide key={i}>
                        <div className={`bike-${i}`}>
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



                        </div>
                    </SwiperSlide>


                })}
            </Swiper>
        </div>

    )
}

export default Overview;