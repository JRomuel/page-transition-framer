import React from 'react'
import Link from "next/link";
import { animate, motion } from 'framer-motion';
import Layout from "../components/layout";

const easing = [ 0.6, -0.5, 0.01, 0.99 ];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    }
  }
}

const stagger = {
  animate : {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const index = ({ data }) => {
  return (
    <Layout>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className='container center'>
          <div className='title'>
            <h1>Select a protein</h1>
          </div>
          <motion.div variants={stagger} className='product-row'>
            {data.map(product => (
              <Link
                key={product.id}
                href='/products/[id]'
                as={`/products/${product.id}`}>
                <motion.div variants={fadeInUp} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className='card'>
                  <span className='category'>Protein</span>
                  <motion.img initial={{ x:60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{delay:0.2}}
                  key={product.image} src={product.image} width={250}/>
                  <div className='product-info'>
                    <h4>{product.name}</h4>
                    <span>{product.price}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://next-sample-api.vercel.app/api/products');
    const data = await res.json();
    return { props: { data } }
  } catch (error) {
    return { error };
  }
};




export default index