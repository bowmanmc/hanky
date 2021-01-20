import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

import styles from './navbar.module.scss';

const Navbar = props => {
    const [session, loading] = useSession();

    return (
        <nav className={styles.Navbar}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/favorites">
                <a>Favorites</a>
            </Link>
            <Link href="/metrics">
                <a>Metrics</a>
            </Link>

            <button onClick={() => { signOut(); }}>Sign Out</button>
        </nav>
    );
};
export default Navbar;
