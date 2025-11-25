const Experience = (props) => {
    return (
        <div className="flex justify-between my-5">
            <div className="flex-1">
                <a href={props.link}>{props.company}</a>
                <p>{props.title}</p>
            </div>
            <div className="flex-1">
                <p className="text-bold">{props.time}</p>
                <br></br>
                <p>{props.description}</p>
            </div>
            <div className="flex-1 justify-center">
                <a href={props.link}>
                    <img src={props.image} alt={props.imagealt} className="h-full w-full object-contain hover:brightness-75 trnsition duration-300" />
                </a>
            </div>
        </div>
    )
}
export default Experience