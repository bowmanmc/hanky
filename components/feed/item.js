import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

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
        webkitBackgroundClip: 'text',
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
        </div>
    );
};
export default Item;
