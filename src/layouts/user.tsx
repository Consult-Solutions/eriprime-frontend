import React from 'react';
import MainContents from '../components/admin/main-content.tsx';
import { Outlet } from 'react-router-dom';

const AuthUserLayout: React.FC = () => {
    return (
        <div className='bg-slate-50'>
            <div className="flex overflow-hidden px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Side Base */}
                {/* <SideBar /> */}

                {/* Main Content */}
                <MainContents>
                    <Outlet />
                </MainContents>
            </div>
        </div>
    );
};

export default AuthUserLayout;