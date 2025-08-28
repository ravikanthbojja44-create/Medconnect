import { Skeleton } from "@/components/ui/skeleton"

export default function MapLoading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Skeleton */}
      <div className="bg-primary p-4">
        <Skeleton className="h-6 w-32 mb-4 bg-white/20" />
        <Skeleton className="h-10 w-full mb-4 bg-white/20" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-16 bg-white/20" />
          <Skeleton className="h-8 w-20 bg-white/20" />
          <Skeleton className="h-8 w-16 bg-white/20" />
        </div>
      </div>

      {/* Map Skeleton */}
      <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-100 border-b flex items-center justify-center">
        <div className="text-center">
          <Skeleton className="h-12 w-12 rounded-full mx-auto mb-2" />
          <Skeleton className="h-4 w-32 mx-auto mb-1" />
          <Skeleton className="h-3 w-24 mx-auto" />
        </div>
      </div>

      {/* List Skeleton */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex space-x-3">
                <Skeleton className="w-16 h-16 rounded-lg" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-1/2 mb-2" />
                  <div className="flex gap-2 mb-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-12" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
