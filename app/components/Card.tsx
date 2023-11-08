import Link from 'next/link'
import React from 'react'
import supabase from '../supabaseClient'

const Card = async(props:any) => {

  console.log(props.response,"props.response")

  const fetchData: any = await supabase
    .from("restaurants")
    .select(`* , cuisine(*), location(*)`)
    .eq("slug", `${props.response.slug}`);

  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <Link href={`/restaurant/${props.response.slug}`}>
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                  alt=""
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">{props.response.name}</h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3"></p>
                    <p className="mr-3">{props.response.price}</p>
                    <p>{props.response.location}</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
              </Link>
            </div>
  )
}

export default Card
