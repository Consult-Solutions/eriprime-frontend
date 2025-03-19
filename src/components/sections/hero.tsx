/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import FetchLoader from '../loaders/fetching-loader.tsx';

interface HeroProps {
    onLoading?: Boolean;
    onChange?: (query: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onLoading, onChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onChange) onChange({ query: searchQuery });
    };

    const handleSearch = () => {
        if (onChange) onChange({ query: searchQuery });
    };

    return (
        // <div className="relative bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        //     <div className="absolute inset-0 bg-black opacity-30"></div> {/* Black overlay */}

        //     <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 lg:min-h-[500px] lg:pb-24">
        //         <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        //             <div className="mx-auto max-w-xl text-center">
        //                 <h1 className="text-4xl font-bold sm:text-6xl">
        //                     <span className="bg-gradient-to-r from-[#3898c8] to-white bg-clip-text text-transparent "> Buy & Sell On #1 Marketplace for Cars in Africa </span>
        //                 </h1>

        //                 <p className="mt-5 text-sm text-semibold text-white sm:text-sm md:text-md">Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all.</p>

        //                 <div className="flex flex-col items-center justify-center mt-12">
        //                     <div className='border border-gray-300 rounded-full pl-4 pr-2 py-2 w-full text-sm focus:outline-none flex items-center bg-white'>
        //                         <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
        //                         <input
        //                             type="text"
        //                             value={searchQuery}
        //                             onChange={(e) => setSearchQuery(e.target.value)}
        //                             onKeyDown={handleKeyDown}
        //                             placeholder="Search your desired Cars..."
        //                             className="border-none font-bold outline-none focus:border-none focus:outline-none ml-3 bg-white w-full h-full text-slate-700"
        //                         />
        //                         <div className='hidden md:block'>
        //                             {onLoading && <FetchLoader />}

        //                             {!onLoading && <button onClick={handleSearch} className="inline-flex h-11 w-full items-center justify-center text-sm ml-10 rounded-full bg-primary px-5 font-medium tracking-wide text-white shadow-none outline-none transition duration-200 hover:bg-primary focus:ring sm:w-auto">
        //                                 <div className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m22 22-2-2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
        //                                 <div className='capitalize'>Search</div>
        //                             </button>}
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className='hidden md:block'>
        //                     <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 px-20 text-left sm:grid-cols-3 sm:px-0">
        //                         <div className="flex items-center">
        //                             <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                                 <path d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                                 <path d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z" fill="#0B1715" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                                 <path d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z" fill="#0B1715" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                             </svg>
        //                             <p className="ml-3 text-sm text-white">Over 12,000 Trusted Agencies</p>
        //                         </div>

        //                         <div className="flex items-center">
        //                             <svg className="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                                 <path d="M7 12.6667L9.25 15L16 8" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                             </svg>
        //                             <p className="ml-3 text-sm text-white">No yearly charges, maximum limits</p>
        //                         </div>

        //                         <div className="flex items-center">
        //                             <svg className="flex-shrink-0" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                                 <path d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                                 <path d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                                 <path d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7" stroke="#28CC9D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        //                             </svg>
        //                             <p className="ml-3 text-sm text-white">Secured & safe online Guidance</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>

        <>
            <section className="bg-white overflow-hidden">
                <div className="relative pt-18">
                    <img className="hidden md:block absolute top-0 -left-10 mt-28 w-24 sm:w-32 lg:w-48 xl:w-80 h-64 sm:h-96 object-cover rounded-3xl blur-[1px]" src="https://www.focus2move.com/wp-content/uploads/2025/01/Volkswagen-Tiguan-2024-1280-1d58b6625615e0decdb3ef3ea10e945376-1068x801.jpg" alt="" />
                    <img className="hidden md:block absolute top-0 -right-10 mt-20 z-[5] w-24 sm:w-32 lg:w-48 xl:w-80 rounded-3xl blur-[1px]" src="https://www.focus2move.com/wp-content/uploads/2018/10/Toyota-Hilux_Special_Edition-2019.jpg" alt="" />
                    <img className="hidden md:block absolute top-56 -right-20 z-[2] mt-20 w-24 sm:w-32 lg:w-48 xl:w-80 rounded-3xl blur-[1px]" src="https://www.focus2move.com/wp-content/uploads/2025/01/Volkswagen-Polo_GTI_Edition_25-2023-1280-8e5020a05dee3a92be1062a480683752c0-1068x801.jpg" alt="" />

                    <div className="py-10 sm:py-20 mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="max-w-lg xl:max-w-xl mx-auto mb-8 sm:mb-12 lg:mb-0 text-center">
                            <div className="flex mb-4 sm:mb-6 items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="12" rx="2" fill="#022C22"></rect>
                                    <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
                                </svg><span className="ml-2 text-sm font-medium">Powering Tomorrow</span>
                            </div>

                            <h1 className="font-bold text-5xl lg:text-4xl xl:text-6xl tracking-tight mb-6 sm:mb-8">
                                Buy & Sell On #1 Marketplace for Cars in Africa
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-10">
                                Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center">
                                <a className="inline-flex py-3 px-5 sm:py-4 sm:px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-sm sm:text-lg font-medium text-white hover:text-white border border-teal-900 hover:border-primary bg-teal-900 hover:bg-primary rounded-full transition duration-200" href="/postcar">Become Seller</a>
                                <a className="inline-flex py-3 px-5 sm:py-4 sm:px-6 items-center justify-center text-sm sm:text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="/listings">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-end relative">
                    <div className="w-1/2 sm:w-1/3 lg:w-auto px-2 sm:px-4 absolute -bottom-5">
                        <img className="block h-24 sm:h-32 lg:h-48 blur-[1px]" src="/images/headers/header-4-bottom-lleft.png" alt="" />
                    </div>
                    <div className="w-1/2 sm:w-2/3 lg:w-auto ml-auto px-2 sm:px-4">
                        <img className="block w-3/4 sm:w-1/2 md:w-3/4 lg:w-80 ml-auto rounded-3xl blur-[1px]" src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full py-16 sm:py-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
                </div>
            </section>
        </>
    );
};

export default Hero;
