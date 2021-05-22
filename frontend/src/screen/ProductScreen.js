import React from 'react';
import Product from '../Components/Product';
import Rating from '../Components/Rating';
import data from '../data';
import {Link }from 'react-router-dom';

const ProductScreen =(Props)=>{
    const product = data.products.find((x) => x._id === Props.match.params.id);
    console.log(product)
    
    if(!product){
        return <div>Product Not Found</div>;
    }

    return(

        <>
        <Link to ="/">Back to Home</Link>
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image}
                alt={Product.name}></img>
                </div>
            
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                            rating={product.name}
                            numReviews={product.numReviews}>

                            </Rating>
                        </li>
                        <li>
                            price: RS{product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="col-1">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">Rs{product.price}</div>
                                </div>
                            </li>

                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>{product.countInStock > 0 ?(
                                        <span className="sucess">In Stock</span>
                                    ) :(
                                        <span className="error">Out of Stock</span>
                                    )
                                    }</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block"> Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            
        </div>
        
        </>
    )
}

export default ProductScreen;   