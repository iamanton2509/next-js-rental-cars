export interface ICar {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
}
export interface ICarData {
    cars: ICar[];
}
export interface ICarDataSingle {
    car: ICar;
}