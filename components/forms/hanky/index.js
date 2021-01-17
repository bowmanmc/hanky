import { useState } from 'react';

import styles from './index.module.scss';


const Form = props => {
    const [hankyText, setHankyText] = useState('');

    return (
        <div className={styles.HankyForm}>
            <span className={styles.HankyForm__title}>
                Form title
            </span>
            <form>
                <textarea rows={5} value={hankyText} onChange={event => {
                    setHankyText(event.target.value);
                }} />
            </form>
        </div>
    );
};

export default Form;
