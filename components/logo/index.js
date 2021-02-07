
import Full from './logo-full.svg';
import Icon from './icon.svg';
import Word from './wordmark.svg';

import styles from './index.module.scss';


export const LogoFull = () => {
    return (
        <div className={styles.Logo}>
            <Full />
        </div>
    )
};

export const LogoIcon = () => {
    return (
        <div className={styles.Logo}>
            <Icon />
        </div>
    )
};

export const LogoWord = () => {
    return (
        <div className={styles.Logo}>
            <Word />
        </div>
    )
};
