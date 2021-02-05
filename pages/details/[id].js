import Switch from 'react-switch';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';

import Polaroid from 'components/polaroid';
import PublicSwitch from 'components/forms/publicswitch';
import ShareBox from 'components/sharebox';
import Constants from 'lib/constants';

import styles from './details.module.scss';

const DetailsPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        signIn();
    }

    const router = useRouter();
    const { id } = router.query;

    const loadItem = async (itemId) => {
        if (!itemId) {
            return;
        }

        const response = await fetch(`/api/entry/${itemId}`);
        const item = await response.json();
        return item;
    };

    const [item, setItem] = useState(null);
    useEffect(() => {
        loadItem(id).then((i) => {
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

    const day = dayjs(item.created).format(Constants.DATE_FORMAT_DAY);

    return (
        <div className={styles.DetailsPage}>
            <p className={styles.DetailsPage__date}>
                On {day} you were thinking about...
            </p>

            <Polaroid item={item} editable={true} onUpdate={updated => setItem(updated)}/>

            <PublicSwitch
                item={item}
                onUpdate={(updated) => {
                    setItem(updated);
                }}
            />

            {item.isPublic && <ShareBox item={item} />}
        </div>
    );
};
export default DetailsPage;
