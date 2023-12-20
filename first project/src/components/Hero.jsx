

const Hero = (props) => {
    return (
        <div>
            <h2>Name : {props.item.name}</h2>
            <h2>Price : {props.item.price}</h2>
            <h3>quantity : {props.item.quantity}</h3>
            <button onClick={props.btn}>Add to Cart</button>
        </div>
    );
};

export default Hero;