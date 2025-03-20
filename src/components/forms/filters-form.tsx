import React, { useState } from 'react';
import { BRAND_OPTIONS, CONDITION_OPTIONS, FUELTYPE_OPTIONS, TRANSMISSION_OPTIONS, TYPE_OPTIONS } from '../../services/constants.ts';
import PriceRangeInput from '../inputs/PriceRangeInput.tsx';

function FiltersForm({ onSubmit, onReset }: { onSubmit: (params: any) => void, onReset: () => void }) {
    const [priceFilter, setPriceFilter] = useState([1000000, 100000000]);
    const [typeFilter, setTypeFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [conditionFilter, setConditionFilter] = useState('');
    const [transmissionFilter, setTransmissionFilter] = useState('');
    const [fuelFilter, setFuelFilter] = useState('');

    const clearFilter = () => {
        setPriceFilter([1000000, 100000000]);
        setTypeFilter('');
        setBrandFilter('');
        setConditionFilter('');
        setTransmissionFilter('');
        setFuelFilter('');
        onReset();
    }

    const submitFilter = () => {
        const params = {
            limit: 9,
            type: typeFilter,
            brand: brandFilter,
            condition: conditionFilter,
            transmission: transmissionFilter,
            fuel: fuelFilter,
        }

        onSubmit(params);
    }

    return (<>
        <h3 className='text-2xl text-slate-700 my-5 font-bold'>Filters</h3>

        {/* Filter by Price */}
        <PriceRangeInput price={priceFilter} setPrice={setPriceFilter} />

        {/* Filter by Type */}
        <div className="flex items-center my-3">
            <label className="text-sm font-semibold text-gray-600 mr-2">Type:</label>
            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                <select id="type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                    {TYPE_OPTIONS.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Filter by Brand */}
        <div className="flex items-center my-3">
            <label className="text-sm font-semibold text-gray-600 mr-2">Brand:</label>
            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                <select id="type" value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white">
                    {BRAND_OPTIONS.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Filter by Condition */}
        <div className="flex items-center my-3">
            <label className="text-sm font-semibold text-gray-600 mr-2">Condition:</label>
            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>

                <select id="model" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white" value={conditionFilter} onChange={(e) => setConditionFilter(e.target.value)}>
                    {CONDITION_OPTIONS.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Filter by Transmission */}
        <div className="flex items-center my-3">
            <label className="text-sm font-semibold text-gray-600 mr-2">Trans:</label>
            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>

                <select id="model" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white" value={transmissionFilter} onChange={(e) => setTransmissionFilter(e.target.value)}>
                    {TRANSMISSION_OPTIONS.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Filter by Fuel */}
        <div className="flex items-center my-3">
            <label className="text-sm font-semibold text-gray-600 mr-2">Fuel:</label>
            <div className='border rounded-md px-4 py-2 text-sm focus:ring focus:ring-blue-300 focus:outline-none flex items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5.4 2.102h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M10.93 2.102 6 10.002" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>

                <select id="model" className="border-none outline-none focus:border-none focus:outline-none ml-2 bg-white" value={fuelFilter} onChange={(e) => setFuelFilter(e.target.value)}>
                    {FUELTYPE_OPTIONS.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* Apply Filter */}
        <div className='mt-5 flex justify-between items-center'>
            <button onClick={() => submitFilter()} className="bg-primary text-white px-4 py-2 rounded-lg text-sm focus:outline-none">
                Apply Filter
            </button>
            <button onClick={clearFilter} className="bg-white text-primary px-4 py-2 rounded-lg text-sm focus:outline-none ml-2 border border-gray-200">
                Clear Filter
            </button>
        </div>
    </>)
}

export default FiltersForm