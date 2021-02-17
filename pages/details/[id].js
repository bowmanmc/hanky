import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';

import Api from 'lib/api';
import EntryEditor from 'components/forms/entryeditor';
import PinnedSwitch from 'components/forms/pinnedswitch';
import PublicSwitch from 'components/forms/publicswitch';
import SplashCarousel from 'components/forms/splash';
import ShareBox from 'components/sharebox';
import Constants from 'lib/constants';

import styles from './details.module.scss';


const DetailsPage = () => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const router = useRouter();
    const { id } = router.query;

    const [item, setItem] = useState(null);
    useEffect(() => {
        Api.fetchItem(id).then((i) => {
            setItem(i);
        });
    }, [id]);

    // Loading Screen
    if (!item) {
        return (
            <div className={styles.DetailsPage}>
                <p>loading...</p>
            </div>
        );
    }

    const entryLink = (
        <p className={styles.DetailsPage__entrylink}>
            Your entry is viewable at: &nbsp;
            <a href={`/thanks/${item.author}/${item.id}`} target="_blank">
                {`https://app.getthanky.com/thanks/${item.author}/${item.id}`}
            </a>
        </p>
    );

    const day = dayjs(item.created).format(Constants.DATE_FORMAT_FULL);

    return (
        <div className={styles.DetailsPage}>
            <main>
                <p className={styles.DetailsPage__date}>
                    On {day} you were thinking about...
                </p>

                <EntryEditor
                    item={item}
                    editable={true}
                    onUpdate={(updated) => setItem(updated)}
                />

                <PinnedSwitch
                    item={item}
                    onUpdate={(updated) => {
                        setItem(updated);
                    }}
                />

                <PublicSwitch
                    item={item}
                    onUpdate={(updated) => {
                        setItem(updated);
                    }}
                />
                {item.isPublic && entryLink}
                {item.isPublic && <SplashCarousel item={item} onUpdate={updated => setItem(updated)} />}
                {item.isPublic && <ShareBox item={item} />}
            </main>
        </div>
    );
};
export default DetailsPage;
