import Image from "next/image"
import React from "react"
import Link from "next/link"

const InfoMovie = async ({ detailDataMovie }) => {
  const durationHoursMovie = Math.floor(detailDataMovie?.runtime / 60)
  const durationMinutesMovie = detailDataMovie?.runtime % 60

  // IF MOVIE ORIGINAL_TITLE AND IF TV NAME
  // IF MOVIE RELEASE_DATE AND IF TV FIRST_AIR_DATE

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 pt-28 lg:pt-0 lg:transform lg:translate-y-7 px-5 lg:px-10 flex flex-col gap-y-10 lg:gap-y-0 lg:grid lg:grid-cols-[max-content_1fr] gap-x-10 items-center z-40">
        <div className="relative w-[90%] lg:w-[300px] h-[80vh] lg:h-[80%] rounded-xl overflow-hidden">
          <Image
            alt="poster img"
            src={`https://image.tmdb.org/t/p/w500/${detailDataMovie?.poster_path}`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col gap-y-5 ">
          {/* FOR TITLE INFO MOVIE */}
          <div className="">
            <div className="">
              <h5 className="font-bold text-4xl text-white">
                {"original_title" in detailDataMovie
                  ? detailDataMovie.original_title
                  : detailDataMovie.name}
                <span className="font-normal text-[#d8e2f2]">
                  ({detailDataMovie.release_date?.slice(0, 4)})
                </span>
              </h5>
            </div>
            <div className="flex lg:gap-x-3">
              <span className="text-white">
                {detailDataMovie?.release_date}
                {detailDataMovie?.origin_country.map((data, i) => {
                  return <span key={i}>({data})</span>
                })}
              </span>
              <ul className="flex">
                {detailDataMovie.genres.map((data, i) => {
                  return (
                    <Link href={"/"} key={i}>
                      <li className="text-white">{data.name}</li>
                    </Link>
                  )
                })}
                <li className="text-white lg:ms-3">
                  {"runtime" in detailDataMovie && (
                    <span>
                      {durationHoursMovie} h{" "}
                      <span>{durationMinutesMovie}m</span>
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* FOR TAG MOVIE AND OVERVIEW */}
          <div className="flex flex-col gap-y-2">
            <h5 className="italic text-[#b7cbea] text-lg">
              {detailDataMovie?.tagline}
            </h5>
            <div className="">
              <h5 className="text-white text-xl">Overview</h5>
              <p className="text-white">{detailDataMovie.overview}</p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-600 lg:bg-gradient-to-r from-blue-600 from-80% opacity-85 z-30"></div>
      <Image
        alt="backdroppath image"
        src={`https://image.tmdb.org/t/p/original/${detailDataMovie?.backdrop_path}`}
        fill
        objectFit="cover"
        objectPosition="top"
      />
    </section>
  )
}

export default InfoMovie
