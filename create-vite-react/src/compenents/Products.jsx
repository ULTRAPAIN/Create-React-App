import React from 'react'
import ProductsItem from './ProductsItem'

function Products(props) {
  return (
    <>
   <div className=" bg-yellow-500 w-1/2 h-screen mx-auto  p-2 rounded-xl">
    <ProductsItem 
    title={props.Products[0].name}
    amount={props.Products[0].amount} 
    date={props.Products[0].date}   
    />
     <ProductsItem 
    title={props.Products[1].name}
    amount={props.Products[1].amount} 
    date={props.Products[1].date}   
    />
     <ProductsItem 
    title={props.Products[2].name}
    amount={props.Products[2].amount} 
    date={props.Products[2].date}   
    />
     <ProductsItem 
    title={props.Products[3].name}
    amount={props.Products[3].amount} 
    date={props.Products[3].date}   
    />
   </div>
   </>
  )
}

export default Products