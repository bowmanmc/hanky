import Link from 'next/link'
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { BsFilePost } from 'react-icons/bs';

import Constants from 'lib/constants';

import styles from './item.module.scss';


dayjs.extend(advancedFormat);

const Item = ({item}) => {
    const day = dayjs(item.created).format(Constants.DATE_FORMAT_FULL);

    const gradient = {
        background: item.gradient,
    };

    const dateTxt = {
        background: item.gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    const image = {
        backgroundImage: `url(/images/backgrounds/${item.pattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className={styles.Item} style={gradient}>
            <div className={styles.Item__entry}>
                <span className={styles.Item__date} style={dateTxt}>{day}</span>
                <p className={styles.Item__text}>{item.entry}</p>
            </div>
            <div className={styles.Item__buttons}>
                <Link href={`/details/${item.id}`}>
                    <a>
                        <span>Details</span>
                        <BsFilePost alt="View" />
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default Item;
