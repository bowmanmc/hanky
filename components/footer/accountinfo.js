import { useSession } from 'next-auth/client';

import styles from './accountinfo.module.scss';

const AccountInfo = () => {
    const [session] = useSession();
    let user = session?.user || {};

    return (
        <div className={styles.AccountInfo}>
            <div className={styles.AccountInfo__avatar}>
                <img src={user.image} alt={user.name} />
            </div>
            <div className={styles.AccountInfo__info}>
                <span className={styles.AccountInfo__name}>{user.name}</span>
                <span className={styles.AccountInfo__email}>{user.email}</span>
            </div>
        </div>
    );
};
export default AccountInfo;
