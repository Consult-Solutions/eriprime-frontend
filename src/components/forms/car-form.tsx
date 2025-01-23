import React, { useEffect, useState } from 'react';
import LoadingButton from '../buttons/loading-button.tsx';
import Stepper from '../stepper.tsx';

// Steps
import StepOne from './cars/step-one.tsx';
import StepTwo from './cars/step-two.tsx';
import StepThree from './cars/step-three.tsx';
import StepFour from './cars/step-four.tsx';
import StepFive from './cars/step-five.tsx';
import FormModal from '../models/form-model.tsx';
import TextInput from '../inputs/text-input.tsx';
import api from '../../services/api.ts';
import AlertMessage from '../alerts/alert-message.tsx';
import { useAuth } from '../../contexts/AuthContext.tsx';

interface Car {
    title: string;
    car_model: string;
    year: number;
    description: string;
    category: string;
    location: string;
    make: string;
    mileage: number;
    price: number;
    condition: string;
    transmission: string;
    fuel_type: string;
    status: string;
    images: File[],
    new_images?: File[];
    features: string[];
    seats: number;
    autonomy: string;
    color: string;
};

interface CarFormProps {
    onCallback: (car: Car) => void;
    onFallback?: (car: Car, id: string) => void;
    isEditing: boolean;
    initialData?: any;
}

