import {FC} from 'react';
import {YMaps, Map} from '@pbe/react-yandex-maps';
import styles from './About.module.scss';

const About: FC = () => {
    
    return (
        <YMaps>
            <section>
                <div className="container">
                    <div className={styles.title__container}>
                        <h2 className={styles.title}>Our location</h2>
                    </div>
                    <div className={styles.map__container}>
                        <div className={styles.map} id="map">
                            <Map defaultState={{ center: [50.27, 30.31], zoom: 9 }} className={styles.map} />
                        </div>
                    </div>
                </div>
            </section>
        </YMaps>
    );
}

export default About;