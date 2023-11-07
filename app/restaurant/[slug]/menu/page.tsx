import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import NavBar from '../../../components/NavBar'
import RestaurantHeader from '../../components/RestaurantHeader'
import RestaurantNavBar from '../../components/RestaurantNavBar'
import RestaurantMenu from '../../components/RestaurantMenu'

const MenuPage = () => {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <NavBar />
    {/* NAVBAR */} {/* HEADER */}
    <RestaurantHeader />
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <RestaurantMenu />
        {/* MENU */}
      </div>
    </div>
    {/* DESCRIPTION PORTION */}
  </main>
</main>

    </div>
  )
}

export default MenuPage
