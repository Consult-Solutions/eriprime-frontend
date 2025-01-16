import React, { useState } from 'react';
import CarForm from '../components/forms/car-form.tsx';
import api from '../services/api.ts';
import AlertMessage from '../components/alerts/alert-message.tsx';

const Postcar: React.FC = () => {
    const [isLoading, setIsloading] = useState(false);    
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [formValidation, setFormValidation] = useState('');

    /**
     * Submit Car
     * 
     * @param car 
     */
    const handleSubmitCar = (car: any) => {        
        setIsloading(true);

        try {
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
            formData.append('status', car.status);
            formData.append('seats', car.seats.toString());
            formData.append('autonomy', car.autonomy);
            formData.append('color', car.color);
            formData.append('features', JSON.stringify(car.features));

            // Append images array
            if (car.images && car.images.length > 0) {
                car.images.forEach((image: File) => {
                    formData.append("images", image);
                });
            }

            api.post('/cars', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }).then((response: any) => {
                setAlertMessage('Car added successfully.');
                setAlertType('success');
                setIsloading(false);
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. '+error.response.data.message);
                setAlertType('error');
                setIsloading(false);
            })
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertType('error');
            setIsloading(false);
        }
    };

    /**
     * Update Car
     * 
     * @param car 
     */
    const handleUpdateCar = (car: any, id: string) => {
        setIsloading(false);
    }

    /**
     *  Handle Form Error
     * 
     * @param errors 
     */
    const handleFormError = (errors: any) => {
        setFormValidation(errors);
    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Hero Side section */}
                <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full" src="https://www.nationscreen.com/wp-content/uploads/2020/10/fpmympre6y4-2048x1365.jpg" alt="" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                    <div className="relative h-[48vh]">
                        <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                        <h3 className="text-4xl font-bold text-white">Find, Deal & Hover your car with Trusted by 35k+ Car Enthusiasts accross the globe</h3>

                        <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                            <li className="flex items-center space-x-3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-white"> Commercial License </span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-white"> Trusted Certificates </span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-white"> 120+ Cars Listed </span>
                            </li>
                            <li className="flex items-center space-x-3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="text-lg font-medium text-white"> Recommendations </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>

                <div className="flex items-center justify-center px-2 py-10 bg-white sm:px-6 lg:px-10 sm:py-16 lg:py-10">
                    <div className="xl:w-full 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">List Your Car in Minutes!</h2>
                        <p className="mt-2 text-base text-gray-600">Reach potential Buyers with an eye-catching Listing. Fill out the details below to get started</p>

                        {formValidation && (<div className='bg-transparent my-5 flex items-center'>
                            <p className={`bg-teal-accent-400 inline-block rounded-full bg-red-100 border-red-200 text-red-900 px-3 py-1 border text-sm font-semibold tracking-wider`}>{formValidation}</p>
                        </div>)}

                        <CarForm 
                            onSubmit={handleSubmitCar} 
                            onUpdate={handleUpdateCar}
                            isLoading={isLoading} 
                            isEditing={false} 
                            initialData={null} 
                            onError={handleFormError} 
                        />
                    </div>
                </div>
            </div>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </section>
    );
}

export default Postcar;