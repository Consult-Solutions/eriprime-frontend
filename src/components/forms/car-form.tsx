import React, { useState } from 'react';
import LoadingButton from '../buttons/loading-button.tsx';
import Stepper from '../stepper.tsx';

// Steps
import Step1 from './cars/step-one.tsx';
import Step2 from './cars/step-two.tsx';
import Step3 from './cars/step-three.tsx';
import Step4 from './cars/step-four.tsx';
import Step5 from './cars/step-five.tsx';

interface CarFormProps {
    onSubmit: (car: { 
        name: string; 
        model: string; 
        year: number; 
        description: string; 
        category: string; 
        location: string; 
        make: string; 
        mileage: number; 
        price: number; 
        condition: string; 
        transmission: string; 
        fuelType: string; 
        images: File[]
    }) => void;
    isLoading: boolean;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit, isLoading }) => {
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState<number | ''>('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [make, setMake] = useState('');
    const [mileage, setMileage] = useState<number | ''>('');
    const [price, setPrice] = useState<number | ''>('');
    const [condition, setCondition] = useState('');
    const [transmission, setTransmission] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [images, setImages] = useState<File[]>([]);

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name && model && year && description && category && location && make && mileage && price && condition && transmission && fuelType && images.length > 0) {
            onSubmit({ name, model, year: Number(year), description, category, location, make, mileage: Number(mileage), price: Number(price), condition, transmission, fuelType, images });
            setName('');
            setModel('');
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
        }
    };

    const steps = [
        <Step1 key="step1" name={name} model={model} year={year} setName={setName} setModel={setModel} setYear={setYear} />,
        <Step2 key="step2" category={category} description={description} location={location} setCategory={setCategory} setDescription={setDescription} setLocation={setLocation} />,
        <Step3 key="step3" make={make} mileage={mileage} price={price} setMake={setMake} setMileage={setMileage} setPrice={setPrice} />,
        <Step4 key="step4" condition={condition} transmission={transmission} fuelType={fuelType} setCondition={setCondition} setTransmission={setTransmission} setFuelType={setFuelType} />,
        <Step5 key="step5" images={images} setImages={setImages} />,
    ];

    return (
        <form onSubmit={handleSubmit}>
            <Stepper
                steps={steps}
                currentStep={currentStep}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
            
            {currentStep === steps.length - 1 && (
                <div className="flex items-center justify-between mt-4">
                    <LoadingButton
                        text="Submit"
                        isLoading={isLoading}
                        type="submit"
                        className="mt-5"
                    />
                </div>
            )}
        </form>
    );
};

export default CarForm;