import { Provider } from 'next-auth/client';

import Footer from 'components/footer';
import Header from 'components/header';

import './_app.scss';


function Hanky({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    );
}

export default Hanky;
