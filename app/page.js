import Trending from "@/components/home/trending/Trending"
import HeroSection from "@/components/home/heroSection/HeroSection"
import LatestTrailers from "@/components/home/latesttrailers/LatestTrailers"
import Popular from "@/components/home/popular/Popular"
import { Suspense } from "react"
import SkeletonCardMovies from "@/components/skeleton/SkeletonCardMovies"

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUpIi_EZn1itc6ta70CZt8syN-qEgv8Y8TIW65mCXvs",
  },
}

async function getMoviesImage() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular`, options)

  return res.json()
}

export default async function Home() {
  const movieImageData = await getMoviesImage()
  return (
    <main className=" min-h-screen pt-16 overflow-hidden">
      <section className="w-full">
        <HeroSection movieImageData={movieImageData} />
      </section>
      <section className="w-full py-5 lg:py-10">
        <Suspense fallback={<p className="text-4xl mt-10">Loading....</p>}>
          <Trending />
        </Suspense>
      </section>
      <LatestTrailers />
      <section className="w-full py-5 lg:py-10">
        <Popular />
      </section>
    </main>
  )
}
