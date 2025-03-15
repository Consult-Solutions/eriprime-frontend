import React from "react";

const carTypes = [
  { name: "SUV", image: "https://images.unsplash.com/photo-1622893288761-823ba60f17a6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sedan", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Hatchback", image: "https://images.unsplash.com/photo-1572811298797-9eecadf6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Hybrid", image: "https://images.unsplash.com/photo-1687419032287-02e696f04d15?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Coupe", image: "https://images.unsplash.com/photo-1708019931163-a3298faf915d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const BrowseByType = () => {
  return (
    <section className="my-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-700 sm:text-2xl lg:text-3xl capitalize md:leading-loose">Browse by Type</h2>
        <a href="/listings" className="text-blue-500 hover:underline flex items-center">
          View All <span className="ml-1">↗</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {carTypes.slice(0, 2).map((car, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg flex items-center">
              <span className="mr-2">🚗</span>
              {car.name}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {carTypes.slice(2).map((car, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg flex items-center">
              <span className="mr-2">🚗</span>
              {car.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByType;