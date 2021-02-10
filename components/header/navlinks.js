import Link from 'next/link';
import {
    BsHouseDoorFill,
    BsBucketFill,
    BsCalendarFill,
    BsBrightnessAltHighFill,
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
                <Link href="/board">
                    <a>
                        <BsBrightnessAltHighFill />
                        <span>Board</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/history">
                    <a>
                        <BsCalendarFill />
                        <span>History</span>
                    </a>
                </Link>
            </li>
        </ul>
    );
};
export default NavLinks;
