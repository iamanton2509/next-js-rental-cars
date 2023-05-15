import {FC} from 'react';
import Card from '../card/Card';
import {cards} from '@/utils/cards';
import styles from './OurCars.module.scss';

const OurCars: FC = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.cars__title}>
                    <h2 className={styles.title}>
                        Our cars
                    </h2>
                </div>
                <div className={styles.cars__cards}>
                    {cards.map(card => 
                        <Card key={card.id} title={card.title} img={card.image} />    
                    )}
                </div>
            </div>
        </section>
    );
}

export default OurCars;