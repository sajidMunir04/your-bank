import { ChangeEvent, useState } from "react";
import PreviousTransactionCard from "./PreviousTransactionCard";
import styles from "./TransactionSection.module.css";

function TransactionSection()
{
    //Initially this only supports INR TO USD conversion,so can use static definitions

    const unitPrice : number = 0.012;

    const [convertedAmount,setConvertedAmount] = useState(0);

    const handleCurrencyInput = ( e: ChangeEvent<HTMLInputElement>) => {
        setConvertedAmount(parseInt(e.target.value) * unitPrice);
    }

    return (<div className={styles.container}>
        <div className={styles.backgroundSection}>
            <div className={styles.bgImageContainer}>
                <img className={styles.bgImage} src="/images/home/abstract.svg"/>
            </div>
        </div>
        <div className={styles.subContainer}>
            <div className={styles.portion}>
                <div>
                    <p className={styles.infoText}>Your Transactions</p>
                </div>
                <div className={styles.previousTransactionsSection}>
                    <PreviousTransactionCard scale={0.9} zIndex={-1} name="Joel Kenley" amount={-68}/>
                    <PreviousTransactionCard scale={0.8} zIndex={-2} name="Joel Kenley" amount={-68}/>
                    <PreviousTransactionCard scale={0.7} zIndex={-3} name="Joel Kenley" amount={-68}/>
                </div>
            </div>
            <div className={styles.moneyConversionSection}>
                <div><p className={styles.infoText}>Money Exchange</p></div>
                <div className={styles.moneyConverter}>
                        <div className={styles.currencySection}>
                            <div className={styles.countrySection}>
                                <div className={styles.converterCountryInfo}>
                                    <div className={styles.countryFlagContainer}>
                                        <img className={styles.countryFlag} src="/images/home/india.svg"/>
                                    </div>
                                    <p className={styles.countryName}>INR</p>
                                </div>
                                <div>
                                    <p className={styles.countryCurrencyName}>Indian Rupees</p>
                                </div>
                            </div>
                            <div className={styles.currencyInputContainer}>
                                <input className={styles.currencyInput} type="number" defaultValue={0} onChange={handleCurrencyInput}/>
                            </div>
                        </div>
                        <div className={styles.currencySection}>
                            <div className={styles.countrySection}>
                                <div className={styles.converterCountryInfo}>
                                    <div className={styles.countryFlagContainer}>
                                        <img className={styles.countryFlag} src="/images/home/usa.svg"/>
                                    </div>
                                    <p className={styles.countryName}>USD</p>
                                </div>
                                <div>
                                    <p className={styles.countryCurrencyName}>United States Dollar</p>
                                </div>
                            </div>
                            <div className={styles.currencyInputContainer}>
                                <input className={styles.currencyInput} type="number" placeholder="000" value={convertedAmount}/>
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