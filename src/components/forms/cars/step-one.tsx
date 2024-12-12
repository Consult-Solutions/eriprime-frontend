// Step1.tsx
import React from 'react';
import TextInput from '../../inputs/text-input.tsx';

interface Step1Props {
    name: string;
    model: string;
    year: number | '';
    setName: (value: string) => void;
    setModel: (value: string) => void;
    setYear: (value: number | '') => void;
}

const Step1: React.FC<Step1Props> = ({ name, model, year, setName, setModel, setYear }) => {
    return (
        <div>
            <TextInput
                label="Car Name"
                placeholder="Enter car name"
                value={name}
                onChange={setName}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <TextInput
                label="Car Model"
                placeholder="Enter car model"
                value={model}
                onChange={setModel}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
            <TextInput
                label="Year"
                placeholder="Enter year"
                value={year.toString()}
                onChange={(value) => setYear(value ? Number(value) : '')}
                type="number"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
        </div>
    );
};

export default Step1;