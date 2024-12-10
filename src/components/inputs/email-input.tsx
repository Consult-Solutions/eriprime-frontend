import React from 'react';
import TextInput from './text-input.tsx';

interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const EmailInput: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <TextInput
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
        </TextInput>
    );
};

export default EmailInput;