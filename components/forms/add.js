import dayjs from 'dayjs';
import { useState } from 'react';

import Banned from './banned';
import Warning from './warning';
import { checkEntry } from 'lib/abuse';

import styles from './add.module.scss';

const Form = (props) => {
    const [entry, setEntry] = useState('');
    const [checkResults, setCheckResults] = useState({});

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
                        const text = event.target.value;
                        setEntry(text);
                        setCheckResults(checkEntry(text));
                    }}
                />

                <div className={styles.Form__buttons}>
                    <div className={styles.Form__messages}>
                        { checkResults.banned && <Banned />}
                        { !checkResults.banned && checkResults.warning && <Warning /> }
                    </div>
                    <button onClick={saveEntry} disabled={checkResults.banned}>Save Entry</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
