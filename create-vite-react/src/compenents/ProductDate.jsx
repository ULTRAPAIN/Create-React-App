import React from 'react'

function ProductDate(props) {
  return (
   <>
   <div className=' w-5 h-5 bg-black text-white p-2'>
    {props.date}
   </div>
   </>
  )
}

export default ProductDate