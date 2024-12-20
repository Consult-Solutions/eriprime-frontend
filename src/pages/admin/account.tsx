import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Account: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Account & Profile' path='account' />
        </div>
    );
}

export default Account;