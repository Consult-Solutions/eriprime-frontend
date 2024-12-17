import React from 'react';
import CarPostingSection from '../components/car-posting-section.tsx';

const Listings: React.FC = () => {
    return (
        <section className='py-6 lg:py-6'>
            {/* Filter */}
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                <div className="bg-white p-4 rounded-lg flex flex-wrap gap-4 items-center justify-between border border-gray-200">
                    {/* Filter by Price */}
                    <div className="flex items-center">
                        <label className="text-sm font-semibold text-gray-600 mr-2">Price:</label>
                        
                        <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <select id="price" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                <option value="">Select Price</option>
                                <option value="low">Low to High</option>
                                <option value="high">High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter by Type */}
                    <div className="flex items-center">
                        <label className="text-sm font-semibold text-gray-600 mr-2">Type:</label>
                        <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <select id="type" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                <option value="">Select Type</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="truck">Truck</option>
                                <option value="coupe">Coupe</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Query */}
                    <div className="flex items-center w-full md:w-auto">
                        <div className='border rounded-full px-4 py-3 w-full md:w-64 text-sm focus:outline-none flex items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <input type="text" id="search" placeholder="Search different cars..." className="border-none outline-none focus:border-none focus:outline-none ml-3 bg-white"/>
                        </div>
                    </div>

                    {/* Filter by Type */}
                    <div className="flex items-center">
                        <label className="text-sm font-semibold text-gray-600 mr-2">Brand:</label>
                        <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <select id="type" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                <option value="">Select Type</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="truck">Truck</option>
                                <option value="coupe">Coupe</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter by Type */}
                    <div className="flex items-center">
                        <label className="text-sm font-semibold text-gray-600 mr-2">Model:</label>
                        <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <select id="type" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                <option value="">Select Type</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="truck">Truck</option>
                                <option value="coupe">Coupe</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* new cars */}
            <CarPostingSection
                title="Newly Cars"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
            />

            {/* Most Liked cars */}
            <CarPostingSection
                title="Most Liked Cars"
                description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
            />
        </section>
    );
};

export default Listings;
