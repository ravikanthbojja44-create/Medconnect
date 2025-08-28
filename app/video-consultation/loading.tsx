import { Skeleton } from "@/components/ui/skeleton"

export default function VideoConsultationLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div>
              <Skeleton className="h-4 w-32 mb-1" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Main Video Area Skeleton */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-gray-900 relative">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-48 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Skeleton className="w-48 h-36 rounded-lg" />
            </div>
          </div>
          <div className="bg-gray-800 p-4">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="w-12 h-12 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="w-80 bg-card border-l border-border">
          <div className="p-4 border-b border-border">
            <Skeleton className="h-5 w-32 mb-3" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 p-4">
            <Skeleton className="h-5 w-24 mb-4" />
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="flex justify-start">
                  <Skeleton className="h-16 w-48 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
