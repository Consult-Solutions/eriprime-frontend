import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br bg-white text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://media.licdn.com/dms/image/D5612AQHvAeUM5ZDkVQ/article-cover_image-shrink_720_1280/0/1720959677409?e=2147483647&v=beta&t=pNqbAbzMQLdFiKyx_5XZ-PaQdddozZio-zC0HUVU1jU)' }}></div>
            
            <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:pb-32 xl:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between md:px-10">
                    
                    <div className="w-full sm:w-full md:w-3/5 mb-12 md:mb-0 bg-white rounded-lg p-10">
                        <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left">
                            <div className="mb-6 max-w-xl">
                                <div>
                                    <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-green-100 px-3 py-1 border border-gray-200 text-sm font-semibold tracking-wider text-green-900">Get started now with free account</p>
                                </div>
                                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                                    The #1 Marketplace for <span className="inline-block text-primary">Cars </span> in <span className="inline-block text-primary">Rwanda</span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all. Start your journey with us today and find the perfect car for you.
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-start">
                                <Link to="signup" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-medium tracking-wide text-white outline-none transition duration-200 hover:bg-primary focus:ring sm:w-auto"> 
                                    <span>Get Started for free </span>
                                    <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                                </Link>
                                <Link to="listings" className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-[#03783d] px-4 font-semibold text-primary transition-colors duration-200 hover:border-y-[#03783d] hover:text-primary sm:w-auto">
                                    <span>View Our Listings</span>
                                    <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.51 2.828H8.49c-2.49 0-3.04 1.24-3.36 2.76L4 10.998h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.989 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37h-5.12c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03h-1.88c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><g opacity=".4" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2M10.5 5h3"></path></g><path opacity=".4" d="M6 15h3M15 15h3" stroke="#03783d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                </Link>
                            </div>

                            <div className="mt-6 flex justify-center -space-x-4 lg:justify-start">
                                <img className="h-12 w-12 rounded-full ring ring-white" src="/images/member2.jpg" alt='Manirabona Patience At Consult Solutions' />
                                <img className="h-12 w-12 rounded-full ring ring-white" src="/images/member1.jpeg" alt='Eric Niyongira at Consult Solutions' />
                                
                                <div className="">
                                    <span className="pl-8 font-semibold text-slate-700">Customer Reviews</span>
                                    <div className="flex w-auto items-center justify-center space-x-1 pl-8">
                                        <svg className="h-auto w-5 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                        </svg>
                                        <span className="text-sm font-medium text-slate-400"> 4.9 • <a href="/" className="text-sm font-normal underline">129 reviews</a> </span>
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
