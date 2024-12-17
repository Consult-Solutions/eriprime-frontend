/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';
import FormModal from '../../components/models/form-model.tsx';
import CarForm from '../../components/forms/car-form.tsx';
import ErrorBoundary from '../../utils/ErrorBoundary.tsx';
import api from '../../services/api.ts';
import AlertMessage from '../../components/alerts/alert-message.tsx';
import { useAuth } from '../../contexts/AuthContext.tsx';
import BaseTable from '../../components/table/base-table.tsx';
import FetchLoader from '../../components/loaders/fetching-loader.tsx';
import CarRow from '../../components/table/car-row.tsx';

const Cars: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [cars, setCars] = useState<any[]>([]);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    
    const { token } = useAuth();
    const renderRow = (index: number, car: any) => <CarRow index={index} car={car} />;

    const fetchCars = async () => {
        try {
            api.get('/cars', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    direction: 'desc',
                }
            }).then((response: any) => {
                setIsFetching(false);
                setCars(response.data.data);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
                setIsFetching(false);
            });
        } catch (error) {
            setAlertMessage('An error occurred. Something went wrong');
            setAlertType('error');
            setIsFetching(false);
        }
    };

    useEffect(() => {
        if (token) 
            fetchCars();
        
    }, [token]);

    const handleSubmitCar = (car: any) => {        
        try {
            setIsloading(true);

            const formData = new FormData();
            
            formData.append('title', car.title);
            formData.append('car_model', car.car_model);
            formData.append('year', car.year.toString());
            formData.append('description', car.description);
            formData.append('category', car.category);
            formData.append('location', car.location);
            formData.append('make', car.make);
            formData.append('mileage', car.mileage.toString());
            formData.append('price', car.price.toString());
            formData.append('condition', car.condition);
            formData.append('transmission', car.transmission);
            formData.append('fuel_type', car.fuel_type);

            // Append images array
            if (car.images && car.images.length > 0) {
                car.images.forEach((image: File) => {
                    formData.append("images", image);
                });
            }

            api.post('/cars', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            }).then((response: any) => {
                setIsloading(false);
                setAlertMessage('Car added successfully.');
                setAlertType('success');
                handleCloseModal();
                fetchCars();
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
                setIsloading(false);
                handleCloseModal();
            })
        } catch (error) {
            setIsloading(false);
            setAlertMessage('An error occurred. Please try again.');
            setAlertType('error');
            handleCloseModal();
        }
    };

    const headers = [
        { key: 'No', label: 'NO' },
        { key: 'image', label: 'Image' },
        { key: 'title', label: 'Title', sortable: true },
        { key: 'seller', label: 'Seller' },
        { key: 'make', label: 'Make', sortable: true },
        { key: 'model', label: 'Model', sortable: true },
        { key: 'year', label: 'Year', sortable: true },
        { key: 'transmission', label: 'Transmission' },
        { key: 'ecoFriendly', label: 'Eco Friendly' },
        { key: 'price', label: 'Price', sortable: true },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Actions' },
    ];

    return (
        <ErrorBoundary>
            <div className='section'>
                <div className='flex justify-between'>
                    {/* Section Title */}
                    <SectionTitle title='Manage Cars' path='cars' />

                    <div>
                        <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center text-sm">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12h12M12 18V6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                            <span>Add New Car</span>
                        </button>
                    </div>
                </div>

                {/* Table Data */}
                {isFetching ? <FetchLoader /> : <BaseTable title='My Cars Listed' headers={headers} data={cars} itemsPerPage={5} renderRow={renderRow} />}

                {/* Form for Submitting Cars */}
                <FormModal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <h2 className="text-xl font-semibold mb-4 text-slate-700 flex items-center">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.51 2.83H8.49C6 2.83 5.45 4.07 5.13 5.59L4 11h16l-1.13-5.41c-.32-1.52-.87-2.76-3.36-2.76ZM21.99 19.82c.11 1.17-.83 2.18-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6C7.15 21.54 7 22 5.92 22H4.04c-1.2 0-2.14-1.01-2.03-2.18l.56-6.09C2.71 12.23 3 11 5.62 11h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09ZM4 8H3M21 8h-1M12 3v2M10.5 5h3M6 15h3M15 15h3" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                        <span className='ml-2'>List Your Car in Minutes!</span>
                    </h2>
                    <p>Reach potential buyers with an eye-catching listing. Fill out the details below to get started</p>
                    <hr className="my-5 border-gray-200" />
                    
                    <CarForm onSubmit={handleSubmitCar} isLoading={isLoading} />
                </FormModal>

                {/* Alert Message */}
                <AlertMessage message={alertMessage} type={alertType} />
            </div>
        </ErrorBoundary>
    );
}

export default Cars;