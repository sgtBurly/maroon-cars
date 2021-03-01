import CarCard from "./CarCard";

const CardWrapper = () => {
    return (
        //looping carCards
        <div className="card-wrapper">
            {CarCard.map((card, i) => (
                <CarCard card={card} key={i} />
            ))}
        </div>
    )
}

export default CardWrapper;