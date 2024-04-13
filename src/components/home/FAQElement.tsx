import styles from './FAQElement.module.css';


interface Props {
    question: string,
    answer: string
}

function FAQElement(props : Props)
{
    return(<div className={styles.container}>
        <div>
            <p>{props.question}</p>
        </div>
        <div>
            <p>{props.answer}</p>
        </div>
    </div>);
}

export default FAQElement;