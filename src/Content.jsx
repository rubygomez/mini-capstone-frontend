import axios from "axios";
import { useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";


export function Content() {


    const [products, setProducts] = useState([]);
    const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});

    const handleIndexProducts = () => {
        console.log("handleIndexProducts");
        axios.get("http://localhost:3000/products.json").then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });
    };

    const handleCreateProduct = (params, successCallback) => {
        console.log("handleCreateProduct", params);
        axios.post("http://localhost:3000/products.json", params).then((response) => {
        setPhotos([...products, response.data]);
        successCallback();
        });
    };

    const handleShowProduct = (product) => {
        console.log("handleShowProduct", product);
        setIsProductsShowVisible(true);
        setCurrentProduct(product);
    };

    const handleClose = () => {
        console.log("handleClose");
        setIsProductsShowVisible(false);
    };



    useEffect(handleIndexProducts, []);

    return (
        <div>
            <ProductsNew onCreateProduct={handleCreateProduct}/>
            <ProductsIndex products={products} onShowProduct={handleShowProduct} />
            <Modal show={isProductsShowVisible} onClose={handleClose}>
                <h1>Test</h1>
            </Modal>
        </div>
    );
}