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
        <section className="relative bg-gradient-to-br bg-white text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D5612AQHvAeUM5ZDkVQ/article-cover_image-shrink_720_1280/0/1720959677409?e=2147483647&v=beta&t=pNqbAbzMQLdFiKyx_5XZ-PaQdddozZio-zC0HUVU1jU)' }}></div>
            
            <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:pb-32 xl:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between md:px-10">
                    <div className="w-full sm:w-full md:w-3/5 mb-12 md:mb-0 bg-white rounded-3xl p-10">
                        <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
                            <div className="mb-6 max-w-xl">
                                <div>
                                    <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-100 px-3 py-1 border border-gray-200 text-sm font-semibold tracking-wider text-green-900">Get started now with free account</p>
                                </div>
                                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold text-slate-700 sm:text-5xl mt-5 leading-snug tracking-wide">
                                    Buy & Sell On <br /> #1 Marketplace for <span className="inline-block text-primary">Cars </span> in <span className="inline-block text-primary">Rwanda</span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all.
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
                                <div className='border border-gray-300 rounded-full pl-4 pr-2 py-2 w-full text-sm focus:outline-none flex items-center bg-white'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Search your desired car..."
                                        className="border-none font-bold outline-none focus:border-none focus:outline-none ml-3 bg-white w-full h-full text-slate-700"
                                    />
                                    <div className='hidden md:block'>
                                        {onLoading && <FetchLoader />}

                                        {!onLoading && <button onClick={handleSearch} className="inline-flex h-11 w-full items-center justify-center text-sm ml-10 rounded-full bg-primary px-5 font-medium tracking-wide text-white shadow-none outline-none transition duration-200 hover:bg-primary focus:ring sm:w-auto">
                                            <span className='uppercase'>Search</span>
                                        </button>}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center -space-x-4 lg:justify-start">
                                <img className="h-10 w-10 rounded-full ring ring-white" src="/images/member2.jpg" alt='Manirabona Patience At Consult Solutions' />
                                <img className="h-10 w-10 rounded-full ring ring-white" src="/images/member1.jpeg" alt='Eric Niyongira at Consult Solutions' />
                                
                                <div className="">
                                    <span className="pl-8 font-semibold text-slate-700 text-[12px]">Customer Reviews</span>
                                    <div className="flex w-auto items-center justify-center space-x-1 pl-8 text-[12px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span className="text-[12px] font-medium text-slate-400"> 4.9 • <a href="/" className="text-[12px] font-normal underline">129 reviews</a> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
