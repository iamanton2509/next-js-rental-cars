import {GetServerSideProps, GetStaticProps, NextPage} from 'next';
import Home from '@/components/screens/home/Home';
import {ICarData} from '@/interfaces/car.interface';
import {CarService} from '@/services/car.service';

const HomePage: NextPage<ICarData> = ({cars}) => {
    return (
        <Home cars={cars} />
    );
}

export const getStaticProps: GetStaticProps<ICarData> = async () => {
    const cars = await CarService.getAll();

    return {
        props: {cars},
        revalidate: 60
    }
}

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//     const cars = await CarService.getAll();

//     return {
//         props: {cars}
//     }
// }

export default HomePage;