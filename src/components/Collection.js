import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import bikes from "../source/bikes";

function Collection() {
    const [bikeList, setbikeList] = useState()

    useEffect(() => {
        setbikeList(bikes)
        console.log(bikeList)
    })


    return (
        <main className="relative h-screen ">
            <div className='container mx-auto pt-20  '>
                <ul className='flex flex-wrap flex-row'>
                    {bikes && bikes.map((item, i) => {
                        return <Link key={i + 1} to={`/${i + 1}`} className='border border-blue-800 w-36 mb-4 mx-2 rounded-md'>
                            <img src={item.image[0]} alt={item.name - item.brand} />

                        </Link>
                    })}


                </ul>
            </div>
        </main>
    )
}

export default Collection