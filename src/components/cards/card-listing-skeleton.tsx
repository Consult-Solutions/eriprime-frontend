import React from 'react';
import CarCardSkeleton from './card-skeleton.tsx';

interface CarCardListingSkeletonProps {
  numberOfCards: number;
  numberOfColumns?: number;
}

const CarCardListingSkeleton: React.FC<CarCardListingSkeletonProps> = ({ numberOfCards, numberOfColumns = 4 }) => {
  return (
    <div className={`grid gap-5 sm:max-w-sm sm:mx-auto lg:max-w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${numberOfColumns}`}>
      {Array.from({ length: numberOfCards }).map((_, index) => (
        <CarCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CarCardListingSkeleton;