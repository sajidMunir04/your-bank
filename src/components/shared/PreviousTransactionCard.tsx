import styles from "./PreviousTransactionCard.module.css";


interface Props{
    name: string,
    amount: number
}

function PreviousTransactionCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                    <p className={styles.arrows}>&#8644;</p>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.infoItem}>Transaction</p>
                <p className={styles.infoItemDetail}>{props.name}</p>
            </div>
        </div>
        <div className={styles.amountContainer}>
            <p className={styles.amountText}>{props.amount < 0 && '-'}</p>
            <p className={styles.amountText}>${Math.abs(props.amount)}</p>
        </div>
    </div>);
}

export default PreviousTransactionCard;