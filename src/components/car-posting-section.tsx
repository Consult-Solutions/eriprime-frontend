/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CarPostingCard from './car-posting-card.tsx';
import api from '../services/api.ts';
import AlertMessage from './alerts/alert-message.tsx';
import FetchLoader from './loaders/fetching-loader.tsx';

interface CarPostingSectionProps {
    title: string;
    description: string;
}

const CarPostingSection: React.FC<CarPostingSectionProps> = ({ title, description }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [cars, setCars] = useState<any[]>([]);

    const fetchCars = async () => {
        try {
            api.get('/cars/approved?direction=desc').then((response: any) => {
                setIsFetching(false);
                setCars(response.data.data);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. ' + error.response.data.message);
                setAlertType('error');
                setIsFetching(false);
            });
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
            <div className="text-left mb-5">
                <h3 className="text-xl font-bold leading-tight text-slate-700 sm:text-2xl lg:text-4xl">{title}</h3>
                <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-600">{description}</p>
            </div>

            <div className='mt-4'>
                <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {isFetching && (<FetchLoader />)}
                    {cars.map((item, index) => (
                        <CarPostingCard key={index} car={item} />
                    ))}
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default CarPostingSection;
