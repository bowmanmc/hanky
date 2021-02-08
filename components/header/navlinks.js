import Link from 'next/link';
import {
    BsHouseDoorFill,
    BsBucketFill,
    BsCalendarFill,
} from 'react-icons/bs';


const NavLinks = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>
                        <BsHouseDoorFill />
                        <span>Home</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/jar">
                    <a>
                        <BsBucketFill />
                        <span>Jar</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/calendar">
                    <a>
                        <BsCalendarFill />
                        <span>Feed</span>
                    </a>
                </Link>
            </li>
        </ul>
    );
};
export default NavLinks;
