const Experience = (props) => {
    return (
        <div className="flex">
            <p>{props.text}</p>
            <img src={props.image} alt={props.imagealt}/>
        </div>
    )
}
export default Experience