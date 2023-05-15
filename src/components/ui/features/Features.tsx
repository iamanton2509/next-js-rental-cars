import {FC} from 'react';
import {useAppSelector} from '@/hooks';
import Feature from './Feature';
import styles from './Features.module.scss';

const Features: FC = () => {
    const features = useAppSelector(state => state.features.features);

    return (
        <section className={styles.section}>
            <ul className={styles.features}>
                {features.map(feature =>
                    <Feature 
                        key={feature.id} 
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                    />     
                )}
            </ul>
        </section>
    );
}

export default Features;