const CarForm: React.FC<CarFormProps> = ({ onCallback, onFallback, isEditing, initialData, }) => {
    const [title, setTitle] = useState('');
    const [car_model, setCarModel] = useState('');
    const [year, setYear] = useState<number | ''>(2024);
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [make, setMake] = useState('');
    const [mileage, setMileage] = useState<number | ''>(0);
    const [price, setPrice] = useState<number | ''>(0);
    const [autonomy, setAutonomy] = useState('N/A');
    const [condition, setCondition] = useState('');
    const [transmission, setTransmission] = useState('');
    const [fuel_type, setFuelType] = useState('');
    const [seats, setSeats] = useState(0);
    const [status, setStatus] = useState('available');
    const [images, setImages] = useState<File[]>([]);
    const [features, setFeatures] = useState<string[]>([]);

    const [currentStep, setCurrentStep] = useState(0);
    const [missingFields, setMissingFields] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [isLoading, setIsloading] = useState(false);

    // Seller information
    const [sellerFullname, setSellerFullname] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [sellerPhonenumber, setSellerPhonenumber] = useState('');
    const [carDetails, setCarDetails] = useState<Car | null>(null);

    const openSellerModal = () => setIsModalOpen(true);
    const closeSellerModal = () => setIsModalOpen(false);
    const { token, isAuthenticated, user } = useAuth();

    /**
     * When All input filled and let apply validation and submit
     * 
     * @param e 
     * @returns 
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const missing: string[] = [];
        
        if (!title) missing.push('title');
        if (!car_model) missing.push('model');
        if (!year) missing.push('year');
        if (!category) missing.push('type');
        if (!location) missing.push('location');
        if (!make) missing.push('make');
        if (!price) missing.push('price');
        if (!condition) missing.push('condition');
        if (!transmission) missing.push('transmission');
        if (!fuel_type) missing.push('fuel_type');
        if (images.length === 0) missing.push('images');
        if (features.length === 0) missing.push('features');
        if (seats <= 0) missing.push('seats');
        if (!color) missing.push('color');

        if (missing.length > 0) {
            setMissingFields(missing);
            setAlertMessage("There are missing fields. Please fill all fields");
            setAlertType('error');
            return;
        }

        const payload = { title, car_model, year: Number(year), description, category, location, make, mileage: Number(mileage), price: Number(price), condition, transmission, fuel_type, images, status, features, seats, autonomy, color };

        if (isEditing) {
            setCarDetails(payload);
            openSellerModal();
        } else {
            setCarDetails(payload);
            openSellerModal();
        }
    };

    /**
     * Submit Car
     * 
     * @param car 
     */
    const handleSubmitCar = () => {        
        const missing: string[] = [];

        if (!carDetails) {
            setAlertMessage('Car details are missing.');
            setAlertType('error');
            return;
        }
        
        if (!sellerFullname) missing.push('fullname');
        if (!sellerEmail) missing.push('email');
        if (!sellerPhonenumber) missing.push('phonenumber');

        if (missing.length > 0) {
            setMissingFields(missing);
            setAlertMessage("Seller Information must be filled");
            setAlertType('error');
            return;
        }

        try {
            setIsloading(true);

            const seller = {
                fullname: sellerFullname,
                email: sellerEmail,
                phone: sellerPhonenumber,
            };

            const formData = new FormData();
            
            formData.append('user', user.id);
            formData.append('title', carDetails.title);
            formData.append('car_model', carDetails.car_model);
            formData.append('year', carDetails.year.toString());
            formData.append('description', carDetails.description);
            formData.append('category', carDetails.category);
            formData.append('location', carDetails.location);
            formData.append('make', carDetails.make);
            formData.append('mileage', carDetails.mileage.toString());
            formData.append('price', carDetails.price.toString());
            formData.append('condition', carDetails.condition);
            formData.append('transmission', carDetails.transmission);
            formData.append('fuel_type', carDetails.fuel_type);
            formData.append('status', carDetails.status);
            formData.append('seats', carDetails.seats.toString());
            formData.append('autonomy', carDetails.autonomy);
            formData.append('color', carDetails.color);
            formData.append('features', JSON.stringify(carDetails.features));
            formData.append('seller', JSON.stringify(seller));

            // Append images array
            if (carDetails.images && carDetails.images.length > 0) {
                carDetails.images.forEach((image: File) => {
                    formData.append("images", image);
                });
            }

            api.post('/cars', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }).then((response: any) => {
                closeSellerModal();
                resetForm();

                setAlertMessage('Your car has been successfully posted! It will be reviewed and approved shortly before appearing on the website.');
                setAlertType('success');
                setIsloading(false);   
                
                onCallback(response);
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
    const handleUpdateCar = () => {
        const missing: string[] = [];

        if (!carDetails) {
            setAlertMessage('Car details are missing.');
            setAlertType('error');
            return;
        }
        
        if (!sellerFullname) missing.push('fullname');
        if (!sellerEmail) missing.push('email');
        if (!sellerPhonenumber) missing.push('phonenumber');

        if (missing.length > 0) {
            setMissingFields(missing);
            setAlertMessage("Seller Information must be filled");
            setAlertType('error');
            return;
        }

        try {
            setIsloading(true);

            const seller = {
                fullname: sellerFullname,
                email: sellerEmail,
                phone: sellerPhonenumber,
            };

            const formData = new FormData();
            
            formData.append('user', user.id);
            formData.append('title', carDetails.title);
            formData.append('car_model', carDetails.car_model);
            formData.append('year', carDetails.year.toString());
            formData.append('description', carDetails.description);
            formData.append('category', carDetails.category);
            formData.append('location', carDetails.location);
            formData.append('make', carDetails.make);
            formData.append('mileage', carDetails.mileage.toString());
            formData.append('price', carDetails.price.toString());
            formData.append('condition', carDetails.condition);
            formData.append('transmission', carDetails.transmission);
            formData.append('fuel_type', carDetails.fuel_type);
            formData.append('status', carDetails.status);
            formData.append('seats', carDetails.seats.toString());
            formData.append('autonomy', carDetails.autonomy);
            formData.append('color', carDetails.color);
            formData.append('features', JSON.stringify(carDetails.features));
            formData.append('seller', JSON.stringify(seller));

            if (carDetails.images && carDetails.images.length > 0) {
                carDetails.images.forEach((image: File) => {
                    formData.append("images", image);
                });
            }

            api.post(`/cars/update/${initialData._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            }).then((response: any) => {
                setAlertMessage('Car Updated Successfully.');
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
    }

    /**
     * Reset Car form
     */
    const resetForm = () => {
        setTitle('');
        setCarModel('');
        setYear('');
        setDescription('');
        setCategory('');
        setLocation('');
        setMake('');
        setMileage('');
        setPrice('');
        setCondition('');
        setTransmission('');
        setFuelType('');
        setImages([]);
        setStatus('');
        setFeatures([]);
        setSeats(0);
        setAutonomy('');
        setColor('');
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const getErrorField = (field: string) => {
        return missingFields.includes(field) ? `${field} is required` : '';
    };

    // Steps
    const steps = [
        <StepOne key="step1" getErrorField={getErrorField} name={title} setName={setTitle} model={car_model} setModel={setCarModel} year={year === '' ? 2024 : year} setYear={(value) => setYear(value)} color={color} setColor={setColor} />,
        <StepTwo key="step2" getErrorField={getErrorField} category={category} description={description} location={location} status={status} setCategory={setCategory} setDescription={setDescription} setLocation={setLocation} setStatus={setStatus} inEditMode={initialData ? true : false} />,
        <StepThree key="step3" getErrorField={getErrorField} make={make} setMake={setMake} mileage={mileage === '' ? 0 : mileage} setMileage={setMileage} price={price === '' ? 0 : price} setPrice={setPrice} autonomy={autonomy} setAutonomy={setAutonomy} />,
        <StepFour key="step4" getErrorField={getErrorField} condition={condition} setCondition={setCondition} transmission={transmission} setTransmission={setTransmission} fuelType={fuel_type} setFuelType={setFuelType} seats={seats} setSeats={setSeats} />,
        <StepFive key="step5" getErrorField={getErrorField} images={images} setImages={setImages} currentImages={initialData ? (initialData.images ?? []) : []} features={features} setFeatures={setFeatures} />,
    ];

    useEffect(() => {
        if (isAuthenticated && user) {
            setSellerFullname(user.name);
            setSellerEmail(user.email);
            setSellerPhonenumber(user.phone);
        }

        if (initialData) {
            setTitle(initialData.title);
            setCarModel(initialData.car_model);
            setYear(initialData.year);
            setColor(initialData.color);

            setDescription(initialData.description);
            setCategory(initialData.category);
            setLocation(initialData.location);

            setMake(initialData.make);
            setMileage(initialData.mileage);
            setPrice(initialData.price);
            setAutonomy(initialData.autonomy);

            setCondition(initialData.condition);
            setTransmission(initialData.transmission);
            setFuelType(initialData.fuel_type);
            setStatus(initialData.status || '');
            setSeats(initialData.seats);
            setFeatures(initialData.features);
        }
    }, [initialData, isAuthenticated, user]);

    return (
        <div>
            {/* Car form */}
            <form onSubmit={handleSubmit}>
                <Stepper steps={steps} currentStep={currentStep} onNext={handleNext} onPrevious={handlePrevious}/>

                {currentStep === steps.length - 1 && (
                    <div className="flex items-center justify-between mt-4">
                        <LoadingButton text={initialData ? 'Save Changes' : 'Submit'} isLoading={isLoading} type="submit" className="mt-5" />
                    </div>
                )}
            </form>

            {/* Seller Form */}
            <FormModal isOpen={isModalOpen} onClose={closeSellerModal}>
                <h2 className="text-xl font-semibold mb-4 text-slate-700 flex items-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.98-3 2.98Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M12.07 8.95h-.15A1.945 1.945 0 0 1 10.04 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95ZM9.251 11.96c-1.33.89-1.33 2.34 0 3.23 1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0Z" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                    <span className='ml-2'>Seller Information</span>
                </h2>
                <p>Reach potential Buyers with an eye-catching Listing. Fill out the details below to get started</p>

                <hr className="my-5 border-gray-200" />

                <TextInput
                    label="Full Name"
                    placeholder="Eg: John Doe"
                    value={sellerFullname}
                    onChange={setSellerFullname}
                    errorMessage={getErrorField('fullname')}
                    disabled={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </TextInput>
                <TextInput
                    label="Email Address"
                    placeholder="example@example.com"
                    value={sellerEmail}
                    onChange={setSellerEmail}
                    errorMessage={getErrorField('email')}
                    disabled={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </TextInput>
                <TextInput
                    label="Your Contact Number"
                    placeholder="eg: +250..."
                    value={sellerPhonenumber}
                    onChange={setSellerPhonenumber}
                    type="number"
                    errorMessage={getErrorField('phonenumber')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </TextInput>

                <div className="flex items-center justify-between mt-4">
                    <LoadingButton onClick={isEditing ? handleUpdateCar : handleSubmitCar} text={"Confirm & Submit"} isLoading={isLoading} type="submit" className="mt-5" />
                </div>
            </FormModal>

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default CarForm;