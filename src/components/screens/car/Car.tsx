import {FC, useState} from 'react';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import {useAppSelector} from '@/hooks';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import {ICarDataSingle} from "@/interfaces/car.interface";
import styles from './Car.module.scss';
import MyModal from '@/components/ui/modal/MyModal';

const Car: FC<ICarDataSingle> = ({car}) => {
    const db = getFirestore();
    const [visible, setVisible] = useState(false);
    const [counter, setCounter] = useState(1);
    const rent = Math.floor(car.price / 245);
    const {email} = useAppSelector(state => state.user);
    const isAuth = !!email;

    const decrementDays = () => {
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    const createOrder = async (email: string, car: string, days: number, price: number) => {
        try {
            const tripRef = collection(db, 'orders');
            const newTripDoc = await addDoc(tripRef, {
                email: email,
                car: car,
                days: days,
                price: price
            });
            return newTripDoc.id;
        } catch (error: any) {
            console.error(error.message);
        }
    };

    const handleOrder = (email: string, car: string, days: number, price: number) => {
        setVisible(true);
        createOrder(email, car, days, price);
    }

    return (
        <Layout title={`${car.name}`}>
            <div className="container">
                <main className={styles.main}>
                    <div>
                        <Image src={car.image} alt={car.name} width={600} height={400} />
                    </div>
                    <section className={styles.section}>
                        <h2 className={styles.name}>{car.name}</h2>
                        <p className={styles.description}>{car.description}</p>
                        <p className={styles.price}>Its price starts from {car.price}$</p>
                        <p className={styles.price}>But you can rent it only for {rent}$ for 24 hours</p>
                        <div className={styles.counter}>
                            <div className={styles.buttons}>
                                <button className={styles.up} onClick={() => setCounter(counter + 1)}>
                                    <Image src="/up.svg" alt="More" width={12} height={12} />
                                </button>
                                <button className={styles.down} onClick={decrementDays}>
                                    <Image src="/down.svg" alt="Less" width={12} height={12} />
                                </button>
                            </div>
                            <p className={styles.days}>{counter}</p>
                            <p className={styles.result}>Price: <strong>{counter * rent}</strong>$</p> 
                        </div>
                        <button className={styles.button} onClick={() => handleOrder(email, car.name, counter, counter * rent)}>
                            Rent
                        </button>
                    </section>
                </main>
                <MyModal visible={visible} setVisible={setVisible}>
                    {isAuth ?
                        <>
                            <h4 className={styles.mtitle}>Your order is confirmed</h4>
                            <p>You are going to rent this car for {counter} days. It will cost {counter * rent} dollars</p>
                            <p className={styles.mdescription}>Our manager is contacting you soon</p>
                        </>
                        :
                        <>
                            <h4 className={styles.mtitle}>Access error</h4>
                            <p className={styles.mdescription}>You must be <Link href='/register' style={{textDecoration: 'underline', color: 'rgb(95, 155, 205)'}}>authorized</Link> to rent cars on our website</p> 
                        </>
                    }
                </MyModal>
            </div>
        </Layout>
    );
}

export default Car;