

//receiving props from parent CardsWrapper
function CarCard(props) {


    return (
        <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src={`../assets/car-pictures/${props.data.make}-${props.data.model}-${props.data.year}.jpg`} alt={props.data.model}/>
            <div className="card-body">
                <h5 className="card-title">{props.data.make}</h5>
                <p className="card-text">{props.data.price}</p>
                <p className="card-text">{props.data.descShort}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default CarCard;