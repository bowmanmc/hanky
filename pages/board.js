import { useEffect, useState } from 'react';
import { BsArrowClockwise } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/client';

import Item from 'components/item/item';
import Api from 'lib/api';

import styles from './board.module.scss';


const BoardPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    // Pinned Feed
    const [pinnedFeed, setPinnedFeed] = useState([]);

    const [randomFeed, setRandomFeed] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        // Get feed in random order (so we can cycle through)
        Api.randomizedFeed().then(items => {
            setRandomFeed(items);
        });

        // Get pinned items
        Api.pinnedFeed().then(items => {
            setPinnedFeed(items);
        });
    }, []);

    let randomItem = null;
    if (randomFeed) {
        randomItem = randomFeed[randomIndex];
    }

    return (
        <div className={styles.BoardPage}>
            <div className={styles.BoardPage__title}>
                <span>Welcome to your Happy Place.</span>
            </div>

            {randomItem && <div className={styles.BoardPage__random}>
                    <Item item={randomItem} onUpdate={updates => {
                        // Update the item in the randomFeed so that
                        // the item re-renders with the updated attrs
                        const newFeed = [...randomFeed];
                        newFeed[randomIndex] = updates;
                        setRandomFeed(newFeed);
                    }}/>
                    <button onClick={() => {
                        if (randomIndex === (randomFeed.length - 1)) {
                            setRandomIndex(0);
                        }
                        else {
                            setRandomIndex(randomIndex + 1);
                        }
                    }}><BsArrowClockwise /> New Random Entry</button>
                </div>
            }

            <div className={styles.BoardPage__pinned}>
                {
                    pinnedFeed.map((item, index) => {
                        if (!item.isPinned) {
                            // could happen if we unpin something
                            return null;
                        }

                        return (
                            <Item key={item.id} item={item} onUpdate={updated => {
                                const newFeed = [...pinnedFeed];
                                newFeed[index] = updated;
                                setPinnedFeed(newFeed);
                            }}/>
                        );
                    })
                }
            </div>
        </div>
    );
};
export default BoardPage;
