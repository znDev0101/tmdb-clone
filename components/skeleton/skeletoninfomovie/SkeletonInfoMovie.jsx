import React from "react"

const SkeletonInfoMovie = () => {
  return (
    <div className="w-full flex gap-x-20 pt-32">
      <div className="lg:w-80 lg:h-96 rounded-md bg-gray-300 animate-pulse ms-10"></div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-3">
          <div className="w-60 h-5 bg-gray-300 animate-pulse rounded-md "></div>
          <div className="w-60 h-5 bg-gray-300 animate-pulse rounded-md "></div>
          <div className="w-60 h-5 bg-gray-300 animate-pulse rounded-md "></div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="w-48 h-5 bg-gray-300 animate-pulse rounded-md "></div>
          <div className="w-48 h-5 bg-gray-300 animate-pulse rounded-md "></div>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="w-48 h-5 bg-gray-300 animate-pulse rounded-md "></div>
          <div className="w-96 h-5 bg-gray-300 animate-pulse rounded-md "></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonInfoMovie
