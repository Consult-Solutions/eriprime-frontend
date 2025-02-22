import React, { useState } from 'react';
import EmailInput from '../../components/inputs/email-input.tsx';
import PasswordInput from '../../components/inputs/password-input.tsx';
import AuthButton from '../buttons/auth-button.tsx';
import OAuth from '../oauth/oauth.tsx';
import api from '../../services/api.ts';
import { Link } from 'react-router-dom';

interface LoginFormProps {
    formTitle?: string;
    onSuccess: (reponse: any) => void;
    onError: (error: any) => void;
    children: React.ReactNode;
}

interface LoginData {
    fullName?: string; 
    email?: string; 
    password?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ formTitle, onSuccess, onError, children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<LoginData>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length > 0) {
            onError(validationErrors);
            return;
        }

        setErrors({});

        try {
            setLoading(true);

            api.post<{ access_token: string }>('/auth/signin', { email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                const accessToken = response.data.access_token;
                
                localStorage.setItem('accessToken', accessToken);

                setLoading(false);
                onSuccess(response);
            }).catch((error) => {
                setLoading(false);
                onError(error)
            })
        } catch (error) {
            setLoading(false);
            onError(error)
        }
    };

    return (<>
        {children}      

        <div className='signup-form mt-5'>
            <form onSubmit={handleSubmit} className="space-y-5">
                <EmailInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={setEmail}
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}

                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPassword}
                />
                {errors.password && <span className="text-red-600 text-sm">{errors.password}</span>}

                <div className="flex justify-between">
                    <div></div>
                    <Link to="/forgot" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Forgot Password?</Link>
                </div>

                <AuthButton text="Login" isLoading={loading} type="submit" className="mt-5" />
            </form>
        </div>

        {/* Continue with oauth */}
        <OAuth onLoading={setLoading} />
    </>)
}

export default LoginForm;