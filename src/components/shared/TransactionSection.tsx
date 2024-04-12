import PreviousTransactionCard from "./PreviousTransactionCard";
import styles from "./TransactionSection.module.css";

function TransactionSection()
{
    return (<div className={styles.container}>
        <div className={styles.backgroundSection}>

        </div>
        <div className={styles.subContainer}>
            <div>
                <p>Your Transactions</p>
            </div>
            <div>
                <div>
                    <PreviousTransactionCard name="Joel Kenley" amount={-68}/>
                </div>
                <div>
                    <PreviousTransactionCard name="Joel Kenley" amount={-68}/>
                </div>
                <div>
                    <PreviousTransactionCard name="Joel Kenley" amount={-68}/>
                </div>
            </div>
        </div>
    </div>);
}

export default TransactionSection;