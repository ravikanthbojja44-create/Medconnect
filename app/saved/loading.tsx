import { Skeleton } from "@/components/ui/skeleton"

export default function SavedLoading() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Skeleton */}
      <div className="bg-primary p-4">
        <Skeleton className="h-6 w-32 mb-4 bg-white/20" />
        <Skeleton className="h-10 w-full bg-white/20" />
      </div>

      {/* Tabs Skeleton */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
          <Skeleton className="h-10 rounded-md" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex space-x-3">
                <Skeleton className="w-16 h-16 rounded-lg" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <div className="flex-1">
                      <Skeleton className="h-4 w-3/4 mb-1" />
                      <Skeleton className="h-3 w-1/2 mb-1" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                    <Skeleton className="h-8 w-8 rounded" />
                  </div>
                  <div className="flex gap-2 mb-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-8 flex-1" />
                    <Skeleton className="h-8 flex-1" />
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
