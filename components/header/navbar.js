import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useRouter } from 'next/router';

import NavLinks from './navlinks';
import { LogoWord } from '../logo';

import styles from './navbar.module.scss';

const Navbar = () => {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleRouteChange = (url) => {
            setMobileOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, []);

    let mobileButton = (
        <button
            onClick={() => {
                setMobileOpen(true);
            }}
        >
            <BsList />
        </button>
    );
    if (mobileOpen) {
        mobileButton = (
            <button
                onClick={() => {
                    setMobileOpen(false);
                }}
            >
                <BsX />
            </button>
        );
    }

    return (
        <div className={styles.NavbarContainer}>
            <div className={styles.Navbar}>
                <div className={styles.Navbar__logo}>
                    <Link href="/">
                        <a>
                            <LogoWord />
                        </a>
                    </Link>
                </div>
                <nav className={styles.NavbarDesktop}>
                    <NavLinks />
                </nav>
                <nav className={styles.NavbarMobile}>{mobileButton}</nav>
            </div>
            <div className={styles.NavbarMobile__links}>
                {mobileOpen && <NavLinks />}
            </div>
        </div>
    );
};
export default Navbar;
