import {useState, useEffect} from "react";

const App = () => {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState("");
  const[product,setProduct] = useState([]);

  function fetchProduct() {
    
  }
  useEffect(()=> {
    setLoading(true);
    fetchProduct();
  })
  return (
    <div>
      <h1 className="heading">Add product</h1>
      <div>

      </div>
    </div>
  )
}
export default App;