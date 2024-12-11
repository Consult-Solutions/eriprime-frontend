import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Cars: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Manage Cars' path='cars' />
        </div>
    );
}

export default Cars;