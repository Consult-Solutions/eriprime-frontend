import React, { useEffect, useState } from 'react';
import CarPostingSection from '../components/car-posting-section.tsx';
import api from '../services/api.ts';
import AlertMessage from '../components/alerts/alert-message.tsx';
import FetchLoader from '../components/loaders/fetching-loader.tsx';
import CarPostingCard from '../components/car-posting-card.tsx';
import { BRAND_OPTIONS, CONDITION_OPTIONS, PRICE_OPTIONS, TYPE_OPTIONS } from '../services/constants.ts';   

const Listings: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingNewCar, setIsFetchingNewCar] = useState(false);
    const [isFetchingAutoCar, setIsFetchingAutoCar] = useState(false);

    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    
    const [cars, setCars] = useState<any[]>([]);
    const [newCars, setNewCars] = useState<any[]>([]);
    const [autoCars, setAutoCars] = useState<any[]>([]);

    const [priceFilter, setPriceFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [conditionFilter, setConditionFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    /**
     * Fetches the newly arrival cars
     * @returns void
     */
    const getNewCars = async () => {
        setIsFetchingNewCar(true);
        
        try {
            api.get('/cars/approved?condition=New&direction=asc')
                .then((response: any) => {
                    setAutoCars(response.data.data);
                }).catch((error: { response: { data: { message: string; }; }; }) => {
                    setAlertMessage('An error occurred. ' + error.response.data.message);
                    setAlertType('error');
                });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
        } finally {
            setIsFetchingNewCar(false);
        }
    };

    /**
     * Fetches the automatic cars
     * @returns void
     */
    const getAutoCars = async () => {
        setIsFetchingAutoCar(true);
        
        try {
            api.get('/cars/approved?transmission=Automatics&direction=desc')
                .then((response: any) => {
                    setNewCars(response.data.data);
                }).catch((error: { response: { data: { message: string; }; }; }) => {
                    setAlertMessage('An error occurred. ' + error.response.data.message);
                    setAlertType('error');
                });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
        } finally {
            setIsFetchingAutoCar(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') setSearchQuery(e.currentTarget.value);
    };

    /**
     * Fetches the cars
     * @returns void
     */
    useEffect(() => {
        const getCars = async () => {
            setIsLoading(true);
            
            try {
                api.get(`/cars/approved`, {
                        params: {
                            price: priceFilter,
                            type: typeFilter,
                            brand: brandFilter,
                            condition: conditionFilter,
                            query: searchQuery,
                            direction: 'desc',
                            limit: 12,
                        },
                    })
                    .then((response: any) => {
                        setCars(response.data.data);
                    }).catch((error: { response: { data: { message: string; }; }; }) => {
                        setAlertMessage('An error occurred. ' + error.response.data.message);
                        setAlertType('error');
                    });
            } catch (error) {
                setAlertMessage('An error occurred. Something went wrong');
                setAlertType('error');
            } finally {
                setIsLoading(false);
            }
        }

        getCars();
        getNewCars();
        getAutoCars();
    }, [newCars, priceFilter, typeFilter, brandFilter, conditionFilter, searchQuery]);
    
    return (
        <div>
            <section className='py-6 lg:py-6'>
                {/* Filter */}
                <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                    {/* Search Query */}
                    <div className="bg-white mb-4 rounded-lg flex flex-wrap gap-4 items-center justify-center">
                        <div className="flex items-center w-full md:w-auto">
                            <div className='border rounded-full px-4 py-3 w-full md:w-96 text-sm focus:outline-none flex items-center'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <input type="text" value={searchQuery} onKeyDown={handleKeyDown} id="search" placeholder="Search different cars..." className="border-none outline-none focus:border-none focus:outline-none ml-3 bg-white"/>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="bg-white p-4 rounded-lg flex flex-wrap gap-4 items-center justify-between border border-gray-200">
                        {/* Filter by Price */}
                        <div className="flex items-center">
                            <label className="text-sm font-semibold text-gray-600 mr-2">Price:</label>
                            
                            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <select id="price" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                    {PRICE_OPTIONS.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Filter by Type */}
                        <div className="flex items-center">
                            <label className="text-sm font-semibold text-gray-600 mr-2">Type:</label>
                            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <select id="type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                    {TYPE_OPTIONS.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Filter by Type */}
                        <div className="flex items-center">
                            <label className="text-sm font-semibold text-gray-600 mr-2">Brand:</label>
                            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <select id="type" value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                                    {BRAND_OPTIONS.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Filter by Type */}
                        <div className="flex items-center">
                            <label className="text-sm font-semibold text-gray-600 mr-2">Condition:</label>
                            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                
                                <select id="model" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white" value={conditionFilter} onChange={(e) => setConditionFilter(e.target.value)}>
                                    {CONDITION_OPTIONS.map((item, index) => (
                                        <option key={index} value={item.value}>{item.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Listing */}
                    <div className='mt-10'>
                        <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                            {isLoading && (<FetchLoader />)}
                            
                            {!isLoading && cars.map((item, index) => (
                                <CarPostingCard key={index} car={item} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filter By Condition */}
                <CarPostingSection 
                    title="Newly Arrival Cars" 
                    description="Discover the latest arrivals in our car collection. Find the newest models with the best features and performance." 
                    cars={newCars}
                    isLoading={isFetchingNewCar}
                />

                {/* Automatic Cars */}
                <CarPostingSection 
                    title="Automatic Cars" 
                    description="Explore our range of automatic cars for a smooth and effortless driving experience. Perfect for city driving and long journeys." 
                    cars={autoCars}
                    isLoading={isFetchingAutoCar}
                />
            </section>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default Listings;
