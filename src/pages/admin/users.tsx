import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Users: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Manage Users' path='users' />
        </div>
    );
}

export default Users;