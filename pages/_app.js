import { useRouter } from 'next/router';
import { Provider } from 'next-auth/client';

import Footer from 'components/footer';
import Header from 'components/header';

import './_app.scss';


function Thanky({ Component, pageProps }) {
    const router = useRouter();
    const isPublic = router.pathname && router.pathname.indexOf('thanks') >= 0;

    return (
        <Provider session={pageProps.session}>
            {isPublic ? null : <Header /> }
            <Component {...pageProps} />
            <Footer />
        </Provider>
    );
}

export default Thanky;
