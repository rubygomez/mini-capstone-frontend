import axios from "axios";
import { useState } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { useEffect } from "react";


export function Content() {
    // const products = [
    //     {id: 1, name: "rubix cube", price: 8.99 , url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENeOhQ6uRDKoWtg5OZSTiXRKKNflIuTI1WA&usqp=CAU"},
    //     {id: 2, name: "bop it", price: 5.97, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCceQXJEAkCd3FhmsptJqygBKSB9udaUB21g&usqp=CAU" }
    // ];

    const [products, setProducts] = useState([]);

    const handleIndexProducts = () => {
        console.log("handleIndexProducts");
        axios.get("http://localhost:3000/products.json").then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });
    };

    useEffect(handleIndexProducts, []);

    return (
        <div>
            <ProductsIndex products={products} />
        </div>
    );
}