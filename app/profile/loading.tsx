import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Skeleton */}
      <div className="bg-primary p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="w-16 h-16 rounded-full bg-white/20" />
          <div className="flex-1">
            <Skeleton className="h-5 w-32 mb-2 bg-white/20" />
            <Skeleton className="h-4 w-48 mb-1 bg-white/20" />
            <Skeleton className="h-3 w-24 bg-white/20" />
          </div>
          <Skeleton className="w-10 h-10 rounded bg-white/20" />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-4">
            <Skeleton className="h-6 w-6 mx-auto mb-2" />
            <Skeleton className="h-8 w-8 mx-auto mb-1" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
          <div className="border rounded-lg p-4">
            <Skeleton className="h-6 w-6 mx-auto mb-2" />
            <Skeleton className="h-8 w-8 mx-auto mb-1" />
            <Skeleton className="h-4 w-16 mx-auto" />
          </div>
        </div>

        {/* Cards Skeleton */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="border rounded-lg">
            <div className="p-4 border-b">
              <Skeleton className="h-5 w-32" />
            </div>
            <div className="p-4 space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
