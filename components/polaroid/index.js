import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useState } from 'react';
import { BsCheckBox, BsPencilSquare } from 'react-icons/bs';

import styles from './index.module.scss';

dayjs.extend(advancedFormat);

const Polaroid = ({ item, editable, onUpdate }) => {
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
        <div className={styles.Polaroid__item}>
            <p className={styles.Polaroid__content}>{item.entry}</p>
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
        <BsCheckBox
            onClick={async () => {
                await updateEntry();
                toggleEditMode();
            }}
        />
    ) : (
        <BsPencilSquare onClick={toggleEditMode} />
    );

    return (
        <div className={styles.Polaroid}>
            {editMode ? textarea : preview}
            <div className={styles.Polaroid__buttons}>
                {editable && editButton}
            </div>
        </div>
    );
};
export default Polaroid;
