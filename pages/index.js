import React from 'react'
import axios from 'axios';
import Link from "next/link";

const index = (props) => {
  return (
    <div className='container center'>
      <div className='title'>
        <h1>Select a protein</h1>
      </div>
      <div className='product-row'>
        {props.products.map(product => (
          <Link
            key={product.id}
            href='/products/[id]'
            as={`/products/${product.id}`}>
            <div className='card'>
              <span className='category'>Protein</span>
              <img key={product.image} src={product.image} width={250} />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

index.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://next-sample-api.vercel.app/api/products');
    const products = res.data;
    return { products };
  } catch (error) {
    return { error };
  }
};



export default index