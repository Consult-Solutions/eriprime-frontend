import React, { useState } from 'react';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import api from '../../services/api.ts';
import { useGlobalAlert } from '../../contexts/AlertContext.tsx';
import AlertMessage from '../alerts/alert-message.tsx';

interface OauthProps {
    onLoading: (loading: boolean) => void;
    callback: (response: any) => void;
    fallback: (error: any) => void;
}

const ContinueWithGoogle: React.FC<OauthProps> = ({ onLoading, callback, fallback }) => {
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { setGlobalAlert } = useGlobalAlert();
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');

    const googleApis = process.env.REACT_APP_GOOGLE_APIS_URL;

    const handleSubmit = async (tokenResponse: Omit<TokenResponse, "error" | "error_description" | "error_uri">) => {
        try {
            onLoading(true);
            setLoading(true);

            const userInfoResponse = await fetch(`${googleApis}/oauth2/v3/userinfo`, {
                headers: { 'Authorization': `Bearer ${tokenResponse.access_token}` },
            });

            const userInfoText = await userInfoResponse.text();

            try {
                const userInfo = JSON.parse(userInfoText);
                const { name, email, picture, email_verified } = userInfo;

                if (!email_verified) {
                    setAlertMessage('Email is not verified. Please verify your email address.');
                    setAlertType('error');
                    onLoading(false);
                    setLoading(false);
                    return;
                }

                api.post<{ access_token: string, message: string }>('/auth/oauth/callback', { name, picture, email, password: email }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    const accessToken = response.data.access_token;

                    localStorage.setItem('accessToken', accessToken);

                    setGlobalAlert('Authentication With Google Success', 'success');
                    setAlertMessage(response.data.message);
                    setAlertType('success');
                    callback(response);
                }).catch((error) => {
                    setAlertMessage('An error occurred. ' + error.response.data.message);
                    setAlertType('error');
                    fallback(error);
                });
            } catch (jsonError) {
                setAlertMessage('An error occurred. Please try again.');
                setAlertType('error');
                fallback(jsonError);
            }
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertType('error');
            fallback(error);
        } finally {
            onLoading(false);
            setLoading(false);
        }
    };

    const loginWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => handleSubmit(tokenResponse),
        onError: error => { },
    });

    return (
        <div>
            {!loading && <button onClick={() => loginWithGoogle()} type="button" className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                <div className="absolute inset-y-0 left-0 p-4">
                    <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                        ></path>
                    </svg>
                </div>
                Continue with Google
            </button>}

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    )
}

export default ContinueWithGoogle;