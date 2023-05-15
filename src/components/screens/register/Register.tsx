import {FC, useState} from "react";
import Layout from '@/components/layout/Layout';
import {getFirestore, setDoc, doc} from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {setUser} from "@/store/userSlice";
import {useAppDispatch} from "@/hooks";
import Link from "next/link";
import styles from './Register.module.scss';

const Register: FC = () => {
    const [inputs, setInputs] = useState({firstname: '', lastname: '', email: '', password: ''});
    const dispatch = useAppDispatch();

    const handleRegister: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            const {user} = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password);
            const userData = {
                email: user.email,
                id: user.uid,
                token: user.refreshToken
            };
            const userDataJSON = JSON.stringify(userData);
            const db = getFirestore();
            const userRef = doc(db, 'users', user.uid);
            setDoc(userRef, {
                userData: userDataJSON,
                firstname: inputs.firstname,
                lastname: inputs.lastname
            });
            dispatch(setUser(userData));
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <Layout title='Register'>
            <main className={styles.main}>
                <h2 className={styles.heading}>Sign Up</h2>
                <form className={styles.form} autoComplete='off'>
                    <input 
                        value={inputs.firstname}
                        onChange={e => setInputs({...inputs, firstname: e.target.value})}
                        placeholder='Firstname'
                        className={styles.input}
                    />
                    <input 
                        value={inputs.lastname}
                        onChange={e => setInputs({...inputs, lastname: e.target.value})}
                        placeholder='Lastname'
                        className={styles.input}
                    />
                    <input 
                        value={inputs.email}
                        onChange={e => setInputs({...inputs, email: e.target.value})}
                        placeholder='Email'
                        className={styles.input}
                    />
                    <input 
                        value={inputs.password}
                        onChange={e => setInputs({...inputs, password: e.target.value})}
                        placeholder='Password'
                        className={styles.input}
                        type='password'
                    />
                    <button onClick={handleRegister} className={styles.button}>Sign Up</button>
                    <p>Already have an account? <Link href='/user'>Sign In</Link></p>
                </form>
            </main>
        </Layout>
    );
}

export default Register;