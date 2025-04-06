import React from "react";
import { Link } from "react-router-dom";
import CarCard from "../cards/card.tsx";
import CarCardListingSkeleton from "../cards/card-listing-skeleton.tsx";

interface ShortListingsProps {
    isLoading: boolean;
    cars: any;
    params: any;
    children: React.ReactNode;
}

const ShortListings: React.FC<ShortListingsProps> = ({ children, isLoading, cars, params }) => {
    return (
        <section className="mb-5 py-12">
            <div className="text-left mb-10">
                {children}
            </div>

            {/* Skeleton */}
            {isLoading && <CarCardListingSkeleton numberOfCards={params.limit} />}

            {cars.length === 0 && !isLoading && <div className="text-center bg-white border border-gray-200 rounded-xl py-10 z-10 text-gray-500 flex flex-col items-center justify-center">
                <div>
                    <img src="/images/svgs/empty-dealer.svg" alt="empty list" className="w-48 sm:w-64 md:w-80 lg:w-96" />
                    <span className="mt-5 font-bold text-lg sm:text-xl">No Cars Found</span>
                </div>
            </div>}

            {/* Car Postings */}
            {!isLoading && <div className='mt-10'>
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {cars.map((item, index) => (
                        <CarCard key={index} car={item} />
                    ))}
                </div>
            </div>}

            <div className="flex justify-center mt-10 sm:mt-20">
                <Link to={'/listings'} className="px-4 py-2 sm:px-6 sm:py-2 bg-primary text-white rounded-full text-sm sm:text-md flex items-center">
                    <span>View our Listings</span>
                    <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                </Link>
            </div>
        </section>
    );
}

export default ShortListings;