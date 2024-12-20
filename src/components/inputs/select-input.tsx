import React from 'react';

interface SelectInputProps {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    children?: React.ReactNode;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, options, onChange, children }) => {
    return (
        <div className='mt-3'>
            <label className="text-base font-medium text-gray-900">{label}</label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {children}
            </div>
            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="block w-full py-4 pl-4 pr-10 text-slate-700 placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectInput;