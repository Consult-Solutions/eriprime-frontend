import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Activities: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Activities' path='activities' />
        </div>
    );
}

export default Activities;