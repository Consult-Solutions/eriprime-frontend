import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Dashboard: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Overview' path='home' />
        </div>
    );
};

export default Dashboard;
