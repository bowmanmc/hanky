import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { GrStripe } from 'react-icons/gr';
import { useRouter } from 'next/router'

import Api from 'lib/api';
import Constants from 'lib/constants';

import styles from './index.module.scss';


dayjs.extend(advancedFormat);

const Details = ({ info }) => {
    const router = useRouter();

    let endDate = null;
    if (info && info.end) {
        endDate = dayjs(info.end).format(Constants.DATE_FORMAT_DAY);
    }

    const go2portal = async (e) => {
        e.preventDefault();

        const session = await Api.stripePortal();
        if (session.statusCode === 500) {
            console.error(session.message);
            return;
        }
        router.push(session.url);
    };

    return (
        <>
            <p>
                Your subscription ends on <br />
                {endDate}
            </p>
            <button onClick={go2portal}>
                <GrStripe /> Manage your subscription
            </button>
        </>
    );
};
export default Details;
