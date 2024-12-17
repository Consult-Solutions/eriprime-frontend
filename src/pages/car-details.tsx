/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import CarPostingSection from '../components/car-posting-section.tsx';

const CarDetails: React.FC = () => {
    return (
        <div>
            {/* Car Details */}
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <div className="relative overflow-hidden">
                                <span className="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 bg-orange">Sale</span>

                                <div className="gallery mb-6">
                                    <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events">
                                        <div className="swiper-wrapper" id="swiper-wrapper-5b26c8f3eb7d9756" aria-live="polite">
                                            <div className="swiper-slide swiper-slide-active w-[559px] border border-gray-200 rounded-lg" role="group" aria-label="1 / 5">
                                                <img src="https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180" alt="product image" className='rounded-lg' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gallery-nav relative">
                                    <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs">
                                        <div className="swiper-wrapper flex items-center overflow-auto" id="swiper-wrapper-ba56aeabc563cf4d" aria-live="polite">
                                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next  w-[133.75px] mr-[8px]" data-swiper-slide-index="1" role="group" aria-label="2 / 5">
                                                <a href="/">
                                                    <img src="https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180" alt="product image" />
                                                </a>
                                            </div>
                                            <div className="swiper-slide swiper-slide-duplicate w-[133.75px] mr-[8px]" data-swiper-slide-index="2" role="group" aria-label="3 / 5">
                                                <a href="/">
                                                    <img src="https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180" alt="product image" />
                                                </a>
                                            </div>
                                            <div className="swiper-slide swiper-slide-duplicate  w-[133.75px] mr-[8px]" data-swiper-slide-index="3" role="group" aria-label="4 / 5">
                                                <a href="/">
                                                    <img src="https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180" alt="product image" />
                                                </a>
                                            </div>
                                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev  w-[133.75px] mr-[8px]" data-swiper-slide-index="4" role="group" aria-label="5 / 5">
                                                <a href="/">
                                                    <img src="https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180" alt="product image" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold capitalize text-slate-700">Airp Variable product</h3>
                            <h5 className="font-bold text-md leading-none text-orange my-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                            <div className="mb-3">Vendor:<span> Vendor 3 </span></div>
                            <div className="mb-3">Type: <span> Type 3 </span></div>
                            <div className="mb-3"><span>Availability:</span> <span className="font-semibold">9 left in stock</span></div>
                            <p className="mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                            <div>
                                <div className="flex flex-wrap items-center mb-6">
                                    <span className="mr-8">Size:</span>
                                    <form className="size-swatch" action="#">
                                        <ul className="flex flex-wrap">
                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="size1" />
                                                <label className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize">s</label>
                                            </li>

                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="size2" />
                                                <label className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize">m</label>
                                            </li>
                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="size3" />
                                                <label className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize">l</label>
                                            </li>

                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="size4" />
                                                <label className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize">xl</label>
                                            </li>

                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="size5" />
                                                <label className="py-2 px-2 leading-none text-sm flex items-center justify-center transition-all bg-gray-300 cursor-pointer capitalize">xxl</label>
                                            </li>
                                        </ul>
                                    </form>
                                </div>

                                <div className="flex flex-wrap items-center  mb-6">
                                    <span className="mr-6">Color:</span>
                                    <form action="#" className="colors-swatch">
                                        <ul className="flex flex-wrap">
                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color1" />
                                                <label className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-indigo-800 cursor-pointer capitalize"></label>
                                            </li>

                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color2" />
                                                <label className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-pink-600 cursor-pointer capitalize"></label>
                                            </li>
                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color3" />
                                                <label className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-red-600 cursor-pointer capitalize"></label>
                                            </li>

                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color4" />
                                                <label className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-green-500 cursor-pointer capitalize"></label>
                                            </li>

                                            <li className="mx-1">
                                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color5" />
                                                <label className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-yellow-500 cursor-pointer capitalize"></label>
                                            </li>
                                        </ul>
                                    </form>
                                </div>

                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center mt-8">
                                        <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                            <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                            <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none" />
                                            <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                        </div>
                                        <div className="ml-2 sm:ml-8">
                                            <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange">Add to Cart</button>
                                        </div>
                                        <a href="/" className="text-md ml-8"><i className="icon-heart"></i></a>
                                        <a href="/" className="text-md ml-8"><i className="icon-refresh"></i></a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-start mb-8">
                                    <a href="/" className="text-md text-facebook hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><i className="icon-social-facebook"></i></a>
                                    <a href="/" className="text-md text-twitter hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><i className="icon-social-twitter"></i></a>
                                    <a href="/" className="text-md text-dribbble hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><i className="icon-social-instagram"></i></a>
                                    <a href="/" className="text-md text-pinterest hover:text-dark leading-none transition"><i className="icon-social-youtube"></i></a>
                                    <div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap">
                                    <a href="/" className="mr-2"><img src="assets/images/payment/amazon.svg" alt="payment icon" /></a>
                                    <a href="/" className="mr-2"><img src="assets/images/payment/apple-pay.svg" alt="payment icon" /></a>
                                    <a href="/" className="mr-2"><img src="assets/images/payment/bitcoin.svg" alt="payment icon" /></a>
                                    <a href="/" className="mr-2"><img src="assets/images/payment/google-pay.svg" alt="payment icon" /></a>
                                    <a href="/" className="mr-2"><img src="assets/images/payment/paypal.svg" alt="payment icon" /></a>
                                    <a href="/" className="mr-2"><img src="assets/images/payment/visa.svg" alt="payment icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="maintab" className="pb-5 mt-10">
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
                </div>
            </div>

            {/* Car Posting Section */}
            <section className='py-6 lg:py-6'>
                {/* new cars */}
                <CarPostingSection
                    title="Related Listings"
                    description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis."
                />
            </section>
        </div>
    );
};

export default CarDetails;
