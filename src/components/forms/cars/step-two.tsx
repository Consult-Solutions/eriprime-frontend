// Step2.tsx
import React from 'react';
import SelectInput from '../../inputs/select-input.tsx';
import TextAreaInput from '../../inputs/textarea-input.tsx';
import TextInput from '../../inputs/text-input.tsx';

interface Step2Props {
    category: string;
    description: string;
    location: string;
    setCategory: (value: string) => void;
    setDescription: (value: string) => void;
    setLocation: (value: string) => void;
}

const Step2: React.FC<Step2Props> = ({ category, description, location, setCategory, setDescription, setLocation }) => {
    return (
        <div>
            <SelectInput
                label="Category"
                value={category}
                options={[
                    { value: '', label: '--Select category--' },
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                ]}
                onChange={setCategory}
            />
            <TextAreaInput
                label="Description"
                placeholder="Enter description"
                value={description}
                onChange={setDescription}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextAreaInput>
            
            <TextInput
                label="Current Location"
                placeholder="Enter location"
                value={location}
                onChange={setLocation}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </TextInput>
        </div>
    );
};

export default Step2;