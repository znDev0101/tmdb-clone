"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { FaSearch } from "react-icons/fa"

const Header = () => {
  const [windowScrollY, setWindowScrollY] = useState(0)
  const [showNavbar, setshowNavbar] = useState(true)

  useEffect(() => {
    const getScrollY = () => {
      setWindowScrollY(window.scrollY)
      if (window.scrollY > 300) {
        setshowNavbar(false)

        if (window.scrollY < windowScrollY) {
          setshowNavbar(true)
        } else {
          setshowNavbar(false)
        }
      } else {
        setshowNavbar(true)
      }
    }

    window.addEventListener("scroll", getScrollY)
    return () => {
      removeEventListener("scroll", getScrollY)
    }
  }, [windowScrollY])

  return (
    <header
      className={`fixed ${
        showNavbar ? `top-0` : `-top-24`
      } w-full flex items-center justify-between  py-3 lg:py-5 px-5 lg:px-10 bg-primary z-50 duration-300`}>
      <nav className="flex gap-x-8">
        <div className="relative flex lg:hidden flex-col gap-y-1 w-5 h-5 ">
          <span className="w-full h-1 bg-white rounded-md"></span>
          <span className="w-full h-1 bg-white rounded-md"></span>
          <span className="w-full h-1 bg-white rounded-md"></span>
          <input
            type="checkbox"
            name="check-box"
            className="absolute top-0 bottom-0 left-0 right-0 opacity-0 z-50"
          />
        </div>
        <Link href={"/"}>
          <Image
            src={"/logotmdb.svg"}
            width={150}
            height={20}
            className=" object-contain hidden lg:block"
          />
        </Link>
        <ul className="hidden lg:flex gap-x-8">
          <li>
            <Link href={"/"} className="text-white font-semibold">
              Movies
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-white font-semibold">
              Tv Shows
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-white font-semibold">
              People
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-white font-semibold">
              More
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="block lg:hidden">
        <Image
          src={"/logotmdb2.svg"}
          width={55}
          height={35}
          style={{
            objectFit: "cover",
          }}
        />
      </nav>

      <nav className="flex gap-x-8">
        <FaSearch className="text-xl text-white" />
      </nav>
    </header>
  )
}

export default Header
