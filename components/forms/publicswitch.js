import Switch from 'react-switch';
import Api from 'lib/api';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

import styles from './switch.module.scss';

const PublicSwitch = ({ item, onUpdate }) => {
    return (
        <div className={styles.Switch}>
            <label>
                <Switch
                    onColor='#69875C'
                    onChange={async () => {
                        const updates = Object.assign({}, item, {
                            isPublic: !item.isPublic,
                        });
                        await Api.updateItem(updates);
                        onUpdate(updates);
                    }}
                    checked={item.isPublic}
                />
                <div className={styles.Switch__icon}>
                    {item.isPublic ? <BsEyeFill /> : <BsEyeSlashFill />}
                </div>
            </label>
            <div className={styles.Switch__instructions}>
                <span className={styles.Switch__main}>
                    This entry is {' '}
                    {item.isPublic ? ' public' : ' private'}
                </span>
                <span className={styles.Switch__more}>
                    {item.isPublic
                        ? 'Switch to make this entry viewable only by you.'
                        : 'Switch to share this entry with the world.'}
                </span>
            </div>
        </div>
    );
};
export default PublicSwitch;
