import Link from 'next/link'
import React from 'react'

interface Restaurant {
  name:string
  main_image:string
  cuisine:string
  slug:string
}

const RestaurantCard = (props:any) => {
  // console.log(props,"props in RestaurantCard")
  return (
    <>
        <Link href={`/restaurant/${props.data.slug}`}>
    <div className="border-b flex pb-5">
          <img
            src={props.data.main_image}
            alt=""
            className="w-44 rounded"
          />
          <div className="pl-5">
            <h2 className="text-3xl">{props.data.name}</h2>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2 text-sm">Awesome</p>
            </div>
            <div className="mb-9">
              <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">{props.data.cuisine.name}</p>
                <p className="mr-4">{props.data.slug}</p>
              </div>
            </div>
            <div className="text-red-600">
              <a href="">View more information</a>
            </div>
          </div>
        </div>
          </Link>
        </>
  )
}

export default RestaurantCard
