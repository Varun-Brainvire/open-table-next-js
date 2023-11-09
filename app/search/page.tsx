import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import SearchHeader from "./components/SearchHeader";
import SideBar from "./components/SideBar";
import RestaurantCard from "./components/RestaurantCard";
import supabase from '../supabaseClient'

interface Restaurant {
  name:string
  main_image:string
  cuisine:string
  slug:string
}

const Searchpage = async ({searchParams}:any) => {
  // console.log(searchParams.city,"Props inside search")

  // const fetchData: any = await supabase
  //   .from("restaurants")
  //   .select(`* , cuisine(*), location(*)`)
  //   .eq("city", `${searchParams.city}`);
  //   console.log(fetchData)

    const locationId: any = await supabase
    .from("location")
    .select("id")
    .eq("name", `${searchParams.city.toUpperCase()}`);

    // console.log(locationId,"Location ID")
    
    let fetchData:any
    if (locationId.data.length > 0) {
      fetchData = await supabase
        .from("restaurants")
        .select(`* , cuisine(*)`)
        .eq("location_id", `${locationId.data[0].id}`);
    } else {
      fetchData = { data: [] };
    }

    const location:any = await supabase
    .from("location")
    .select("name")
    console.log(location.data,"location")

    const cuisine:any = await supabase
    .from("cuisine")
    .select("name")
    console.log(cuisine.data,"cuisine")

    // console.log(fetchData.data,"Fetch Data in search")



  return (
    <div>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <NavBar />
          <SearchHeader />
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SideBar location={location} cuisine={cuisine}/>
            <div className="w-5/6">
              {fetchData.data.length ?
              fetchData.data?.map((item:any) => {
                // {console.log(item,"item")}
                return(
                  <RestaurantCard data={item}/>
                )
              }) : <p>Sorry No Data Found</p>}
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default Searchpage;
