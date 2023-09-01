import axios from 'axios';
import React, { useEffect } from 'react'

function Products() {
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = React.useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{setProducts([...res.data])})
    },[]);
    function addToCart(p){
        p.count=1;
        setCart([...cart,p])
    }
  return (
    <div className='mybox'>
        <h1>Products</h1>
        <div className='d-flex flex-wrap'>
            <div className='w-75'>
            <ul className='d-flex flex-wrap'>
                {
                    products.length>0 && products.map((product)=>{
                        return (
                            <div className="card m-2 p-2" style={{width: "150px"}}>
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <b className="card-title">{product.title.slice(0,10)}</b>
                                    <p className="card-text">{product.price}</p>
                                    <button onClick={()=>{addToCart(product)}}>Add To cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
            </div>
            <div className='w-25 border p-2'>
               {
                console.log(cart)
               }
                <ul>
                    {
                        cart.length>0 && cart.map((cp)=>{
                            return <li>
                                <b>{cp.title.slice(0,10)}:{cp.count}</b>
                                </li>
                        })
                    }
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Products