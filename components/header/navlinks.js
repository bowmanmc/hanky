import Link from 'next/link';


const NavLinks = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>
                        <span>Home</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/board">
                    <a>
                        <span>Board</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/history">
                    <a>
                        <span>History</span>
                    </a>
                </Link>
            </li>
        </ul>
    );
};
export default NavLinks;
