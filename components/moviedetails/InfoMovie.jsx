import Image from "next/image"
import React from "react"

const InfoMovie = async ({ detailDataMovie }) => {
  return (
    <section className="w-full h-screen relative">
      <div className="w-[80%] h-[70%] ms-10 absolute grid grid-rows-2 lg:grid-cols-[300px_1fr] lg:grid-rows-1 items-center gap-x-10 top-36 lg:top-40 z-40">
        <div className="relative w-full h-full ">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${detailDataMovie?.poster_path}`}
            alt="poster-img"
            fill={true}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="">
            <h5 className=" text-white font-bold text-4xl">
              {detailDataMovie?.title || detailDataMovie?.name}
              <span className="text-[#e0d3cf]">
                (
                {detailDataMovie?.release_date?.slice(0, 4) ||
                  detailDataMovie?.first_air_date.slice(0, 4)}
                )
              </span>
            </h5>
            <div className="flex">
              <h6 className="text-white">
                {detailDataMovie?.release_date ||
                  detailDataMovie?.first_air_date}
                .
              </h6>
              {detailDataMovie.genres.map((data, i) => {
                return (
                  <div key={i}>
                    <h6 key={data.id} className="text-white ms-2">
                      {data.name}
                    </h6>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="">
            <h5 className="text-white">{detailDataMovie?.vote_average}</h5>
          </div>
          <div className="">
            <h5 className="italic text-[#bcb5b4] font-bold">
              {detailDataMovie?.tagline}
            </h5>
            <div className="mt-2">
              <h5 className="text-white text-xl">Overview</h5>
              <p className="text-white leading-5 mt-2">
                {detailDataMovie?.overview}
              </p>
            </div>
            <div className="flex items-center gap-x-28 mt-5">
              {detailDataMovie?.created_by?.map(({ name }, i) => {
                return (
                  <div className="" key={i}>
                    <h5 className="font-bold text-white">{name}</h5>
                    <span className="text-white">Creator</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 from-80% opacity-85 z-30"></div>
      <Image
        src={`https://image.tmdb.org/t/p/original/${detailDataMovie?.backdrop_path}`}
        fill
        objectFit="cover"
        objectPosition="top"
      />
    </section>
  )
}

export default InfoMovie
