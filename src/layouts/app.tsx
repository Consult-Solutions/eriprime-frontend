import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer.tsx';
import NavBar from '../components/navbar.tsx';

const AppLayout: React.FC = () => {
    return (
        <main className="layout">
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