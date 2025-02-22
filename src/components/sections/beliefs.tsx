import React from "react";
import { Link } from "react-router-dom";

const Beliefs: React.FC = () => {
    return (
        <section className="bg-cover bg-center dark:bg-darkmode overflow-hidden my-5">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* COLUMN-1 */}

                    <div className="bg-primary/20 pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-no-repeat bg-right-bottom" style={{ backgroundImage: 'url(/images/beliefs/swirls.svg)' }}>
                        <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
                            beliefs
                        </h2>
                        <h3 className="text-6xl sm:text-65xl font-bold text-primary mb-5 text-center sm:text-start">
                            Honesty{" "}
                            <span className="text-primary/60">
                                and hard work are our beliefs.
                            </span>
                        </h3>
                        <h5 className="text-primary/75 pt-2 mb-16 text-center sm:text-start">
                            Quis ipsum suspendisse ultrices gravida risus commodo viverra
                            maecenas accumsan lacus vel facilisis.
                        </h5>
                        <div className="text-center sm:text-start">
                            <Link
                                to="#"
                                className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="">
                        <div className="pt-12 bg-gray-200 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-no-repeat bg-bottom" style={{ backgroundImage: 'url(/images/beliefs/bg.svg)' }}>
                            <h2 className="text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase">
                                BUILD
                            </h2>
                            <h3 className="text-6xl sm:text-65xl font-bold text-black mb-5 text-center sm:text-start">
                                <span className="text-primary">Build</span> that great idea that
                                you have.
                            </h3>
                            <h5 className="pt-2 mb-16 text-center sm:text-start text-black/75 text-lg">
                                Quis ipsum suspendisse ultrices gravida risus commodo viverra
                                maecenas accumsan lacus vel facilisis.
                            </h5>
                            <div className="text-center sm:text-start">
                                <Link
                                    to="#"
                                    className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beliefs;