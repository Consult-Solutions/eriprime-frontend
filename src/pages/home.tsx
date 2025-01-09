import React, { useEffect, useState } from 'react';
import Hero from '../components/hero.tsx';
import api from '../services/api.ts';
import CarPostingCard from '../components/car-posting-card.tsx';
import FetchLoader from '../components/loaders/fetching-loader.tsx';
import AlertMessage from '../components/alerts/alert-message.tsx';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags.tsx';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [cars, setCars] = useState<any[]>([]);

    const getCars = async () => {
        setIsLoading(true);
        
        try {
            api.get(`/cars/approved`, {
                    params: {
                        limit: 12,
                        orderBy: 'createdAt',
                        direction: 'desc',
                    },
                })
                .then((response: any) => {
                    setCars(response.data.data);
                    setIsLoading(false)
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
    };

    /**
     * Fetches the cars
     * 
     * @returns void
     */
    useEffect(() => {
        const fetchData = async () => {
            await getCars();
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* SEO */}
            <MetaTags 
                title="Consult Solutions" 
                description="Discover a wide range of cars to suit every need and budget. Whether you're looking for the latest models, reliable used cars, or something in between, we have it all. Start your journey with us today and find the perfect car for you."
                keywords="Consult Solutions, cars, car trader, car trader africa, car trader rwanda, car trader kenya, car trader nigeria, car trader ghana, car trader south africa, car trader tanzania, car trader uganda"
                canonical={`${process.env.PUBLIC_URL}/`}
                ogTitle="Consult Solutions" 
                ogDescription="Find your dream car from our extensive collection. Quality cars for every budget." 
                ogImage={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
                twitterCard="summary_large_image"
            />

            {/* Hero Component */}
            <Hero />

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="text-left mb-5">
                    <h3 className="text-2xl font-bold text-slate-700 sm:text-3xl lg:text-4xl capitalize md:leading-loose">wide range of cars to <br /> suit every need and  <span className="inline-block text-primary">budget</span>.</h3>
                    <p className="max-w-xl text-base leading-relaxed text-gray-600 mt-6">
                        Find your dream car from our extensive collection. Quality cars for every budget.
                    </p>
                </div>

                <div className='mt-10'>
                    <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        {isLoading && <FetchLoader />}
                        
                        {cars.map((item, index) => (
                            <CarPostingCard key={index} car={item} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <Link to={'/listings'} className="px-6 py-2 bg-primary text-white rounded-full text-md flex items-center">
                        <span>View our Listings</span>
                        <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                    </Link>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default Home;
