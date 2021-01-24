import dayjs from 'dayjs';

import styles from './hanky.module.scss';

const Hanky = ({hanky}) => {

    const day = dayjs(hanky.created).format('dddd, MMMM D, YYYY');

    const gradient = {
        background: hanky.gradient,
    };
    const image = {
        backgroundImage: `url(/images/backgrounds/${hanky.pattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className={styles.Hanky} style={gradient}>
            <div className={styles.Hanky__content} style={image}>
                <div className={styles.Hanky__text}>
                    {hanky.entry}
                </div>
            </div>
            <div className={styles.Hanky__info}>
                {day}
            </div>
        </div>
    )
};
export default Hanky;
