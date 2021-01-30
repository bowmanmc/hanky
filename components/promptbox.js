import { useEffect, useState } from 'react';
import { BsArrowClockwise } from 'react-icons/bs';

import { getPrompt } from 'lib/prompts';

import styles from './promptbox.module.scss';


const PromptBox = () => {

    const [prompt, setPrompt] = useState(getPrompt());

    const refreshPrompt = () => {
        const p = getPrompt();
        return setPrompt(p);
    };

    useEffect(() => {
        refreshPrompt();
    }, []);

    return (
        <div className={styles.PromptBox}>
            <p>
                {prompt}
            </p>
            <div className={styles.PromptBox__buttons}>
                <button onClick={refreshPrompt}>
                    <BsArrowClockwise /> New Prompt
                </button>
            </div>
        </div>
    );
};

export default PromptBox;
