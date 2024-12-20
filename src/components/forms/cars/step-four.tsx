import React from 'react';
import SelectInput from '../../inputs/select-input.tsx';
import { CONDITION_OPTIONS, TRANSMISSION_OPTIONS, FUELTYPE_OPTIONS } from '../../../services/constants.ts';

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
            <SelectInput
                label="Car Condition"
                value={condition}
                options={CONDITION_OPTIONS}
                onChange={setCondition}>
            </SelectInput>
            <SelectInput
                label="Car Transmission"
                value={transmission}
                options={TRANSMISSION_OPTIONS}
                onChange={setTransmission}>
            </SelectInput>
            <SelectInput
                label="Car Fuel Type"
                value={fuelType}
                options={FUELTYPE_OPTIONS}
                onChange={setFuelType}>
            </SelectInput>
        </div>
    );
};

export default Step4;