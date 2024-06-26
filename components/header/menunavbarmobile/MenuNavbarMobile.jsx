import React, { useRef, useEffect, forwardRef, useCallback } from "react"

const MenuNavbarMobile = forwardRef(({ showMenu, setShowMenu }, ref) => {
  const menuNavbarRef = useRef(null)

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false)
      }
    },
    [ref, setShowMenu]
  )

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <nav
      className={`absolute top-[3.9rem] bottom-0 left-0 w-10/12 h-screen ps-4 bg-primary/95 backdrop-blur-sm duration-300 ${
        showMenu ? `translate-x-0 duration-300` : `-translate-x-full `
      }`}
      ref={menuNavbarRef}>
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
})

MenuNavbarMobile.displayName = "MenuNavbarMobile"

export default MenuNavbarMobile
