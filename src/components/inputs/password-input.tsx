import React from 'react';
import TextInput from './text-input.tsx';

interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const PasswordInput: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <TextInput
            label={label}
            placeholder={placeholder}
            value={value}
            type="password"
            onChange={onChange}>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
            </svg>
        </TextInput>
    );
};

export default PasswordInput;