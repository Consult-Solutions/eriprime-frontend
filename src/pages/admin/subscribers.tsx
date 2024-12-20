import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Subscribers: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Manage subscribers' path='subscribers' />
        </div>
    );
}

export default Subscribers;