export const Venue = (props) => {
    return (
        <div className="venue">
            <h3>Adresa</h3>
            <p>{props.name}<br/>
            {props.street}<br/>
            {props.city}</p>
        </div>
    );
};