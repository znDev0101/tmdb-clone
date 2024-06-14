"use client"

import React, { useState, useEffect } from "react"

import Link from "next/link"
import CardTrailers from "../cardtrailers/CardTrailers"

const selectOptionLatestTrailers = [
  { options: "Trending", value: "trending" },
  { options: "Popular", value: "popular" },
  { options: "On Tv", value: "now playing" },
  { options: "Up Coming", value: "up coming" },
]

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUpIi_EZn1itc6ta70CZt8syN-qEgv8Y8TIW65mCXvs",
  },
}

const LatestTrailers = () => {
  const [optionLatestTrailers, setOptionLatestTrailers] = useState("trending")

  const [dataLatestMovies, setDataLatestMovies] = useState([])

  const getMoviesTrending = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/week`,
        options
      )
      const data = await res.json()

      setDataLatestMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMoviesTrending()
  }, [])

  return (
    <section className="">
      <div className="flex px-4 lg:px-10 gap-x-5 items-center">
        <h1 className="font-semibold text-2xl text-nowrap">Latest Trailers</h1>
        <div
          name="movies-trending"
          className="flex gap-x-3 border border-gray-700 rounded-2xl"></div>
      </div>
      <div className="flex px-4 lg:px-10 gap-x-4 overflow-x-auto mt-7 ">
        {dataLatestMovies.map((data, i) => {
          return (
            <CardTrailers
              key={i}
              data={data}
              imageMovies={data?.backdrop_path}
            />
          )
        })}
      </div>
    </section>
  )
}

export default LatestTrailers
