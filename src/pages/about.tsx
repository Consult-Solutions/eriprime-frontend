import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
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
                            <img className="ml-auto" src="https://img.freepik.com/free-photo/family-enjoying-views-car-trip_23-2149401820.jpg?t=st=1734689217~exp=1734692817~hmac=939d7d3dffd544b63df7b1724100dca4d81eef3ac69f90475cf4906760d5f2de&w=1800" alt="Happy clients at Consult Solution" />

                            <img className="absolute -top-4 -left-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />

                            <div className="absolute -bottom-10 -left-16">
                                <div className="bg-yellow-300">
                                    <div className="px-8 py-10">
                                        <span className="block text-4xl font-bold text-black lg:text-5xl"> 50% </span>
                                        <span className="block mt-2 text-base leading-tight text-black"> Low Price Rate <br />On Everything </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
