import Switch from 'react-switch';

import styles from './publicswitch.module.scss';

const PublicSwitch = ({ item, onUpdate }) => {
    return (
        <label className={styles.PublicSwitch}>
            <Switch
                onColor='#69875C'
                onChange={async () => {
                    const updates = Object.assign({}, item, {
                        isPublic: !item.isPublic,
                    });
                    await fetch(`/api/entry/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updates),
                    });
                    onUpdate(updates);
                }}
                checked={item.isPublic}
            />
            <div className={styles.PublicSwitch__instructions}>
                <span className={styles.PublicSwitch__main}>
                    This entry is {' '}
                    {item.isPublic ? ' public' : ' private'}
                </span>
                <span className={styles.PublicSwitch__more}>
                    {item.isPublic
                        ? 'Switch to make this entry viewable only by you.'
                        : 'Switch to share this entry with the world.'}
                </span>
            </div>
        </label>
    );
};
export default PublicSwitch;
