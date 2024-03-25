

export function ProductsNew(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateProduct(params, () => event.target.reset());
    };
    
    return (
        <div>
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input name="name" type="text"/>
                </div>
                <div>
                    Price: <input name="price" type="text" />
                </div>
                <div>
                    Quantity: <input name="quantity" type="text" />
                </div>
                <div>
                    Description: <input name="description" type="text" />
                </div>
                <div>
                    Supplier_Id: <input name="supplier_id" type="text" />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
}