
import ProductDate from "./ProductDate"

function ProductsItem(props) {
    
    const [Title,setTitle]=useState(props.title)

    function handleClick(){
        setTitle("Yo Yo ")
        console.log("Yo Yo ")
    }
  return (
    <>
    <ProductDate date={props.date}/>
    <div className=" w-4/5 h-10 bg-white text-center text-red-500 rounded-xl">
        <h2>{Title}</h2>
    </div>
    <button onClick={handleClick}> Add to cart </button>
    </>
  )
}

export default ProductsItem