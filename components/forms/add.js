import { useState } from 'react';

import styles from './add.module.scss';


const HankyForm = props => {
    const [hankyText, setHankyText] = useState('');
    const { onAdd } = props;

    const saveHanky = async (event) => {
        event.preventDefault();

        try {
            const body = { content: hankyText };
            const res = await fetch(`http://localhost:3000/api/hanky`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await res.json();
            onAdd();
            setHankyText('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.HankyForm}>
            <span className={styles.HankyForm__title}>
                Form title
            </span>
            <form>
                <textarea rows={5} value={hankyText} onChange={event => {
                    setHankyText(event.target.value);
                }} />

                <div className={styles.HankyForm__buttons}>
                    <button onClick={saveHanky}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default HankyForm;
