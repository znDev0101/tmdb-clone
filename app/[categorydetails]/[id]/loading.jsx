import SkeletonCastMovie from "@/components/skeleton/skeletoncastmovie/SkeletonCastMovie"
import SkeletonInfoMovie from "@/components/skeleton/skeletoninfomovie/SkeletonInfoMovie"

export default function InfoMoviesLoading() {
  return (
    <main>
      <section>
        <SkeletonInfoMovie />
      </section>
      <section className="w-full mt-8">
        <SkeletonCastMovie />
      </section>
    </main>
  )
}
