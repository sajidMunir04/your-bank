
interface Props{
    text: string
}


function LayoutDescription(props : Props){
    return (<p>
        {props.text}
    </p>);
    
}

export default LayoutDescription;