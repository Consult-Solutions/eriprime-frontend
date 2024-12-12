// Step4.tsx
import React from 'react';
import TextInput from '../../inputs/text-input.tsx';

interface Step4Props {
    condition: string;
    transmission: string;
    fuelType: string;
    setCondition: (value: string) => void;
    setTransmission: (value: string) => void;
    setFuelType: (value: string) => void;
}

const Step4: React.FC<Step4Props> = ({ condition, transmission, fuelType, setCondition, setTransmission, setFuelType }) => {
    return (
        <div>
            <TextInput
                label="Car Condition"
                placeholder="Enter car condition"
                value={condition}
                onChange={setCondition}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <TextInput
                label="Car Transmission"
                placeholder="Enter car transmission"
                value={transmission}
                onChange={setTransmission}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <TextInput
                label="Car Fuel Type"
                placeholder="Enter car fuel type"
                value={fuelType}
                onChange={setFuelType}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
        </div>
    );
};

export default Step4;