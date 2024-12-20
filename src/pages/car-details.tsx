import React, { useEffect, useState } from 'react';
import CarPostingSection from '../components/car-posting-section.tsx';
import { useAuth } from '../contexts/AuthContext.tsx';
import api from '../services/api.ts';
import { useParams } from 'react-router-dom';
import FetchLoader from '../components/loaders/fetching-loader.tsx';
import AlertMessage from '../components/alerts/alert-message.tsx';

interface Car {
    title: string;
    images: string[];
    price: string;
    make: string;
    car_model: string;
    transmission: string;
    fuel_type: string;
    description: string;
}

const CarDetails: React.FC = () => {
    const [isLoading, setIsloading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    
    const [car, setCar] = useState<Car | null>(null);
    const [relatedCars, setRelatedCars] = useState<any[]>([]);

    const { token } = useAuth();
    const { id } = useParams<{ id: string }>();
    const apiURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (id) {
            const fetchCarDetails = async () => {
        
                setIsloading(true);
        
                try {
                    api.get(`/cars/show/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((response: any) => {
                        setCar(response.data.data);
                    }).catch(() => {
                        setAlertMessage('An error occurred. Unable to fetch car details.');
                        setAlertType('error');
                    });
                } catch (error) {
                    setAlertMessage('An error occurred. Something went wrong');
                    setAlertType('error');
                } finally {
                    setIsloading(false);
                }
            }

            const fetchRelatedCars = async () => {
                try {
                    api.get(`/cars/related/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((response: any) => {
                        setRelatedCars(response.data.data);
                    }).catch(() => {
                        setAlertMessage('An error occurred. Unable to fetch related cars.');
                        setAlertType('error');
                    });
                } catch (error) {
                    setAlertMessage('An error occurred. Something went wrong');
                    setAlertType('error');
                } finally {
                    setIsloading(false);
                }
            }

            fetchCarDetails();
            fetchRelatedCars();
        }
    }, [id, isLoading, token]);

    return (
        <div>
            {isLoading && (<div className='h-96 flex items-center justify-center'><FetchLoader /></div>)}

            {/* Car Details */}
            {(!isLoading && car) && <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <div className="relative overflow-hidden">
                                <span className="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 bg-orange">Sale</span>

                                <div className="gallery mb-6">
                                    <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
                                        <div className="swiper-wrapper" id="swiper-wrapper-5b26c8f3eb7d9756" aria-live="polite">
                                            <div className="swiper-slide swiper-slide-active w-[559px] border border-gray-200 rounded-lg" role="group" aria-label="1 / 5">
                                                <img src={car && car.images ? `${apiURL}${car.images[0]}` : 'https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180'} alt={car ? car.title : 'default title'} className='rounded-lg' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gallery-nav relative">
                                    <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs">
                                        <div className="swiper-wrapper flex items-center overflow-auto" id="swiper-wrapper-ba56aeabc563cf4d" aria-live="polite">
                                                {car && car.images.map((image: string, index: number) => (
                                                    <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next  w-[133.75px] mr-[8px]" data-swiper-slide-index="1" role="group" aria-label="2 / 5">
                                                        <div key={index} className="swiper-slide w-[133.75px] mr-[8px]" data-swiper-slide-index={index} role="group" aria-label={`${index + 1} / ${car.images.length}`}>
                                                            <a href="/">
                                                                <img src={apiURL+image} alt={car.title} className='rounded-lg' />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold capitalize text-slate-700">{car && car.title}</h3>
                            <h2 className="font-bold flex items-center text-md leading-none text-orange my-3 text-2xl text-green-700">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g opacity=".4" stroke="#37d67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.752 16.86v2.03c0 1.72-1.6 3.11-3.57 3.11-1.97 0-3.58-1.39-3.58-3.11v-2.03c0 1.72 1.6 2.94 3.58 2.94 1.97 0 3.57-1.23 3.57-2.94Z"></path><path d="M10.75 14.112c0 .5-.14.96-.38 1.36-.59.97-1.8 1.58-3.2 1.58-1.4 0-2.61-.62-3.2-1.58-.24-.4-.38-.86-.38-1.36 0-.86.4-1.63 1.04-2.19.65-.57 1.54-.91 2.53-.91.99 0 1.88.35 2.53.91.66.55 1.06 1.33 1.06 2.19Z"></path><path d="M10.752 14.11v2.75c0 1.72-1.6 2.94-3.57 2.94-1.97 0-3.58-1.23-3.58-2.94v-2.75c0-1.72 1.6-3.11 3.58-3.11.99 0 1.88.35 2.53.91.64.56 1.04 1.34 1.04 2.2Z"></path></g><path d="M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z" stroke="#37d67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 10.5v-2c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h9c.26 0 .51.01.75.05C19.33 3.85 21 5.76 21 8.5v1.45h-2.08c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87H21v1.45c0 3-2 5-5 5h-2.5" stroke="#37d67a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                <span className='ml-3'>{new Intl.NumberFormat('en-RW', { style: 'currency', currency: 'RWF' }).format(Number(car && car.price))}</span>
                            </h2>

                            <div className='p-3 bg-primary/20 rounded-lg border border-[#03783d]/50 mt-10 mb-5'>
                                <div className="mb-3 font-bold">{car && car.make} - {car && car.car_model}</div>
                                <div className="font-bold">{car && car.transmission} - {car && car.fuel_type}</div>
                            </div>

                            <div className="mb-3"><span>Dealler:</span> <span className="font-semibold">9 left in stock</span></div>
                            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <p className="mb-8">{car && car.description}</p>

                            <div>
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center mt-8">
                                        <div className="">
                                            <button className="bg-primary/90 flex items-center rounded-lg leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.79 14.69h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07C17.98 2.77 16.97 2 16.01 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.61.56 2.92 2.22 2.92ZM12 15v7M8 22h8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                                                <span className='ml-3'>Contact Us</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div id="maintab" className="pb-5 mt-10">
                    <div className="grid grid-cols-1 gap-x-5">
                        <div className="border border-gray-200 rounded-lg border-solid p-8">
                            <ul className="custom-tab-nav flex flex-wrap items-center mb-10 -mx-5 -my-1">
                                <li className="mx-5 my-1 active"><a className="pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-orange relative before:transition-all ease-out" href="#description">Description</a></li>
                                <li className="mx-5 my-1"><a className="pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-orange relative before:transition-all ease-out" href="#product-details">Product Details</a></li>
                                <li className="mx-5 my-1"><a className="pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 before:w-0 before:h-2px before:empty before:bg-orange relative before:transition-all ease-out" href="#review">Reviews</a></li>
                            </ul>
                            <div id="description" className="custom-tab-content">
                                <div>
                                    <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>}

            {/* Car Posting Section */}
            {relatedCars.length > 1 && <section className='py-4 lg:py-4'>
                {/* new cars */}
                <CarPostingSection
                    title="Related Listings"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
                    cars={relatedCars}
                    isLoading={isLoading}
                />
            </section>}

            {/* Alert Message */}
            <AlertMessage message={alertMessage} type={alertType} />
        </div>
    );
};

export default CarDetails;
