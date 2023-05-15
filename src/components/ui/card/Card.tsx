import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

interface IProps {
    title: string;
    img: string;
}

const Card: FC<IProps> = ({title, img}) => {
    return (
        <Link href={`/`} className={styles.card}>
            <Image src={img} alt={title} width={400} height={300} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
        </Link>
    );
}

export default Card;