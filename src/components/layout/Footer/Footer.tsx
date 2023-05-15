import {FC} from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socials}>
                <li>
                    <a href="/">
                        <Image src="/instagram-dark.svg" alt="Instagram" width={40} height={40} />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Image src="/telegram-dark.svg" alt="Telegram" width={40} height={40} />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Image src="/facebook-dark.svg" alt="Facebook" width={40} height={40} />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Image src="/tiktok-dark.svg" alt="Tiktok" width={40} height={40} />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <Image src="/twitter-dark.svg" alt="Twitter" width={40} height={40} />
                    </a>
                </li>
            </ul>
            <h4 className={styles.copyright}>Next.js &copy; 2023 <br />All rights reserved</h4>
        </footer>
    );
}

export default Footer;