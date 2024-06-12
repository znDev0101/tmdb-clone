import React from "react"

import Image from "next/image"

const HeroSection = ({ movieImageData }) => {
  let idRandom = Math.floor(Math.random() * (20 - 1 + 1)) + 1

  return (
    <div className="w-full h-80 px-4 lg:px-10 overflow-hidden relative">
      <div className="absolute w-[85vw] flex flex-col top-10 lg:top-20 bottom-20  z-40">
        <div className="text-white ">
          <h1 className=" font-bold text-5xl lg:text-6xl ">Welcome.</h1>
          <h2 className="text-3xl font-semibold mt-2">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
      </div>
      <div className="flex absolute bottom-14 lg:bottom-16 right-5 left-4 lg:right-14 lg:left-10 z-40">
        <input
          type="text"
          className="w-full rounded-full py-3 px-5 placeholder:text-gray-600 placeholder:text-lg"
          placeholder="Search for a movie, tv show, person..."
        />
        <button className="absolute bottom-0 top-0 right-0 font-bold bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-5">
          Search
        </button>
      </div>
      <div className="top-0 bottom-0 right-0 left-0 absolute bg-gradient-to-r from-blue-700 from-20% z-30 opacity-75"></div>
      <div className="top-0 bottom-0 right-0 left-0 absolute  bg-blue-700 opacity-20 z-30"></div>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movieImageData.results[idRandom]?.backdrop_path}`}
        alt="hero-img"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  )
}

export default HeroSection
