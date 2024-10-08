import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        data.img.data[0].attributes.url.startsWith('http')
                            ? data.img.data[0].attributes.url
                            : process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
                    }
                    alt={data.title || "Product Image"}
                />

            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
