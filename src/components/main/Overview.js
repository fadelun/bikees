import React from 'react';

import bikes from "../../source/bikes";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation, Thumbs, Keyboard } from "swiper";



function Overview({ setDetail, detail }) {

    return (
        <div>
            <Swiper navigation={true} keyboard={true} spaceBetween={50} modules={[Navigation, Thumbs, Keyboard]} className="">
                {bikes && bikes.map((bike, i) => {

                    return (
                        <SwiperSlide key={i + 1} >
                            {({ isActive }) =>
                                <div className={`bike-${i} overview__bike container content mx-auto h-screen pt-20 flex items-center md:block`} >
                                    {
                                        (isActive) ? setDetail(bike) : ''
                                    }


                                    <div className="content relative ">
                                        <h1 className="uppercase text-center md:text-left">{bike.name}</h1>


                                        <div className="image-container w-auto md:w-2/4 mx-auto">
                                            <img src={bike.image[0]} alt={bike.name} />

                                            {/* {comming soon} */}
                                            {/* <div className="button__show__spec hover:cursor-pointer border border-blue-400 mx-auto absolute top-[3%] bottom-[20%] left-[30%] right-[30%] opacity-0 hover:opacity-30"></div> */}
                                        </div>

                                        {/* cooming soon */}
                                        {/* <ul>
                                <li className="w-20 h-14 bg-white absolute left-20 top-0"></li>
                                <li className="w-20 h-14 bg-white absolute right-20 top-0"></li>
                                <li className="w-20 h-14 bg-white absolute left-20 bottom-0"></li>
                                <li className="w-20 h-14 bg-white absolute right-20 bottom-0"></li>
                            </ul> */}

                                    </div>



                                </div>
                            }
                        </SwiperSlide>

                    )


                })}
            </Swiper>


        </div>



    )
}

export default Overview;