import React from 'react';
import Hero from '../components/hero.tsx';
import CarPostingSection from '../components/car-posting-section.tsx';

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Component */}
            <Hero />

            {/* Car Posting Section */}
            <section className='py-6 lg:py-6'>
                {/* new cars */}
                <CarPostingSection 
                    title="Newly Cars" 
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis." 
                />

                {/* Most Liked cars */}
                <CarPostingSection 
                    title="Most Liked Cars" 
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis." 
                />
            </section>
        </div>
    );
};

export default Home;
