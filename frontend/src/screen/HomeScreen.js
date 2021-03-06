import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../Components/Product';


const HomeScreen =()=>{
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const fetchData = async () =>{
      const {data}=await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, []);

    return(

        <>
         <div>
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
       
        </>
    )
}

export default HomeScreen;