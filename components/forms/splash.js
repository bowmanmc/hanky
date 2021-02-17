import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useState } from 'react';
import { BsCheckBox, BsPencilSquare } from 'react-icons/bs';

import { pictures, getPictureInfo } from 'lib/backgrounds';

import styles from './splash.module.scss';

dayjs.extend(advancedFormat);

const SplashCarousel = ({ item, onUpdate }) => {
    const p = getPictureInfo(item.splash);
    const [index, setIndex] = useState(p.index);

    const splash = {
        backgroundImage: `url(/images/backgrounds/${pictures[index].image})`,
    };

    const updateEntry = async (idx) => {
        const updates = Object.assign({}, item, { splash: pictures[idx].image });
        await fetch(`/api/entry/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        if (onUpdate) {
            onUpdate(updates);
        }
    };

    return (
        <div className={styles.SplashCarousel}>
            <div className={styles.SplashCarousel__image} style={splash}></div>

            <div className={styles.SplashCarousel__instructions}>
                <div className={styles.SplashCarousel__info}>
                    <span>This image will show up on the public page for this entry.</span>
                </div>
                <div className={styles.SplashCarousel__buttons}>
                    <button onClick={() => {
                        let i = index;
                        if (i === 0) {
                            i = pictures.length - 1;
                        }
                        else {
                            i--;
                        }
                        setIndex(i);
                        updateEntry(i);
                    }}>Prev</button>
                    <button onClick={() => {
                        let i = index;
                        if (i === pictures.length - 1) {
                            i = 0;
                        }
                        else {
                            i++;
                        }
                        setIndex(i);
                        updateEntry(i);
                    }}>Next</button>
                </div>
            </div>
        </div>
    );
};
export default SplashCarousel;
