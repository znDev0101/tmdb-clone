import React from "react"
import CardCastProfile from "./cardcastprofile/CardCastProfile"

const CastMovies = ({ castDataMovie }) => {
  return (
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
  )
}

export default CastMovies
