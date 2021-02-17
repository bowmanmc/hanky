import Item from 'components/item';

import styles from './history.module.scss';


const Items = ({ items }) => {
    return (
        <div className={styles.History__items}>
            {items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                    />
                );
            })}
        </div>
    );
};
export default Items;
