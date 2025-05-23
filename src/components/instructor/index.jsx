export const Instructor = (props) => {
    return (
        <div className="instructor">
            <h3>O instruktorovi</h3>
            <p>{props.name}</p>
            <p>{props.bio}</p>
        </div>
    );
};