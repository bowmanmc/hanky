import Link from 'next/link';
import { useSession } from 'next-auth/client';

const Navbar = props => {
    const [session, loading] = useSession();

    return (
        <div>
            <span>Navbar here.</span>
        </div>
    );
};
export default Navbar;
