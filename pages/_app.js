import { Provider } from 'next-auth/client';

import './_app.scss';


function Hanky({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default Hanky;
