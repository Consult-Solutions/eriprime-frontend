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

    const fetchCars = async () => {
        try {
            api.get('/cars?direction=desc', {
                headers: {
                    Authorization: `Bearer ${token}`
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
            console.error('Error fetching cars:', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchCars();
        }
    }, [token]);

    const handleSubmitCar = (car: any) => {        
        try {
            setIsloading(true);

            const formData = new FormData();

            formData.append('title', car.name);
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
            formData.append('images', car.images);

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

    const renderRow = (car: any) => (<>
        <td className="p-2 whitespace-nowrap">
            <img className="rounded-lg object-cover w-10" src={car.image ? car.image : 'https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180'} alt={car.title} />
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="font-medium text-gray-800">{car.title}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left">{car.seller ? car.seller.name : 'Unknown'}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium text-green-500">{car.make}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-center">{car.car_model}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left">{car.year}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left">{car.transmission}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left flex items-center">
                {car.eco_friendly ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path opacity=".34" d="m8.38 11.998 2.41 2.42 4.83-4.84" stroke="#37d67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z" stroke="#37d67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className='ml-1'>Verified</span>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path opacity=".34" d="m8.38 11.998 2.41 2.42 4.83-4.84" stroke="#f47373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z" stroke="#f47373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className='ml-1'>Not Verified</span>
                    </>
                )}
            </div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className="text-left font-medium text-green-500">{car.price}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className={`rounded-md text-gray-100 text-center px-2 text-sm ${car.status === 'active' ? 'bg-green-600/70' : 'bg-red-600/70'}`}>
                {car.status}
            </div>
        </td>
        <td className="p-2 whitespace-nowrap">
            <div className='flex items-center space-x-2'>
                <div className='border border-gray-200 rounded-lg p-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className='border border-indigo-200 rounded-lg p-1 cursor-pointer bg-indigo-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1.996 8.5h9.5" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M5.996 16.5h2M10.496 16.5h4" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.996 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.436c-3.55 0-4.44-.88-4.44-4.39V7.89c0-3.51.89-4.39 4.44-4.39h8.06" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><g opacity=".4" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"><path d="m19.076 4.131-3.71 3.71c-.14.14-.28.42-.31.62l-.2 1.42c-.07.51.29.87.8.8l1.42-.2c.2-.03.48-.17.62-.31l3.71-3.71c.64-.64.94-1.38 0-2.32-.95-.95-1.69-.65-2.33-.01Z"></path><path d="M18.547 4.66c.32 1.13 1.2 2.01 2.32 2.32"></path></g></svg> 
                </div>
                <div className='border border-red-200 rounded-lg p-1 cursor-pointer bg-red-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".34" d="m8.5 4.97.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m18.85 9.14-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".34" d="M10.33 16.5h3.33M9.5 12.5h5" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
        </td>
    </>);

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

                {/* Table */}
                {isFetching && (<FetchLoader />)}
                <BaseTable title='My Cars Listed' headers={headers} data={cars} renderRow={renderRow} />

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