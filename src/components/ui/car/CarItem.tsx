import {FC} from "react";
import Link from 'next/link';
import Image from 'next/image';
import {ICarDataSingle} from "@/interfaces/car.interface";
import styles from './CarItem.module.scss';

const CarItem: FC<ICarDataSingle> = ({car}) => {
    return (
        <div className={styles.item}>
            <Image src={car.image} alt={car.name} width={375} height={250} />
            <Link href={`/car/${car.id}`}>
                <h2>{car.name}</h2>
                <p>{car.price} $</p>
            </Link>
        </div>
    );
}

export default CarItem;