import {FC} from 'react';
import Image from 'next/image';
import {IFeature} from '@/interfaces/feature.interface';
import styles from './Feature.module.scss';

interface IFeatureProps extends Omit<IFeature, 'id'> {}

const Feature: FC<IFeatureProps> = ({title, description, image}) => {
    return (
        <li className={styles.feature}>
            <Image src={image} alt={title} width={75} height={75} />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </li>
    );
}

export default Feature;