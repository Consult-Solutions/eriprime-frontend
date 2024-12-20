import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
                    <div className="mb-6 max-w-xl">
                        <div>
                            <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-100 px-3 py-1 border border-gray-200 text-sm font-semibold tracking-wider text-green-900">Get started now with free account</p>
                        </div>
                        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                            The #1 Marketplace for <span className="inline-block text-primary">Cars </span> in <span className="inline-block text-primary">Africa</span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all. Start your journey with us today and find the perfect car for you.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
                        <a href="/" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-primary focus:ring sm:w-auto"> 
                            <span>Get Started for free </span>
                            <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                        </a>
                        <a href="/" className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-[#03783d] px-4 font-semibold text-primary transition-colors duration-200 hover:border-y-[#03783d] hover:text-primary sm:w-auto">
                            <span>Watch a demo video</span>
                            <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M9.102 12v-1.48c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46l-1.28.74-1.28.74c-1.65.95-3 .17-3-1.73V12Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                        </a>
                    </div>

                    <div className="mt-6 flex justify-center -space-x-4 lg:justify-start">
                        <img className="h-12 w-12 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt='' />
                        <img className="h-12 w-12 rounded-full ring ring-white" src="/images/member2.jpg" alt='Manirabona Patience At Consult Solutions' />
                        <img className="h-12 w-12 rounded-full ring ring-white" src="/images/member1.jpeg" alt='Eric Niyongira at Consult Solutions' />
                        
                        <div className="">
                            <span className="pl-8 font-semibold">Customer Reviews</span>
                            <div className="flex w-auto items-center justify-center space-x-1 pl-8">
                                <svg className="h-auto w-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                </svg>
                                <span className="text-sm font-medium text-slate-400"> 4.9 • <a href="/" className="text-sm font-normal underline">129 reviews</a> </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:flex lg:w-1/2 lg:items-end lg:justify-start">
                    <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="img1" x="0" y="0" width="1" height="1">
                                <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice" href="https://cdn.prod.website-files.com/5ec85520c4dfff034b036be2/67377df452a67ed0eb388068_nov-ev-lease-deals_main.webp" />
                            </pattern>
                        </defs>

                        <path fill="url(#img1)" d="M40,-62.6C52.2,-54.5,62.5,-43.9,66.9,-31.4C71.3,-18.9,69.6,-4.6,65.9,8.3C62.2,21.1,56.4,32.5,49.2,45.2C42.1,57.9,33.7,72.1,22.2,75.3C10.7,78.5,-3.9,70.7,-14.8,62.1C-25.7,53.5,-32.8,44.1,-44.9,35.8C-57,27.5,-74,20.3,-82.1,7.7C-90.3,-4.8,-89.5,-22.7,-80.8,-34.8C-72,-46.9,-55.2,-53.3,-40.4,-60.2C-25.6,-67,-12.8,-74.3,0.6,-75.2C13.9,-76.1,27.9,-70.6,40,-62.6Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;
