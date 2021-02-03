import Link from 'next/link'
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import styles from './index.module.scss';


dayjs.extend(advancedFormat);

const Polaroid = ({item}) => {

    const day = dayjs(item.created).format('dddd, MMMM Do, YYYY [at] H:mm a');

    const background = {
        background: `url(/images/backgrounds/${item.pattern}), ${item.gradient}`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'cover, cover',
    };

    return (
        <div className={styles.Polaroid}>
            <div className={styles.Polaroid__item} style={background}>
                <p className={styles.Polaroid__content}>
                    {item.entry}
                </p>
            </div>
        </div>
    );
};
export default Polaroid;
