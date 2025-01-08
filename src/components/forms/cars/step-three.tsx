import React from 'react';
import TextInput from '../../inputs/text-input.tsx';
import SelectInput from '../../inputs/select-input.tsx';

interface StepThreeProps {
    make: string;
    setMake: (value: string) => void;
    mileage: number;
    setMileage: (value: number) => void;
    price: number;
    setPrice: (value: number) => void;
    autonomy: string;
    setAutonomy: (value: string) => void;
    getErrorField: (field: string) => string;
}

const AUTONOMIES = [
    { value: '', label: 'Select Autonomy' },
    { value: 'Level 0 (No Automation)', label: 'Level 0 (No Automation)' },
    { value: 'Level 1 (Driver Assistance)', label: 'Level 1 (Driver Assistance)' },
    { value: 'Level 2 (Partial Automation)', label: 'Level 2 (Partial Automation)' },
    { value: 'Level 3 (Conditional Automation)', label: 'Level 3 (Conditional Automation)' },
    { value: 'Level 4 (High Automation)', label: 'Level 4 (High Automation)' },
    { value: 'Level 5 (Full Automation)', label: 'Level 5 (Full Automation)' },
]

const StepThree: React.FC<StepThreeProps> = ({ make, setMake, mileage, setMileage, price, setPrice, autonomy, setAutonomy, getErrorField }) => {
    return (
        <div>
            <TextInput
                label="Car Brand"
                placeholder="eg: Toyota"
                value={make}
                onChange={setMake}
                errorMessage={getErrorField('make')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <TextInput
                label="Car Mileage"
                placeholder="Eg: 2345"
                value={mileage.toString()}
                onChange={(value) => setMileage(value ? Number(value) : 0)}
                type="number"
                errorMessage={getErrorField('mileage')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <TextInput
                label="Car Price"
                placeholder="Eg: 20,000,000"
                value={price.toString()}
                onChange={(value) => setPrice(value ? Number(value) : 0)}
                type="number"
                errorMessage={getErrorField('price')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <SelectInput
                label="Car Autonomy"
                value={autonomy}
                options={AUTONOMIES}
                onChange={setAutonomy}
                errorMessage={getErrorField('autonomy')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </SelectInput>
        </div>
    );
};

export default StepThree;