import React from "react"

const MenuNavbarMobile = ({ showMenu }) => {
  return (
    <nav
      className={`absolute top-[3.9rem] bottom-0 left-0 w-10/12 h-screen ps-4 bg-primary/95 backdrop-blur-sm duration-300 ${
        showMenu ? `translate-x-0 duration-300` : `-translate-x-full `
      }`}>
      <ul className="text-white mt-3 flex flex-col gap-y-3 text-2xl">
        <li>Movies</li>
        <li>TV Shows</li>
        <li>People</li>
      </ul>
      <ul className="text-gray-400 mt-6 flex flex-col gap-y-3 text-2xl">
        <li>Api</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default MenuNavbarMobile
