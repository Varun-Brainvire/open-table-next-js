import Link from "next/link";
import React from "react";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Title from "../components/Title";
import Ratings from "../components/Ratings";
import Description from "../components/Description";
import Images from "../components/Images";
import Reviews from "../components/Reviews";
import ReservationCard from "../components/ReservationCard";
import NavBar from "../../components/NavBar";
import supabase from '../../supabaseClient'

const RestaurantDetails = async (slug:any) => {

  const fetchData: any = await supabase
    .from("restaurants")
    .select(`* , cuisine(*), location(*)`)
    .eq("slug", `${slug.params.slug}`);

    // console.log(fetchData.data,"fetchData.data");
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        
        <NavBar />
        {/* NAVBAR */} {/* HEADER */}
        <RestaurantHeader />
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title title={fetchData.data[0].name}/>
            <Ratings  />
            <Description desc={fetchData.data[0].description}/>
            <Images images={fetchData.data[0].images} />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetails;
