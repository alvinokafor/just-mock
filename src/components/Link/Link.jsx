import './Link.css';

function Link(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer" id={props.id} className="link">{props.content}</a>
    );
}

export default Link;