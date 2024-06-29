import CastMovies from "@/components/moviedetails/CastMovies"
import InfoMovie from "@/components/moviedetails/InfoMovie"
import SkeletonCastMovie from "@/components/skeleton/skeletoncastmovie/SkeletonCastMovie"
import SkeletonInfoMovie from "@/components/skeleton/skeletoninfomovie/SkeletonInfoMovie"
import { Suspense } from "react"

async function getDetailsMovie(id, category) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/${category}/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUpIi_EZn1itc6ta70CZt8syN-qEgv8Y8TIW65mCXvs",
      },
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("somthing went wrong")
    }
    return res.json()
  } catch (error) {
    console.log("Error" + error)
  }
}

async function getCastMovie(id, category) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${category}/${id}/credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzNDU1ODM0NmRmYTM5YjU3NWExZTdhYzExMTk5NSIsInN1YiI6IjYyYmFhZTAzOGI5NTllMDA2MmIzNDg2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUpIi_EZn1itc6ta70CZt8syN-qEgv8Y8TIW65mCXvs",
        },
        cache: "no-store",
      }
    )
    if (!res.ok) {
      throw new Error("somthing went wrong")
    }
    return res.json()
  } catch (error) {
    console.log("Error" + error)
  }
}

export default async function MovieDetails({ params }) {
  const { categorydetails, id } = params

  const detailsMovieData = getDetailsMovie(id, categorydetails)
  const castMovieData = getCastMovie(id, categorydetails)

  const [detailMovie, castMovie] = await Promise.all([
    detailsMovieData,
    castMovieData,
  ])

  return (
    <main className="w-full">
      <section className="w-full h-screen relative">
        <Suspense fallback={<SkeletonInfoMovie />}>
          <InfoMovie detailDataMovie={detailMovie} />
        </Suspense>
      </section>
      <section className="w-full mt-8">
        <Suspense fallback={<SkeletonCastMovie />}>
          <CastMovies castDataMovie={castMovie} />
        </Suspense>
      </section>
    </main>
  )
}
