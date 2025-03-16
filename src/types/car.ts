export interface Car {
    title: string;
    images: string[];
    price: string;
    make: string;
    car_model: string;
    transmission: string;
    fuel_type: string;
    description: string;
    mileage: string;
    category: { name: string };
    condition: string;
    seller: { fullname: string, email: string, phone: string };
    features: any[];
    autonomy: string;
    seats: string;
    color: string;
}