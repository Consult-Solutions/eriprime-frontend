import React, { useEffect, useState } from 'react';
import LoadingButton from '../buttons/loading-button.tsx';
import Stepper from '../stepper.tsx';

// Steps
import StepOne from './cars/step-one.tsx';
import StepTwo from './cars/step-two.tsx';
import StepThree from './cars/step-three.tsx';
import StepFour from './cars/step-four.tsx';
import StepFive from './cars/step-five.tsx';

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
    features: string[];
    seats: number;
    autonomy: string;
    color: string;
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
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [make, setMake] = useState('');
    const [mileage, setMileage] = useState<number | ''>('');
    const [price, setPrice] = useState<number | ''>('');
    const [autonomy, setAutonomy] = useState('');
    const [condition, setCondition] = useState('');
    const [transmission, setTransmission] = useState('');
    const [fuel_type, setFuelType] = useState('');
    const [seats, setSeats] = useState(0);
    const [status, setStatus] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [features, setFeatures] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [missingFields, setMissingFields] = useState<string[]>([]);

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
        setFeatures([]);
        setSeats(0);
        setAutonomy('');
        setColor('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const missing: string[] = [];
        if (!title) missing.push('title');
        if (!car_model) missing.push('model');
        if (!year) missing.push('year');
        if (!description) missing.push('description');
        if (!category) missing.push('type');
        if (!location) missing.push('location');
        if (!make) missing.push('make');
        if (!mileage) missing.push('mileage');
        if (!price) missing.push('price');
        if (!condition) missing.push('condition');
        if (!transmission) missing.push('transmission');
        if (!fuel_type) missing.push('fuel_type');
        if (images.length === 0) missing.push('images');
        if (features.length === 0) missing.push('features');
        if (seats <= 0) missing.push('seats');
        if (!autonomy) missing.push('autonomy');
        if (!color) missing.push('color');

        if (missing.length > 0) {
            setMissingFields(missing);
            onError && onError('There are missing fields. Please fill all fields');
            return;
        }

        const payload = { title, car_model, year: Number(year), description, category, location, make, mileage: Number(mileage), price: Number(price), condition, transmission, fuel_type, images, status, features, seats, autonomy, color };

        if (isEditing) {
            onUpdate(payload, initialData._id);
        } else {
            onSubmit(payload);
        }

        resetForm();
    };

    const getErrorField = (field: string) => {
        return missingFields.includes(field) ? `${field} is required` : '';
    };

    // Steps
    const steps = [
        <StepOne key="step1" getErrorField={getErrorField} name={title} setName={setTitle} model={car_model} setModel={setCarModel} year={year === '' ? 2024 : year} setYear={(value) => setYear(value)} color={color} setColor={setColor} />,
        <StepTwo key="step2" getErrorField={getErrorField} category={category} description={description} location={location} status={status} setCategory={setCategory} setDescription={setDescription} setLocation={setLocation} setStatus={setStatus} />,
        <StepThree key="step3" getErrorField={getErrorField} make={make} setMake={setMake} mileage={mileage === '' ? 0 : mileage} setMileage={setMileage} price={price === '' ? 0 : price} setPrice={setPrice} autonomy={autonomy} setAutonomy={setAutonomy} />,
        <StepFour key="step4" getErrorField={getErrorField} condition={condition} setCondition={setCondition} transmission={transmission} setTransmission={setTransmission} fuelType={fuel_type} setFuelType={setFuelType} seats={seats} setSeats={setSeats} />,
        <StepFive key="step5" getErrorField={getErrorField} images={images} setImages={setImages} currentImages={initialData ? (initialData.images ?? []) : []} features={features} setFeatures={setFeatures} />,
    ];

    useEffect(() => {
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