/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

interface AlertMessageProps {
    message: string;
    type?: 'success' | 'error';
    duration?: number;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message, type = 'success', duration = 3000 }) => {
    const [visible, setVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState(message);
    const [alertType, setAlertType] = useState(type);
    const [key, setKey] = useState(0); // Ensures new alerts trigger properly

    useEffect(() => {
        if (message) {
            setAlertMessage(message);
            setAlertType(type);
            setVisible(true);
            setKey(prev => prev + 1); // Forces effect reset on new messages

            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [message, type, duration, key]); // Dependency includes `key` to react to new messages

    return (
        <div className={`fixed text-center z-50 bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 
            ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
            ${alertType === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
            <div className="flex items-center justify-between">
                <span>{alertMessage}</span>
                <button className="ml-4 text-lg font-bold" onClick={() => setVisible(false)}>×</button>
            </div>
        </div>
    );
};

export default AlertMessage;
