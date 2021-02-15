import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useState } from 'react';
import { BsCheckBox, BsPencilSquare } from 'react-icons/bs';

import styles from './entryeditor.module.scss';

dayjs.extend(advancedFormat);

const EntryEditor = ({ item, editable, onUpdate }) => {
    const [editMode, setEditMode] = useState(false);
    const [itemText, setItemText] = useState(item.entry);

    const day = dayjs(item.created).format('dddd, MMMM Do, YYYY [at] H:mm a');

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const updateEntry = async () => {
        if (itemText === item.entry) {
            return; // nothing to update... cancel
        }
        // else save it to the api
        const updates = Object.assign({}, item, { entry: itemText });
        await fetch(`/api/entry/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        if (onUpdate) {
            onUpdate(updates);
        }
    };

    const preview = (
        <div className={styles.EntryEditor__item}>
            <p className={styles.EntryEditor__content}>{item.entry}</p>
        </div>
    );

    const textarea = (
        <textarea
            rows={7}
            value={itemText}
            onChange={(event) => {
                setItemText(event.target.value);
            }}
        />
    );

    const editButton = editMode ? (
        <button
            onClick={async () => {
                await updateEntry();
                toggleEditMode();
            }}
        >
            <BsCheckBox />
            <span>Save</span>
        </button>
    ) : (
        <button onClick={toggleEditMode}>
            <BsPencilSquare />
            <span>Edit</span>
        </button>
    );

    return (
        <div className={styles.EntryEditor}>
            {editMode ? textarea : preview}
            <div className={styles.EntryEditor__buttons}>
                {editable && editButton}
            </div>
        </div>
    );
};
export default EntryEditor;
