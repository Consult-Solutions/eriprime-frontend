import React, { useState } from 'react'
import TextInput from '../inputs/text-input.tsx'
import TextAreaInput from '../inputs/textarea-input.tsx'
import api from '../../services/api.ts';
import AlertMessage from '../alerts/alert-message.tsx';
import AuthButton from '../buttons/auth-button.tsx';

function InquiryForm({ carId, onSuccess }: { carId: string; onSuccess: () => void }) {
    // Form
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [isLoading, setIsloading] = useState(false);

    const handleSubmitInquiry = () => {
        if (!fullname || !email || !message) {
            setAlertMessage('all inputs are required');
            setAlertType('error');
            return;
        }

        try {
            setIsloading(true);

            api.post('/user/inquiries', {
                name: fullname,
                email,
                message,
                carId: carId
            }, {
                headers: { 'Accept': 'application/json' }
            }).then((response: any) => {
                setFullname('');
                setEmail('');
                setMessage('');

                setAlertMessage(response.data.message);
                setAlertType('success');
                setIsloading(false);

                onSuccess();
            }).catch((error: { response: { data: { message: string; }; }; }) => {
                setAlertMessage('An error occurred. ' + error.response.data.message);
                setAlertType('error');
                setIsloading(false);
            })
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertType('error');
            setIsloading(false);
        }
    }

    return (<>
        <h2 className="text-xl font-semibold mb-4 text-slate-700 flex items-center">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M15.995 11h.008M11.995 11h.009M7.995 11h.008" stroke="#697689" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
            <span className='ml-2'>Send Your Inquiry Now!</span>
        </h2>

        <p>Interested in this car? Send us your inquiry and we'll get back to you as soon as possible. Fill out the details below to get started.</p>

        <hr className="my-5 border-gray-200" />

        <form onSubmit={handleSubmitInquiry}>
            <TextInput
                label="Your Fullname"
                placeholder="Eg: John Doe"
                value={fullname}
                onChange={setFullname}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </TextInput>

            <TextInput
                label="Your Email Address"
                placeholder="example@example.com"
                value={email}
                onChange={setEmail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="#697689" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </TextInput>

            <TextAreaInput
                label="Message"
                placeholder="Write a short Message...."
                value={message}
                onChange={setMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 12h12" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4" stroke="#697689" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </TextAreaInput>

            <div className="flex items-center justify-between mt-4">
                <AuthButton text="Send Now" isLoading={isLoading} type="submit" className="mt-5" />
            </div>
        </form>

        {/* Alert Message */}
        <AlertMessage message={alertMessage} type={alertType} />
    </>)
}

export default InquiryForm