import {NextPage} from 'next';
import Layout from '@/components/layout/Layout';
import About from '@/components/screens/about/About';

const AboutPage: NextPage = () => {
    return (
        <Layout title='About'>
            <About />
        </Layout>
    );
}

export default AboutPage;