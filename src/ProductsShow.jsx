

export function ProductsShow(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdateProduct(props.product.id, params, () => event.target.reset());
    };

    const handleClick = () => {
        props.onDestroyProduct(props.product.id);
    };

    return (
        <div>
            <h1>{props.product.name}: </h1>
            <p>Price: {props.product.price} </p>
            <p>Quantity: {props.product.Quantity} </p>
            <p>Description: {props.product.Description} </p>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input defaultValue={props.product.name} name="name" type="text" />
                </div>
                <div>
                    Price: <input defaultValue={props.product.price} name="price" type="text" />
                </div>
                <div>
                    Quantity: <input defaultValue={props.product.quantity} name="quantity" type="text" />
                </div>
                <div>
                    Description: <input defaultValue={props.product.description} name="description" type="text" />
                </div>
                <button type="submit">Update Product</button>
            </form>
            <button onClick={handleClick}>Delete Product</button>
        </div>
    );
}