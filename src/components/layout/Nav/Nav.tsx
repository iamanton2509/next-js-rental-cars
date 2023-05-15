import {useRouter} from "next/router";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.scss";

const Nav: FC = () => {
    const {pathname} = useRouter();
    
    return (
        <div className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <h4 className={styles.logo}>
                        <Link href="/">Car Rental</Link>
                    </h4>
                    <div className={styles.links}>
                        <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
                        <Link href="/cars" className={pathname === '/cars' ? styles.active : ''}>Cars</Link>
                        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
                    </div>
                    <div>
                        <Link href="/user">
                            <Image src="/user.svg" alt="Log In" width={24} height={24} />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav;