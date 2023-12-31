import Link from 'next/link'
import React from 'react'

const RestaurantNavBar = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
          <Link href="/restaurant/asdfrrbr/" className="mr-7"> Overview </Link>
          <Link href="/restaurant/asdfrrbr/menu" className="mr-7"> Menu </Link>
        </nav>
  )
}

export default RestaurantNavBar
