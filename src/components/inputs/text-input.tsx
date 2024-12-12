import React from 'react';

interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    type?: string;
    onChange: (value: string) => void;
    children?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, value, type, onChange, children }) => {
    return (
        <div className='mt-3'>
            <label className="text-base font-medium text-slate-700 capitalize">{label}</label>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {children}
                </div>

                <input
                    type={type ?? "text"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                />
            </div>
        </div>
    );
};

export default TextInput;