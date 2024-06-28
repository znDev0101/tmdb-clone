import React from "react"
import Image from "next/image"
import tmdbfooter from "../../public/tmdb-footer.svg"

const Footer = () => {
  return (
    <footer className="w-full bg-[#032541] py-14">
      <div className=" w-32 mx-auto ">
        <Image
          alt="logotmdb footer"
          src={tmdbfooter}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
