import { useState } from 'react'
import Products from './compenents/Products';

function App() {
 const products=[
  {
    name:"Surf Excel",
    date:"2024-04-13",
    amount:150

  },
  {
    name:"Tide",
    date:"2024-03-15",
    amount:150
  },
  {
    name:"Aerial",
    date:"2024-03-20",
    amount:150
  },
  {
    name:"Nirma",
    date:"2024-02-18",
    amount:150
  } 
 ]

  return (
    <>
  <Products  products={products} />
    </>
  );
}
export default App;