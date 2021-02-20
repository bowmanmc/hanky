import { BsFillXOctagonFill } from 'react-icons/bs';

import styles from './banned.module.scss';


const Banned = () => {
    return (
        <div className={styles.Banned}>
            <p>
                <BsFillXOctagonFill /> &nbsp;
                We detected some hurtful words in your entry
                and therefore won't be able to save it for you.
                Remember to try and keep things positive!
            </p>
        </div>
    );
};

export default Banned;
