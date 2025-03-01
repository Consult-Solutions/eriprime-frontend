/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Hero from '../components/sections/hero.tsx';
import api from '../services/api.ts';
import AlertMessage from '../components/alerts/alert-message.tsx';
import MetaTags from '../components/MetaTags.tsx';
import CTA from '../components/sections/cta.tsx';
import Digital from '../components/sections/digital.tsx';
import Beliefs from '../components/sections/beliefs.tsx';
import ShortListings from '../components/sections/short-listings.tsx';

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingAutoCar, setIsFetchingAutoCar] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [cars, setCars] = useState<any[]>([]);
    const [autoCars, setAutoCars] = useState<any[]>([]);

    const params = {
        limit: 8,
        orderBy: 'createdAt',
        direction: 'desc',
    };

    /**
     * Fetches the cars
     * 
     * @param customParams 
     */
    const getCars = async (customParams: Axios.AxiosXHRConfigBase<unknown> | undefined = {}) => {
        setIsLoading(true);

        const formParams = {
            ...params,
            ...customParams,
        };

        try {
            api.get(`/cars/approved`, { params: formParams })
                .then((response: any) => {
                    setCars(response.data.data);
                    setIsLoading(false)
                }).catch((error: { response: { data: { message: string; }; }; }) => {
                    setAlertMessage('An error occurred. try again later');
                    setAlertType('error');
                    setIsLoading(false);
                });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsLoading(false);
        }
    };

    const getAutoCars = async () => {
        const params: any = {
            transmission: 'automatic',
            direction: 'desc',
            limit: 8,
            price: JSON.stringify([1000000, 100000000]),
        };

        setIsFetchingAutoCar(true);

        try {
            api.get('/cars/approved', { params }).then((response: any) => {
                setAutoCars(response.data.data);
                setIsFetchingAutoCar(false);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. try again later');
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
     * 
     * @returns void
     */
    useEffect(() => {
        const fetchData = async () => {
            getCars();
            getAutoCars();
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
            <Hero onLoading={isLoading} onChange={getCars} />

            <div className="px-4 relative py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="vector-1 absolute -top-20 right-20">
                    <img src='/vectors/vector-3.png' alt="vector" className='w-48' />
                </div>

                <div className="vector-1 absolute -top-20 right-28">
                    <img src='/vectors/vector-3.png' alt="vector" className='w-48' />
                </div>

                {/* Short list of cars */}
                <ShortListings isLoading={isLoading} cars={cars} params={params}>
                    <h3 className="text-2xl font-bold text-slate-700 sm:text-3xl lg:text-4xl capitalize md:leading-loose">wide range of cars to <br /> suit every need and  <span className="inline-block text-primary">budget</span>.</h3>
                    <p className="max-w-xl text-base leading-relaxed text-gray-600 mt-6">
                        Find your dream car from our extensive collection. Quality cars for every budget.
                    </p>
                </ShortListings>

                {/* Digital Section */}
                <Digital />

                {/* Short list of auto cars */}
                <ShortListings isLoading={isFetchingAutoCar} cars={autoCars} params={params}>
                    <h3 className="text-2xl font-bold text-slate-700 sm:text-3xl lg:text-4xl capitalize md:leading-loose">
                        Discover the Perfect Car to <br /> Match Your <span className="inline-block text-primary">Lifestyle</span>.
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-gray-600 mt-6">
                        Explore our extensive collection and find your dream car today. Quality and affordability guaranteed.
                    </p>
                </ShortListings>

                {/* Beliefs Section  */}
                <Beliefs />

                {/* CTA */}
                <CTA />
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default Home;
