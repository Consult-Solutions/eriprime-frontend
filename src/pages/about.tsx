import React from 'react';
import MetaTags from '../components/MetaTags.tsx';
import Beliefs from '../components/sections/beliefs.tsx';

const About: React.FC = () => {
    return (
        <>
            <MetaTags
                title="About Eriprime"
                description="Learn more about Eriprime, our mission, and our commitment to providing the best car trading experience. Discover how we can help you find your dream car and support you every step of the way."
                keywords="Eriprime, about us, car trading, car trader, car trader africa, car trader rwanda, car trader kenya, car trader nigeria, car trader ghana, car trader south africa, car trader tanzania, car trader uganda"
                canonical={`${process.env.PUBLIC_URL}/about-us`}
                ogTitle="About Eriprime"
                ogDescription="Discover more about Eriprime, our mission, and our dedication to providing the best car trading experience. Learn how we can help you find your dream car."
                ogImage={`${process.env.PUBLIC_URL}/images/logos/logo.jpg`}
                twitterCard="summary_large_image"
            />

            <section className="py-10 bg-white sm:py-16 lg:py-20">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
                        <div className="">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Elevate Your Experience with Us</h2>
                            <p className="text-base leading-relaxed text-gray-600 mt-10">
                                Join us on a way to transform your experience. Our innovative solutions and dedicated team are here to help you achieve new heights. Experience unparalleled growth and success with our expert guidance and support.
                            </p>
                        </div>

                        <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                            <div className="relative w-[500px] mt-4 mb-10 ml-auto">
                                <img className="ml-auto rounded-lg" src="https://images.unsplash.com/photo-1533630217389-3a5e4dff5683?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Happy clients at Consult Solution" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <Beliefs />
            </section>
        </>
    );
};

export default About;
