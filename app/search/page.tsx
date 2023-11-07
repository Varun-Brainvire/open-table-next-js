import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import SearchHeader from "./components/SearchHeader";
import SideBar from "./components/SideBar";
import RestaurantCard from "./components/RestaurantCard";

const Searchpage = () => {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          <NavBar />
          <SearchHeader />
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SideBar />
            <div className="w-5/6">
              <RestaurantCard />
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default Searchpage;
