import React, { useEffect, useState } from 'react';
import Hero from '../components/hero.tsx';
import api from '../services/api.ts';
import CarPostingCard from '../components/car-posting-card.tsx';
import FetchLoader from '../components/loaders/fetching-loader.tsx';
import AlertMessage from '../components/alerts/alert-message.tsx';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [cars, setCars] = useState<any[]>([]);

    /**
     * Fetches the cars
     * 
     * @returns void
     */
    useEffect(() => {
        const getCars = async () => {
            setIsLoading(true);
            
            try {
                api.get(`/cars/approved`, {
                        params: {
                            direction: 'desc',
                            limit: 8,
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
        };

        getCars();
    }, []);

    return (
        <div>
            {/* Hero Component */}
            <Hero />

            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="text-left mb-5">
                    <h3 className="text-xl font-bold leading-loose text-slate-700 sm:text-2xl lg:text-4xl capitalize">wide range of cars to <br /> suit every need and  <span className="inline-block text-primary">budget</span>.</h3>
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
                        <span className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 12h16.83" opacity=".4"></path></svg></span>
                    </Link>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default Home;
