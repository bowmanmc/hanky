import Link from 'next/link'
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { BsBoxArrowUp } from 'react-icons/bs';

import styles from './item.module.scss';


dayjs.extend(advancedFormat);

const Item = ({item}) => {
    const day = dayjs(item.created).format('dddd, MMMM Do, YYYY [at] H:mm a');

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
                <Link href={`/share/${item.id}`}>
                    <a>
                        <span>Share</span>
                        <BsBoxArrowUp />
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default Item;
