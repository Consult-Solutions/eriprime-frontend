import React from "react";

const brands = [
    { name: "Audi", logo: "https://pictures.dealer.com/k/keyesaudishermanoaksaoa/0416/d82ee5a1af7fd3baa30a98070b91144ax.jpg" },
    { name: "BMW", logo: "https://blog.logomaster.ai/hs-fs/hubfs/bmw-logo-1917.jpg?width=1008&height=681&name=bmw-logo-1917.jpg" },
    { name: "Ford", logo: "https://www.ford.co.nz/content/ford/nz/en_nz/home/about-ford/use-of-logo/jcr:content/par/image/image.imgs.full.high.jpg/1619512193586.jpg" },
    { name: "Mercedes Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/851px-Mercedes-Logo.svg.png?20230111203159" },
    { name: "Peugeot", logo: "https://www.peugeot.ie/content/dam/peugeot/master/b2c/brand/news/l-m/peugeot-magazine/2023/april/the-peugeot-lion-history-of-a-symbol/Peugeot-Logo-2010.jpg?imwidth=768" },
    { name: "Volkswagen", logo: "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_retina_2000.jpg?1649155356" },
];

export default function PremiumBrands() {
    return (
        <section className="px-4 border-t border-gray-300 py-8 md:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 bg-[#F9FBFC] rounded-t-3xl w-full relative -top-5 md:-top-10 z-10">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-700 sm:text-xl md:text-2xl capitalize">
                    Explore Our Premium Brands
                </h2>
                
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center transition">
                    Show All Brands <span className="ml-1">↗</span>
                </button>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition"
                    >
                        <img src={brand.logo} alt={`${brand.name} logo`} className="h-10 mb-2" />
                        <span className="text-sm font-medium">{brand.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}