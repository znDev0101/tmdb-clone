import React from "react"
import Link from "next/link"
import Image from "next/image"

const CardMovies = ({ data }) => {
  return (
    <Link href={`${data.media_type}/${data.id}`}>
      <div className="flex-[0_0_auto] w-44  mb-3 pb-2  h-max border border-gray-400 flex flex-col gap-y-2 overflow-hidden rounded-lg shadow-lg hover:cursor-pointer">
        <div className="relative w-full h-64 ">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="Mountains"
            fill
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
        <div className="ps-2 ">
          <h5 className="text-wrap font-bold">
            {data?.hasOwnProperty("name") ? data?.name : data?.title}
          </h5>
          <h6>
            {data?.hasOwnProperty("first_air_date")
              ? data?.first_air_date
              : data?.release_date}
          </h6>
        </div>
      </div>
    </Link>
  )
}

export default CardMovies
