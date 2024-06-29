import ImageHeroSkeleton from "@/components/skeleton/imageheroskeleton/ImageHeroSkeleton"
import SkeletonCardMovies from "@/components/skeleton/skeletoncardmovies/SkeletonCardMovies"

export default function Loading() {
  return (
    <main>
      <section className="w-full">
        <ImageHeroSkeleton />
      </section>
      <section>
        <SkeletonCardMovies />
      </section>
    </main>
  )
}
