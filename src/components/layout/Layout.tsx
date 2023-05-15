import {FC, PropsWithChildren} from 'react';
import dynamic from 'next/dynamic';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Meta from '@/components/SEO/Meta';
import {IMeta} from '@/components/SEO/meta.interface';

const DynamicFooter = dynamic(() => import ('./Footer/Footer'), {
    ssr: false
})

// import {Titillium_Web} from 'next/font/google';

// const titilium = Titillium_Web({
//   subsets: ['latin'], 
//   weight: ['300', '400', '600', '700'],
//   variable: '--titilium'
// });

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <Nav />
                <main>
                    {children}
                </main>
            <DynamicFooter />
        </Meta>
    );
}

export default Layout;