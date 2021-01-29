import dayjs from 'dayjs';
import { useState } from 'react';

import PromptBox from 'components/promptbox';

import styles from './add.module.scss';

const Form = (props) => {
    const [entry, setEntry] = useState('');
    const { onAdd } = props;

    const saveEntry = async (event) => {
        event.preventDefault();

        try {
            const body = { content: entry, localtime: dayjs().format() };
            const res = await fetch(`http://localhost:3000/api/entry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await res.json();
            onAdd();
            setEntry('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.Form}>
            <PromptBox />

            <form>
                <textarea
                    rows={7}
                    value={entry}
                    placeholder={'Use the prompt above or do your own thing. Gratitude in, Positivity out!'}
                    onChange={(event) => {
                        setEntry(event.target.value);
                    }}
                />

                <div className={styles.Form__buttons}>
                    <button onClick={saveEntry}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
