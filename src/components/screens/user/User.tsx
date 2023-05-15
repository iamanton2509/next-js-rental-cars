import {FC, useState} from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser, removeUser} from '@/store/userSlice';
import {useAppDispatch} from '@/hooks';
import {useAppSelector} from '@/hooks';
import styles from './User.module.scss';

const User: FC = () => {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const dispatch = useAppDispatch();
    const {email, firstname, lastname} = useAppSelector(state => state.user);
    const isAuth = !!email;
    
    const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
            .catch(() => alert('Invalid user!'))
    }

    const logOut = () => {
        dispatch(removeUser());
    }

    return (
        <Layout title='User'>
            <div className="container">
                {isAuth ?
                <main className={styles.main}>
                    <h1 className={styles.name}>Hello <strong>{firstname} {lastname}</strong>!</h1>
                    <p className={styles.email}>Your current account is <strong>{email}</strong></p>
                    <button onClick={logOut} className={styles.button}>Log Out</button>
                </main>
                :
                <main className={styles.main}>
                    <h2 className={styles.heading}>Sign In</h2>
                    <form className={styles.form} autoComplete='off'>
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
                            type='password'
                            className={styles.input}
                        />
                        <button onClick={handleLogin} className={styles.button}>Log In</button>
                        <p>Doesn't have an account? <Link href='/register'>Register</Link></p>
                    </form>
                </main>
                }
            </div>
        </Layout>
    );
}

export default User;