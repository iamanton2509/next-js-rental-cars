import {NextPage} from "next";
import Cars from "@/components/screens/cars/Cars";
import {CarService} from "@/services/car.service";
import {ICarData} from "@/interfaces/car.interface";
import {GetStaticProps} from "next";

const CarsPage: NextPage<ICarData> = ({cars}) => {
    return (
        <Cars cars={cars} />
    );
}

export const getStaticProps: GetStaticProps<ICarData> = async() => {
    const cars = await CarService.getAll();

    return {
        props: {cars},
        revalidate: 60
    }
}

export default CarsPage;