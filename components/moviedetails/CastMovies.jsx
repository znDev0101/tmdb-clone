import React from "react"
import Image from "next/image"
import CardCastProfile from "./cardcastprofile/CardCastProfile"

const CastMovies = ({ castDataMovie }) => {
  const ImgPath = "https://image.tmdb.org/t/p/original"

  return (
    <section className="w-full mt-8">
      <div className="flex flex-col gap-y-5">
        <h1 className="ps-10 font-bold">Top Billed Cast</h1>
        <div className="flex mb-10 px-10 gap-x-4 overflow-x-auto">
          {/* CARD STYLE */}
          {castDataMovie.cast.slice(0, 9).map((data, index) => {
            return <CardCastProfile data={data} key={index} />
          })}

          {/* CARD STYLE */}
        </div>
      </div>
    </section>
  )
}

export default CastMovies
