import {NextPage} from 'next';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

const NotFound: NextPage = () => {
    return (   
        <Layout title='Not Found'>
            <div style={{textAlign: 'center'}}>
                <Image 
                    src="/404.png" 
                    alt="404 Error" 
                    width={385}
                    height={385}
                    priority
                />
            </div>
        </Layout>
    );
}

export default NotFound;