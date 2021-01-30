import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import styles from './item.module.scss';

dayjs.extend(advancedFormat);
const Item = ({item}) => {
    const day = dayjs(item.created).format('dddd, MMMM Do, YYYY [at] H:mm a');

    const gradient = {
        background: item.gradient,
    };

    const image = {
        backgroundImage: `url(/images/backgrounds/${item.pattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className={styles.Item}>
            <div className={styles.Item__marker} style={gradient}>
                <div style={image} />
            </div>
            <div className={styles.Item__entry}>
                <p className={styles.Item__text}>{item.entry}</p>
                <p className={styles.Item__date}>{day}</p>
            </div>
        </div>
    );
};
export default Item;
