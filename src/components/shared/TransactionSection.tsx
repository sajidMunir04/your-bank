import PreviousTransactionCard from "./PreviousTransactionCard";
import styles from "./TransactionSection.module.css";

function TransactionSection()
{
    return (<div className={styles.container}>
        <div className={styles.backgroundSection}>

        </div>
        <div className={styles.subContainer}>
            <div>
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
            <div>
                <div><p>Money Exchange</p></div>
                <div>
                    <div className={styles.moneyConverter}>
                        <div>
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
                                    <p>{6556564}</p>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                    <p>{6556564}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default TransactionSection;