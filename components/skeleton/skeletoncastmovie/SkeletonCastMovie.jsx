import React from "react"

const SkeletonCastMovie = () => {
  return (
    <div className="w-full flex gap-x-4 lg:px-10 lg:mb-10">
      {Array.from({ length: 8 }).map((_, i) => {
        return (
          <div className="flex flex-col gap-y-3" key={i}>
            <div className="w-40 h-48 bg-gray-300 animate-pulse"></div>
            <div className="w-full h-5 rounded-md bg-gray-300 animate-pulse"></div>
          </div>
        )
      })}
    </div>
  )
}

export default SkeletonCastMovie
