import Head from 'next/head'

const Meta = ({ title, url, item }) => {

    return (
        <Head>
            {/* <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#13212a" />
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" /> */}

            <meta property="og:site_name" content="Thanky - Give Thanks" />
            <meta property="og:type" content="website" />
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />
            <meta property="og:description" content={item.entry} />
            <meta name="description" content={item.entry} />
            <meta property="twitter:description" content={item.entry} />
            <meta property="og:image" content={`https://app.getthanky.com/images/backgrounds/${item.splash}`} />
            <meta name="twitter:image" content={`https://app.getthanky.com/images/backgrounds/${item.splash}`} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:card" content="summary_large_image" />

            <title>{title}</title>
        </Head>
    );
};

export default Meta;
