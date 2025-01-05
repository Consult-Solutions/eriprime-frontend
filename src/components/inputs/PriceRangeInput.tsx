import React from 'react';

interface PriceRangeInputProps {
    price: number;
    setPrice: (price: number) => void;
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({ price, setPrice }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    };

    return (
        <div className="flex flex-col items-center">
            <label className="text-sm font-semibold text-gray-600 mb-2">Price Range:</label>
            <div className="flex items-center w-full">
                <input
                    type="range"
                    min="0"
                    max="1000000000"
                    value={price}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="ml-4 text-sm font-bold text-slate-700">{`${new Intl.NumberFormat('en-RW', { style: 'currency', currency: 'RWF' }).format(Number(price))}`}</span>
            </div>
        </div>
    );
};

export default PriceRangeInput;