import PreviousTransactionCard from "./PreviousTransactionCard";
import styles from "./TransactionSection.module.css";

function TransactionSection()
{
    return (<div className={styles.container}>
        <div className={styles.backgroundSection}>

        </div>
        <div className={styles.subContainer}>
            <div className={styles.previousTransactionsSection}>
                <div>
                    <p className={styles.infoText}>Your Transactions</p>
                </div>
                <div className={styles.previousTransactionsSection}>
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
            <div className={styles.moneyConversionSection}>
                <div><p className={styles.infoText}>Money Exchange</p></div>
                <div className={styles.moneyConverter}>
                        <div className={styles.currencySection}>
                            <div>
                                <select>
                                    <option>INR</option>
                                    <option>USD</option>
                                    <option>EURO</option>
                                    <option>GBP</option>
                                </select>
                            </div>
                            <div>
                                <div>
                                    <input type="number" placeholder="000"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.currencySection}>
                            <div>
                                <select>
                                    <option>INR</option>
                                    <option>USD</option>
                                    <option>EURO</option>
                                    <option>GBP</option>
                                </select>
                            </div>
                            <div>
                                <div>
                                    <input type="number" placeholder="000"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.exchangeButtonContainer}>
                <button className={styles.button}>Exchange</button>
            </div>
        </div>
    </div>);
}

export default TransactionSection;