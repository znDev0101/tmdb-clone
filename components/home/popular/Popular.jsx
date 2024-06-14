"use client"

import React, { useState, useEffect, useRef, Suspense } from "react"
import CardMovies from "@/components/card/CardMovies"
import SkeletonCardMovies from "@/components/skeleton/SkeletonCardMovies"

const Popular = () => {
  const [selectPopular, setSelectPopular] = useState("movie")
  const [dataAllGenrePopular, setDataAllGenrePopular] = useState([])

  const cardContainerRef = useRef(null)

  const getAllDataPopular = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUpIi_EZn1itc6ta70CZt8syN-qEgv8Y8TIW65mCXvs",
      },
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/${selectPopular}/popular
`,
      options
    )

    const data = await response.json()

    setDataAllGenrePopular(data.results)
  }

  useEffect(() => {
    getAllDataPopular()
    cardContainerRef.current.scrollTo({ left: 0 })
  }, [selectPopular])

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-5 items-center px-5 lg:px-10">
        <h1 className="font-semibold text-2xl">Popular</h1>
        <div className="flex border-2 border-blue-900 rounded-full overflow-hidden">
          <div
            className={`cursor-pointer py-1 px-5 rounded-full  ${
              selectPopular === "movie" && `bg-[#032541] text-white`
            }`}
            onClick={() => {
              selectPopular !== "movie" && setSelectPopular("movie")
            }}>
            <h5>Movie</h5>
          </div>
          <div
            className={`cursor-pointer py-1 px-5 rounded-full  ${
              selectPopular === "tv" && `bg-[#032541] text-white`
            }`}
            onClick={() => {
              selectPopular !== "tv" && setSelectPopular("tv")
            }}>
            <h5>TV</h5>
          </div>
        </div>
      </div>
      {/* CARD CONTAINER */}
      <div
        className="flex  overflow-x-auto gap-x-3 px-5 lg:px-10"
        ref={cardContainerRef}>
        {dataAllGenrePopular.map((data, i) => {
          return (
            <CardMovies data={data} key={i} selectPopular={selectPopular} />
          )
        })}
      </div>
    </div>
  )
}

export default Popular
