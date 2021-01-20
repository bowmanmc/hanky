import Hanky from './hanky';

import styles from './feed.module.scss';


const Feed = props => {
    const { feed } = props;

    return (
        <div className={styles.Feed}>
            {
                feed.map(item => {
                    return (
                        <Hanky key={item.id} hanky={item} />
                    );
                })
            }
        </div>
    );
};

export default Feed;
