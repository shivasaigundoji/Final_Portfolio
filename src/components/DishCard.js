
function DishCard({item}){
    return (
        <section>
            <img src={item.image} alt={item.dish + "Image"}/>
            <h3>{item.dish}</h3>
            <h3>{"$"+item.price}</h3>
            <p>{item.description}</p>
            <h4>Order Online</h4>
            <img src="" alt="delivery logo"/>
        </section>
        );
}

export default DishCard;