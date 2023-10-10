import DishCard from "./DishCard";

function Highlights() {
    const dishes = [
        {
            dish: "Greek salad",
            image: "noImg.jpg",
            price : 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "

        },
        {
            dish: "Bruchetta",
            image: "noImg.jpg",
            price : 5.99,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "

        },
        {
            dish: "Lemon Dessert",
            image: "noImg.jpg",
            price : 5,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."

        }
    ]
    return (
        <section>
            <h2>This week Specials!</h2>
            <button>Online Menu</button>
            {
                dishes.map((x)=>{return (<DishCard item={x}/>)})
            }
        </section>
    );
}

export default Highlights;