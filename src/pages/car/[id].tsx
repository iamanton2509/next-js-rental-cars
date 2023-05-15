import {NextPage, GetStaticProps, GetStaticPaths} from "next";
import {CarService} from "@/services/car.service";
import {ICarDataSingle} from '@/interfaces/car.interface';
import {ParsedUrlQuery} from "querystring";
import Car from "@/components/screens/car/Car";

const CarDetailPage: NextPage<ICarDataSingle> = ({car}) => {
    return <Car car={car} />   
}

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cars = await CarService.getAll();
    return {
        paths: cars.map(car => ({
            params: {
                id: car.id.toString()
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({params}) => {
    const car = await CarService.getById(String(params?.id));
    return {
        props: {car},
        revalidate: 60,
    }
}

export default CarDetailPage;