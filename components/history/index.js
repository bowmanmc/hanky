import Month from './month';

import styles from './history.module.scss';

const History = ({ history }) => {
    const years = Object.keys(history).sort(function(a, b) {
        return b - a;
    });

    return (
        <div className={styles.History}>
            {years.map((year) => {
                return (
                    <div key={year}>
                        <div className={styles.History__year}>
                            {year}
                        </div>
                        <Month year={history[year]} />
                    </div>
                );
            })}
        </div>
    );
};
export default History;
