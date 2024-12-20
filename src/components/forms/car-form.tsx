import React, { useEffect, useState } from 'react';
import LoadingButton from '../buttons/loading-button.tsx';
import Stepper from '../stepper.tsx';

// Steps
import Step1 from './cars/step-one.tsx';
import Step2 from './cars/step-two.tsx';
import Step3 from './cars/step-three.tsx';
import Step4 from './cars/step-four.tsx';
import Step5 from './cars/step-five.tsx';

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
    status?: string;
    images: File[],
    new_images?: File[];
};

interface CarFormProps {
    onSubmit: (car: Car) => void;
    onUpdate: (car: Car, id: string) => void;
    isLoading: boolean;
    isEditing: boolean;
    initialData?: any;
    onError?: (errors: string) => void;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit, onUpdate, isLoading, isEditing, initialData, onError }) => {
    const [title, setTitle] = useState('');
    const [car_model, setCarModel] = useState('');
    const [year, setYear] = useState<number | ''>('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [make, setMake] = useState('');
    const [mileage, setMileage] = useState<number | ''>('');
    const [price, setPrice] = useState<number | ''>('');
    const [condition, setCondition] = useState('');
    const [transmission, setTransmission] = useState('');
    const [fuel_type, setFuelType] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [status, setStatus] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

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
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title && car_model && year && description && category && location && make && mileage && price && condition && transmission && fuel_type && images.length > 0) {
            const payload = { title, car_model, year: Number(year), description, category, location, make, mileage: Number(mileage), price: Number(price), condition, transmission, fuel_type, images, status };

            if (isEditing) {
                onUpdate(payload, initialData._id);
            } else {
                onSubmit(payload);
            }

            resetForm();
        } else {
            onError && onError('There are missing fields. Please fill all fields');
        }
    };

    // Steps
    const steps = [
        <Step1 key="step1" name={title} model={car_model} year={year} setName={setTitle} setModel={setCarModel} setYear={setYear} />,
        <Step2 key="step2" category={category} description={description} location={location} status={status} setCategory={setCategory} setDescription={setDescription} setLocation={setLocation} setStatus={setStatus} />,
        <Step3 key="step3" make={make} mileage={mileage} price={price} setMake={setMake} setMileage={setMileage} setPrice={setPrice} />,
        <Step4 key="step4" condition={condition} transmission={transmission} fuelType={fuel_type} setCondition={setCondition} setTransmission={setTransmission} setFuelType={setFuelType} />,
        <Step5 key="step5" images={images} setImages={setImages} currentImages={initialData?.images || []} />,
    ];

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setCarModel(initialData.car_model);
            setYear(initialData.year);

            setDescription(initialData.description);
            setCategory(initialData.category);
            setLocation(initialData.location);

            setMake(initialData.make);
            setMileage(initialData.mileage);
            setPrice(initialData.price);

            setCondition(initialData.condition);
            setTransmission(initialData.transmission);
            setFuelType(initialData.fuel_type);
            setStatus(initialData.status || '');
        }
    }, [initialData]);

    return (
        <form onSubmit={handleSubmit}>
            <Stepper steps={steps} currentStep={currentStep} onNext={handleNext} onPrevious={handlePrevious}/>

            {currentStep === steps.length - 1 && (
                <div className="flex items-center justify-between mt-4">
                    <LoadingButton text={initialData ? 'Save Changes' : 'Submit'} isLoading={isLoading} type="submit" className="mt-5" />
                </div>
            )}
        </form>
    );
};

export default CarForm;