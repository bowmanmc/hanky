import { Provider } from 'next-auth/client';

//import '../styles/globals.css';

function Hanky({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default Hanky;
