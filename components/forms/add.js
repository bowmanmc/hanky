import dayjs from 'dayjs';
import { useState } from 'react';

import styles from './add.module.scss';

const Form = (props) => {
    const [entry, setEntry] = useState('');
    const { onAdd } = props;

    const saveEntry = async (event) => {
        event.preventDefault();

        try {
            const body = { content: entry, localtime: dayjs().format() };
            const response = await fetch(`http://localhost:3000/api/entry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const result = await response.json();
            onAdd(result.Item);
            setEntry('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.Form}>
            <form>
                <textarea
                    rows={7}
                    value={entry}
                    placeholder={'Use the prompt above or do your own thing here. Gratitude in, Positivity out!'}
                    onChange={(event) => {
                        setEntry(event.target.value);
                    }}
                />

                <div className={styles.Form__buttons}>
                    <button onClick={saveEntry}>Save Entry</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
