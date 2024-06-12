import React from "react"
import Image from "next/image"
import Link from "next/link"

const CardCastProfile = ({ data }) => {
  return (
    <Link href={`person/${data.id}`}>
      <div className="w-40 flex-shrink-0 overflow-hidden  border border-gray-300 rounded-md my-2 pb-4">
        <div className="relative h-48">
          <Image
            alt="profile-cast"
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            fill
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col ps-2">
          <span className="font-bold">{data.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default CardCastProfile
