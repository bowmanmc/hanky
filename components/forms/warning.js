import { BsFillExclamationTriangleFill } from 'react-icons/bs';

import styles from './warning.module.scss';


const Warning = () => {
    return (
        <div className={styles.Warning}>
            <p>
                <BsFillExclamationTriangleFill /> &nbsp;
                We detected some questionable words in your entry...
                Are you sure you want to post that? How will this entry
                make you feel later when you read it?
                Remember to try and keep things positive!
            </p>
        </div>
    );
};

export default Warning;
