import { useEffect, useState } from 'react';
import Item from './item';

import styles from './random.module.scss';


const Random = () => {

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const loadData = async () => {
        const response = await fetch('/api/entries/feed');
        const items = await response.json();
        shuffleArray(items);
        return items;
    };

    const [feed, setFeed] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        loadData().then(items => {
            setFeed(items);
        });
    }, []);

    let item = null;
    if (feed) {
        item = feed[index];
    }

    return (
        <div className={styles.Random}>
            {item && <Item item={item} />}

            <button onClick={() => {
                if (index === (feed.length - 1)) {
                    setIndex(0);
                }
                else {
                    setIndex(index + 1);
                }
            }}>Random</button>
        </div>
    );
};

export default Random;
