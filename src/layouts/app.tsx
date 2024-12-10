import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer.tsx';
import NavBar from '../components/navbar.tsx';
import GlobalAlertMessage from '../components/alerts/global-alert-message.tsx';

const AppLayout: React.FC = () => {
    return (
        <main className="layout">
            {/* Alert Message Component */}
            <GlobalAlertMessage />

            {/* Nav bar Componet */}
            <NavBar />

            {/*  */}
            <div className='app-body'><Outlet /></div>

            {/* Footer Component */}
            <Footer />
        </main>
    );
};

export default AppLayout;