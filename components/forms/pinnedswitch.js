import Switch from 'react-switch';
import Api from 'lib/api';

import styles from './switch.module.scss';

const PinnedSwitch = ({ item, onUpdate }) => {
    return (
        <label className={styles.Switch}>
            <Switch
                onColor='#69875C'
                onChange={async () => {
                    const updates = Object.assign({}, item, {
                        isPinned: !item.isPinned,
                    });
                    await Api.updateItem(updates);
                    onUpdate(updates);
                }}
                checked={item.isPinned}
            />
            <div className={styles.Switch__instructions}>
                <span className={styles.Switch__main}>
                    This entry is {' '}
                    {item.isPinned ? ' pinned' : ' unpinned'}
                </span>
                <span className={styles.Switch__more}>
                    {item.isPinned
                        ? 'Switch to unpin this item from your board.'
                        : 'Switch to pin this entry to your board.'}
                </span>
            </div>
        </label>
    );
};
export default PinnedSwitch;
