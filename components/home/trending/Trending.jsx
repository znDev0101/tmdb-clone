"use client"

import Loading from "@/app/loading"
import CardMovies from "@/components/card/CardMovies"
import SkeletonCardMovies from "@/components/skeleton/SkeletonCardMovies"
import React, { useState, useEffect, useRef, Suspense } from "react"

const Trending = () => {
  const [selectTrending, setSelectTrending] = useState("day")
  const [dataMoviesTrending, setDataMoviesTrending] = useState([])
  const cardContainerRef = useRef(null)

  const getMoviesTrending = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUpIi_EZn1itc6ta70CZt8syN-qEgv8Y8TIW65mCXvs",
      },
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/${selectTrending}?language=en-US`,
      options
    )

    const data = await response.json()

    setDataMoviesTrending(data.results)
  }

  useEffect(() => {
    getMoviesTrending()
    cardContainerRef.current.scrollTo({ left: 0 })
  }, [selectTrending])

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-5 items-center px-10">
        <h1 className="font-semibold text-2xl">Trending</h1>
        <div className="flex border-2 border-blue-900 rounded-full overflow-hidden">
          <div
            className={`cursor-pointer py-1 px-5 rounded-full  ${
              selectTrending === "day" && `bg-[#032541] text-white`
            }`}
            onClick={() => {
              selectTrending !== "day" && setSelectTrending("day")
            }}>
            <h5>Today</h5>
          </div>
          <div
            className={`cursor-pointer py-1 px-5 rounded-full  ${
              selectTrending === "week" && `bg-[#032541] text-white`
            }`}
            onClick={() => {
              selectTrending !== "week" && setSelectTrending("week")
            }}>
            <h5>This Week</h5>
          </div>
        </div>
      </div>
      {/* CARD CONTAINER */}
      <div
        className="flex  overflow-x-auto gap-x-3 px-10"
        ref={cardContainerRef}>
        {dataMoviesTrending.map((data) => {
          return <CardMovies data={data} />
        })}
      </div>
    </div>
  )
}

export default Trending
