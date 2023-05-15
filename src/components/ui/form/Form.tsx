import {FC} from 'react';
import {useForm} from 'react-hook-form';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import styles from './Form.module.scss';

const HookForm: FC = () => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: 'onBlur'
    });

    const db = getFirestore();

    const onSubmit = async (data: any) => {
        reset();
        try {
            const tripRef = collection(db, 'questions');
            const newTripDoc = await addDoc(tripRef, {
                phone: data.Phone,
                name: data.Name
            });
            return newTripDoc.id;
        } catch (error: any){
            console.error(error.message);
        }
    }
    
    return (
        <div className="container">
            <section className={styles.section}>
                <h2 style={{textAlign: 'center'}}>Ask our advisor anything you're interested in </h2>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className={styles.form}>
                    <div>
                        <input {...register('Name', {
                            required: 'Enter your firstname',
                            minLength: {
                                value: 3,
                                message: 'The name is too short'
                            },
                            maxLength: {
                                value: 20,
                                message: 'The name is too long'
                            }
                            })} 
                            className={styles.input}
                            placeholder='Name'
                        />
                        <div className={styles.error}>
                            {errors?.Name && <p>{errors?.Name?.message || "Error"}</p>}
                        </div>
                    </div>
                    <div>
                        <input {...register('Phone', {
                                required: 'Enter your phone',
                                pattern: /([0-9]+(-[0-9]+)+)/
                            })} 
                            className={styles.input}
                            placeholder='Phone'
                        />
                        <div className={styles.error}>
                            {errors?.Phone && <p>{errors?.Phone?.message || "Error"}</p>}
                        </div>
                    </div>
                    <div>
                        <input type="submit" disabled={!isValid} className={styles.submit} />
                    </div>                        
                </form>
            </section>
        </div>
    );
}

export default HookForm;