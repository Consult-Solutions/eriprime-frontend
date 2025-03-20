/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CarPostingSection from '../components/car-posting-section.tsx';
import api from '../services/api.ts';
import AlertMessage from '../components/alerts/alert-message.tsx';
import MetaTags from '../components/MetaTags.tsx';
import FormModal from '../components/models/form-model.tsx';
import CarCard from '../components/cards/card-card.tsx';
import CarCardListingSkeleton from '../components/cards/car-card -listing-skeleton.tsx';
import FiltersForm from '../components/forms/filters-form.tsx';

interface GetCarsParams {
    direction?: string;
    limit?: number;
    price?: string;
    type?: string;
    brand?: string;
    condition?: string;
    search?: string;
    transmission?: string;
    location?: string;
    fuel?: string;
}

interface SetUrlParams {
    (key: string, value: string): void;
}

const Listings: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingNewCar, setIsFetchingNewCar] = useState(false);
    const [isFetchingAutoCar, setIsFetchingAutoCar] = useState(false);

    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const [cars, setCars] = useState<any[]>([]);
    const [newCars, setNewCars] = useState<any[]>([]);
    const [autoCars, setAutoCars] = useState<any[]>([]);

    const [priceFilter, setPriceFilter] = useState<number[]>([1000000, 100000000]);
    const [typeFilter, setTypeFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [conditionFilter, setConditionFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [transmissionFilter, setTransmissionFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [fuelFilter, setFuelFilter] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const openOpenModal = () => setOpenModal(true);
    const closeOpenModal = () => setOpenModal(false);
    const apiUrl = `/cars/approved`;

    const setUrlParams: SetUrlParams = (key, value) => {
        const urlParams = new URLSearchParams(window.location.search);

        if (value !== '') {
            urlParams.set(key, value);
            window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') getCars();
    };

    /**
     * Fetches the cars
     * 
     * @returns void
     */
    const getCars = async (limit: number = 50, parsedParams?: GetCarsParams): Promise<void> => {
        const params: GetCarsParams = {
            direction: 'desc',
            limit: limit,
            search: searchQuery,
            location: locationFilter,
            ...parsedParams
        };

        setIsLoading(true);

        try {
            api.get(apiUrl, { params })
                .then((response: any) => {
                    setCars(response.data.data);
                    setIsLoading(false);
                }).catch((error: { response: { data: { message: string; }; }; }) => {
                    setAlertMessage('An error occurred. ' + error.response.data.message);
                    setAlertType('error');
                    setIsLoading(false);
                });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsLoading(false);
        }
    }

    /**
     * Fetches the newly arrival cars
     * @returns void
     */
    const getNewCars = async () => {
        const params: any = {
            condition: 'new',
            direction: 'desc',
            limit: 8,
        };

        setIsFetchingNewCar(true);

        try {
            api.get(apiUrl, { params }).then((response: any) => {
                setNewCars(response.data.data);
                setIsFetchingNewCar(false);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. ' + error.response.data.message);
                setAlertType('error');
                setIsFetchingNewCar(false);
            });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsFetchingNewCar(false);
        }
    };

    /**
     * Fetches the automatic cars
     * @returns void
     */
    const getAutoCars = async () => {
        const params: any = {
            transmission: 'automatic',
            direction: 'desc',
            limit: 8,
        };

        setIsFetchingAutoCar(true);

        try {
            api.get('/cars/approved', { params }).then((response: any) => {
                setAutoCars(response.data.data);
                setIsFetchingAutoCar(false);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. ' + error.response.data.message);
                setAlertType('error');
                setIsFetchingAutoCar(false);
            });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsFetchingAutoCar(false);
        }
    };

    /**
     * Fetches the cars
     * @returns void
     */
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const price = urlParams.get('price');
        const type = urlParams.get('type');
        const brand = urlParams.get('brand');
        const condition = urlParams.get('condition');
        const search = urlParams.get('search');
        const transmission = urlParams.get('transmission');
        const location = urlParams.get('location');
        const fuel = urlParams.get('fuel');

        if (price) setPriceFilter(JSON.parse(price));
        if (type) setTypeFilter(type);
        if (brand) setBrandFilter(brand);
        if (condition) setConditionFilter(condition);
        if (search) setSearchQuery(search);
        if (transmission) setTransmissionFilter(transmission);
        if (location) setLocationFilter(location);
        if (fuel) setFuelFilter(fuel);

        getCars(9);
        getNewCars();
        getAutoCars();
    }, []);

    useEffect(() => {
        setUrlParams('price', JSON.stringify(priceFilter));
        setUrlParams('type', typeFilter);
        setUrlParams('brand', brandFilter);
        setUrlParams('condition', conditionFilter);
        setUrlParams('search', searchQuery);
        setUrlParams('transmission', transmissionFilter);
        setUrlParams('location', locationFilter);
        setUrlParams('fuel', fuelFilter);
    }, [priceFilter, typeFilter, brandFilter, conditionFilter, searchQuery, transmissionFilter, locationFilter, fuelFilter]);

    return (
        <div>
            <MetaTags
                title="Car Listings On Eriprime"
                description="Explore our extensive car listings to find the perfect vehicle for you. From the latest models to reliable used cars, we have something for everyone. Start your journey with Eriprime today!"
                keywords="Eriprime, car listings, cars, new cars, used cars, car trader, car trader africa, car trader rwanda, car trader kenya, car trader nigeria, car trader ghana, car trader south africa, car trader tanzania, car trader uganda"
                canonical={`${process.env.PUBLIC_URL}/listings`}
                ogTitle="Car Listings On Eriprime"
                ogDescription="Discover your dream car from our extensive listings. Quality cars for every budget and need."
                ogImage={`${process.env.PUBLIC_URL}/images/logos/logo.jpg`}
                twitterCard="summary_large_image"
            />

            {/* Search Filter */}
            <section>
                <div className='py-10 md:py-19 relative px-4 md:px-28 lg:px-28 bg-fixed bg-top bg-cover bg-no-repeat' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579771940178-c0146e22f921?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="px-4 py-10 md:py-3 mx-auto relative z-40 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-8 lg:py-7 bg-white bg-opacity-90 rounded-lg">
                        {/* Title */}
                        <div className='flex flex-wrap gap-4 items-center justify-center mb-5'>
                            <span className='text-slate-700 text-2xl font-bold text-center'>Find Your Dream Car Across the City</span>
                        </div>

                        {/* Search Query */}
                        <div className="bg-transparent mb-4 rounded-lg flex flex-wrap gap-4 items-center justify-center">
                            <div className="flex items-center w-full md:w-auto flex-col md:flex-row justify-center">
                                <div className='border rounded-full px-4 py-3 w-full md:w-[500px] text-sm focus:outline-none flex items-center bg-white'>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M18.93 20.689c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>

                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Search different cars... (press enter to search)"
                                        className="border-none outline-none focus:border-none focus:outline-none ml-3 bg-white w-full h-full"
                                    />
                                </div>
                                <div className='flex items-center justify-center mt-2 md:mt-0'>
                                    <div className='border rounded-full px-4 py-3 w-full md:w-[200px] text-sm focus:outline-none flex items-center bg-white md:ml-2'>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#697689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73z"></path><path stroke="#697689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.73 6.27L6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27z"></path><path stroke="#697689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38z"></path><path stroke="#697689" strokeWidth="1.5" d="M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 01-2.48 0c-.95-.9-2.04-2.36-1.64-4.08z" opacity=".4"></path><path stroke="#697689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.094 8.7h.01" opacity=".4"></path></svg></span>

                                        <input
                                            type="text"
                                            value={locationFilter}
                                            onChange={(e) => setLocationFilter(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Location"
                                            className="border-none outline-none focus:border-none focus:outline-none ml-3 bg-white w-full h-full"
                                        />
                                    </div>
                                    <div onClick={openOpenModal} className='border cursor-pointer rounded-full px-4 py-3 w--auto text-sm focus:outline-none flex items-center bg-white ml-2'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M3.35 2h8.9c.74 0 1.35.61 1.35 1.35v1.48c0 .54-.34 1.21-.67 1.55l-2.9 2.56c-.4.34-.67 1.01-.67 1.55v2.9c0 .4-.27.94-.61 1.15l-.94.61c-.88.54-2.09-.07-2.09-1.15v-3.57c0-.47-.27-1.08-.54-1.42l-2.56-2.7c-.34-.34-.61-.94-.61-1.35V3.41C2 2.61 2.61 2 3.35 2Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 11.998v3c0 5 2 7 7 7h6c5 0 7-2 7-7v-6c0-3.12-.78-5.08-2.59-6.1-.51-.29-1.53-.51-2.46-.66" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M13 13h5M11 17h7" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </span>
                                        <span className='ml-3 text-slate-400'>Filters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=''>
                {/* Listing */}
                <div className='px-4 py-2 mt-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5'>
                    <div className="w-full mt-5 md:mt-0">
                        {/* Skeleton */}
                        {isLoading && <CarCardListingSkeleton numberOfCards={8} numberOfColumns={4} />}

                        {/* Listing */}
                        {(!isLoading && cars.length > 0) && <div className=''>
                            <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                                {!isLoading && cars.map((item, index) => (
                                    <CarCard key={index} car={item} />
                                ))}
                            </div>
                        </div>}

                        {(!isLoading && cars.length === 0) && <div className='flex items-center justify-center mt-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <img src="/images/svgs/empty-dealer.svg" alt="" className='w-80' />
                                <span className='font-bold text-slate-400'>No Search Result Found.</span>
                            </div>
                        </div>}
                    </div>
                </div>

                {/* Fresh Arrivals */}
                <CarPostingSection
                    title="Hot Off the Lot: Fresh Arrivals"
                    description="Be the first to explore our latest collection of cars. Discover cutting-edge models with top-notch features and unbeatable performance."
                    cars={newCars}
                    isLoading={isFetchingNewCar}
                />

                {/* Automatic Cars */}
                <CarPostingSection
                    title="Automatic Cars"
                    description="Automatic cars designed for a seamless and enjoyable driving experience. Ideal for both city commutes and long-distance travels, That offer unmatched convenience and comfort."
                    cars={autoCars}
                    isLoading={isFetchingAutoCar}
                />
            </section>

            {/* Search Filter Modal */}
            <FormModal isOpen={openModal} onClose={closeOpenModal}>
                <FiltersForm onReset={() => getCars(9, {})} onSubmit={(params: GetCarsParams) => getCars(params.limit, params)} />
            </FormModal>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default Listings;
