/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SelectInput from '../../inputs/select-input.tsx';
import TextAreaInput from '../../inputs/textarea-input.tsx';
import TextInput from '../../inputs/text-input.tsx';
import api from '../../../services/api.ts';
import { useAuth } from '../../../contexts/AuthContext.tsx';
import AlertMessage from '../../alerts/alert-message.tsx';

interface Step2Props {
    category: string;
    description: string;
    location: string;
    setCategory: (value: string) => void;
    setDescription: (value: string) => void;
    setLocation: (value: string) => void;
}

const Step2: React.FC<Step2Props> = ({ category, description, location, setCategory, setDescription, setLocation }) => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();

    const getCategories = () => {
        try {
            setLoading(true);
    
            api.get('/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                const categories = (response.data as { categories: { name: string; _id: string }[] }).categories.map((category: { name: string; _id: string }) => ({
                    value: category._id,
                    label: category.name
                }));
    
                setCategories(categories);
                setLoading(false);
            }).catch((error) => {
                setAlertMessage('An error occurred. ' + error.response.data.message);
                setAlertType('error');
                setLoading(false);
            });
        } catch (error) {
            setAlertMessage('An error occurred. Pls try again');
            setAlertType('error');
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            {loading ? (<>Fetching Categories...</>) : (
                <SelectInput
                    label="Category"
                    value={category}
                    options={categories}
                    onChange={setCategory}
                />
            )}
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

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default Step2;