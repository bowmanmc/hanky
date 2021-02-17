import { useEffect, useState } from 'react';
import { AiOutlinePushpin } from 'react-icons/ai';
import { BsArrowClockwise } from 'react-icons/bs';
import { signIn, useSession } from 'next-auth/client';

import Item from 'components/item';
import Api from 'lib/api';

import styles from './board.module.scss';
import DataUtils from 'lib/datautils';

const BoardPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    // Two feeds to deal with, the random one and
    // the pinned items
    const [pinnedFeed, setPinnedFeed] = useState([]);
    const [randomFeed, setRandomFeed] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() => {
        Api.randomizedFeed().then((items) => {
            setRandomFeed(items);
        });
        Api.pinnedFeed().then((items) => {
            setPinnedFeed(items);
        });
    }, []);

    const handleRandomUpdate = (updated) => {
        const newFeed = [...randomFeed];
        newFeed[randomIndex] = updated;
        setRandomFeed(newFeed);

        if (updated.isPinned) {
            // ugh, just refresh from the server
            // so things are in sorted order
            Api.pinnedFeed().then((items) => {
                setPinnedFeed(items);
            });
        }
    };

    const handlePinnedUpdated = (updated) => {
        Api.pinnedFeed().then((items) => {
            setPinnedFeed(items);
        });

        // The item may be in our randomFeed, so we've
        // got to update it there too
        const rIndex = DataUtils.indexInFeed(randomFeed, updated.id);
        if (rIndex >= 0) {
            const newFeed = [...randomFeed];
            newFeed[rIndex] = updated;
            setRandomFeed(newFeed);
        }
    };

    let randomItem = null;
    if (randomFeed) {
        randomItem = randomFeed[randomIndex];
    }

    return (
        <div className={styles.BoardPage}>
            <div className={styles.BoardPage__title}>
                <span>Welcome to your Happy Place.</span>
            </div>

            {randomItem && (
                <div className={styles.BoardPage__random}>
                    <Item
                        item={randomItem}
                        onUpdate={handleRandomUpdate}
                        showPinButton={true}
                    />
                    <button
                        onClick={() => {
                            if (randomIndex === randomFeed.length - 1) {
                                setRandomIndex(0);
                            } else {
                                setRandomIndex(randomIndex + 1);
                            }
                        }}
                    >
                        <BsArrowClockwise /> New Random Entry
                    </button>
                </div>
            )}

            <div className={styles.BoardPage__pinned}>
                {pinnedFeed.length < 1 && (
                    <p className={styles.BoardPage__tip}>
                        Hey! Did you know you can click the &nbsp;
                        <AiOutlinePushpin /> icon on your favorite entries to
                        pin them here?
                    </p>
                )}

                {pinnedFeed.map((item, index) => {
                    if (!item.isPinned) {
                        // could happen if we unpin something
                        return null;
                    }

                    return (
                        <div className={styles.BoardPage__item} key={item.id}>
                            <Item
                                item={item}
                                onUpdate={handlePinnedUpdated}
                                showPinButton={true}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default BoardPage;
