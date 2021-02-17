import Items from './items';

import styles from './history.module.scss';


const Month = ({ year }) => {
    const months = Object.keys(year);

    return (
        <>
            {months.map((month) => {
                return (
                    <div key={month}>
                        <div className={styles.History__month}>
                            {month}
                        </div>
                        <Items items={year[month]} />
                    </div>
                );
            })}
        </>
    );
};
export default Month;
