/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

interface AlertMessageProps {
    message: string;
    type?: 'success' | 'error';
    duration?: number;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message, type = 'success', duration = 3000 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
                message = '';
                type = 'error';
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [message, duration]);

    return (
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-lg transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'} ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
            {message}
        </div>
    );
};

export default AlertMessage;