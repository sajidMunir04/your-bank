
interface Props {
    question: string,
    answer: string
}

function FAQElement(props : Props)
{
    return(<div>
        <div>
            <p>{props.question}</p>
        </div>
        <div>
            <p>{props.answer}</p>
        </div>
    </div>);
}

export default FAQElement;