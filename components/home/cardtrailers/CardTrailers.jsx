import React from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa6"

const CardTrailers = ({ data, imageMovies }) => {
  return (
    <div className="flex-[0_0_auto] flex flex-col gap-y-3 items-center  w-72 hover:cursor-pointer ">
      <div className="w-full relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${imageMovies}`}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "15px",
          }}
          alt="img-trailers"
        />
        <FaPlay className="absolute z-40 top-16 bottom-16 left-32 text-white text-5xl opacity-80" />
      </div>
      <h5 className="font-semibold">{data?.title}</h5>
    </div>
  )
}

export default CardTrailers
