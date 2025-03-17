import React from "react";
import { Link } from "react-router-dom";

const Beliefs: React.FC = () => {
    return (
        <section className="bg-cover bg-center dark:bg-darkmode overflow-hidden my-5 py-14">
            <div className="mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* COLUMN-1 */}
                    <div className="bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 pt-12 px-6 sm:px-10 md:px-24 pb-20 md:pb-28 rounded-3xl">
                        <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
                            beliefs
                        </h2>
                        <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold text-primary mb-5 text-center sm:text-start">
                            Honesty{" "}
                            <span className="text-primary/60">
                                and hard work are our beliefs.
                            </span>
                        </h3>
                        <h5 className="text-primary/75 pt-2 mb-16 text-center sm:text-start">
                            We believe in honesty and hard work. Our commitment to these values ensures that you receive the best service and quality. Trust us to help you find the car that meets your needs and exceeds your expectations.
                        </h5>
                        <div className="text-center sm:text-start">
                            <Link to="/about-us" className="text-base py-3 px-8 sm:py-5 sm:px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode">
                                About us
                            </Link>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="bg-gray-200 pt-12 px-6 sm:px-10 md:px-24 pb-20 md:pb-28 rounded-3xl bg-no-repeat bg-bottom">
                        <h2 className="text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase">
                            ATTRACT
                        </h2>
                        <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold text-black mb-5 text-center sm:text-start">
                            <span className="text-primary">Get</span> that Car you Always Dream of.
                        </h3>
                        <h5 className="pt-2 mb-16 text-center sm:text-start text-black/75 text-sm">
                            Discover the car you've always dreamed of. Our collection offers a wide range of options to suit your style and needs. Experience the joy of driving your perfect car today.
                        </h5>
                        <div className="text-center sm:text-start">
                            <Link  to="/about-us" className="text-base py-3 px-8 sm:py-5 sm:px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beliefs;