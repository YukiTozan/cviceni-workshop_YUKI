export const WorkshopIntro = (props) => {
    return (
        <div className="intro">
            <h1>{props.title}</h1>
            <p>{props.intro}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    );
};