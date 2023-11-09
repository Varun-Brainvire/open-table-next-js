import Link from 'next/link'
import React from 'react'
import LoginModal from './LoginModal'

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            {" "}
            OpenTable{" "}
          </Link>
          <div>
            <div className="flex">
              
              <LoginModal isSignIn={true}/>
              <LoginModal isSignIn={false}/>
              {/* <button className="border p-1 px-4 rounded">Sign up</button> */}
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
