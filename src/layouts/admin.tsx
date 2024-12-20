import React from 'react';
import SideBar from '../components/admin/side-bar.tsx';
import MainContents from '../components/admin/main-content.tsx';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
    return (
        <div className='bg-slate-50'>
            <div className="flex overflow-hidden px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Side Base */}
                <SideBar />

                {/* Main Content */}
                <MainContents>
                    <Outlet />
                </MainContents>
            </div>
        </div>
    );
};

export default AdminLayout;