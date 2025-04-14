/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface HeroProps {
    onLoading?: Boolean;
    onChange?: (query: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onLoading, onChange }) => {
    return (
        <>
            <section className="bg-[#00577e] overflow-hidden">
                <div className="relative pt-18 pb-18">

                    <img className="hidden md:block absolute top-0 -left-10 mt-28 w-24 sm:w-32 lg:w-48 xl:w-80 h-64 sm:h-96 object-cover rounded-3xl blur-[1px]" src="https://www.focus2move.com/wp-content/uploads/2025/01/Volkswagen-Tiguan-2024-1280-1d58b6625615e0decdb3ef3ea10e945376-1068x801.jpg" alt="" />
                    <img className="hidden md:block absolute top-0 -right-10 mt-20 z-[5] w-24 sm:w-32 lg:w-48 xl:w-80 rounded-3xl blur-[1px]" src="https://www.focus2move.com/wp-content/uploads/2018/10/Toyota-Hilux_Special_Edition-2019.jpg" alt="" />
                    <img className="hidden md:block absolute top-56 -right-20 z-[2] mt-20 w-24 sm:w-32 lg:w-48 xl:w-80 rounded-3xl blur-[1px]" src="https://www.focus2move.com/wp-content/uploads/2025/01/Volkswagen-Polo_GTI_Edition_25-2023-1280-8e5020a05dee3a92be1062a480683752c0-1068x801.jpg" alt="" />

                    <div className="py-10 sm:py-24 mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="max-w-lg xl:max-w-xl mx-auto mb-8 sm:mb-12 lg:mb-0 text-center">
                            <div className="flex mb-4 sm:mb-6 items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                                    <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
                                </svg><span className="ml-2 text-sm font-medium text-gray-200">Powering Tomorrow's Dreams</span>
                            </div>

                            <h1 className="font-bold text-5xl lg:text-4xl xl:text-6xl tracking-tight mb-6 sm:mb-8 text-gray-100">
                                Buy & Sell On #1 Marketplace for Cars in Africa
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 text-gray-100">
                                Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <a className="inline-flex py-3 px-5 sm:py-4 sm:px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-sm sm:text-lg font-medium text-white hover:text-primary border border-teal-900 hover:border-primary bg-teal-900 hover:bg-white rounded-full transition duration-200" href="/postcar">Become Seller</a>
                                <a className="inline-flex py-3 px-5 sm:py-4 sm:px-6 items-center justify-center text-sm sm:text-lg font-medium bg-white text-black hover:text-slate-800 border border-white hover:bg-white rounded-full transition duration-200" href="/listings">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
