import styles from "./PreviousTransactionCard.module.css";


interface Props{
    name: string,
    amount: number
}

function PreviousTransactionCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.subContainer}>
            <div>
                <div className={styles.imageContainer}>
                    <img src="/Icon(12).png"/>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.infoItem}>Transaction</p>
                <p className={styles.infoItemDetail}>{props.name}</p>
            </div>
        </div>
        <div>
            <p>{props.amount < 0 && '-'}${Math.abs(props.amount)}</p>
        </div>
    </div>);
}

export default PreviousTransactionCard;