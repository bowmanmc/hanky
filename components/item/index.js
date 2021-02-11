import Link from 'next/link'
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { BsGearFill } from 'react-icons/bs';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';

import Api from 'lib/api';
import Constants from 'lib/constants';

import styles from './index.module.scss';


dayjs.extend(advancedFormat);

const Item = ({item, onUpdate}) => {
    const day = dayjs(item.created).format(Constants.DATE_FORMAT_FULL);

    return (
        <div className={styles.Item}>
            <div className={styles.Item__gradient}></div>
            <div className={styles.Item__entry}>
                <span className={styles.Item__date}>{day}</span>
                <p className={styles.Item__text}>{item.entry}</p>
            </div>
            <div className={styles.Item__buttons}>
                <button onClick={async () => {
                    const updates = Object.assign({}, item, {isPinned: !item.isPinned});
                    await Api.updateItem(updates);
                    onUpdate(updates);
                }}>
                    {item.isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
                </button>

                <Link href={`/details/${item.id}`}>
                    <a>
                        <BsGearFill alt="View" />
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default Item;
