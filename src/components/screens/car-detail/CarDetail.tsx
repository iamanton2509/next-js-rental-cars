import {FC} from 'react';
import Layout from '@/components/layout/Layout';
import CarItem from '@/components/ui/car/CarItem';
import {ICarDataSingle} from '@/interfaces/car.interface';

const CarDetail: FC<ICarDataSingle> = ({car}) => {
    return (
        <Layout title={car.name}>
            <CarItem car={car} />
        </Layout>
    );
}

export default CarDetail;