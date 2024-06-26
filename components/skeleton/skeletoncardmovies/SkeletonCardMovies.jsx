import React from "react"

const SkeletonCardMovies = () => {
  return (
    <div className="flex gap-x-3 px-5 lg:px-10">
      {Array.from({ length: 20 }).map((_, i) => {
        return (
          <div
            className="flex-[0_0_auto] w-44   h-max mb-5 flex flex-col gap-y-2 overflow-hidden rounded-lg shadow-lg"
            key={i}>
            <div className="relative w-full h-64 bg-gray-300 animate-pulse"></div>
            <div className="flex flex-col gap-y-2 px-2 pb-3">
              <div className="bg-gray-300 w-full h-2 animate-pulse"></div>
              <div className="bg-gray-300 w-full h-2 animate-pulse"></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SkeletonCardMovies
