export const Skeleton = () => {
    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden">
        <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200 via-gray-300 to-transparent animate-shine"></div>
      </div>
    );
  };
  
