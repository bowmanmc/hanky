import Item from './item';

import styles from './index.module.scss';


const Feed = props => {
    const { feed } = props;

    return (
        <div className={styles.Feed}>
            {
                feed.map(item => {
                    return (
                        <Item key={item.id} item={item} />
                    );
                })
            }
        </div>
    );
};

export default Feed;
