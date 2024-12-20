import React from 'react';
import SectionTitle from '../../components/admin/section-title.tsx';

const Reports: React.FC = () => {
    return (
        <div className='section'>
            {/* Section Title */}
            <SectionTitle title='Reports & Insights' path='reports' />
        </div>
    );
}

export default Reports;