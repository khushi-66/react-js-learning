import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
 // const[loading,error,products]=ReactQuery('/api/products');
const [products, setproducts] = useState([])
   const[error,setError]=useState(false);
   const [loading,setLoading]=useState(false)
  const[search,setSearch]=useState('')
   useEffect(()=>{
    const controller=new AbortController()
     //ife immeadiately invoked function
      ;(async()=>{
        try{
          setLoading(true)
          setError(false)
          const response=await axios.get('/api/products?search='+search,{signal:controller.signal})
        console.log(response.data);
         setproducts(response.data);
        }catch(error) {
          if(axios.isCancel(error))
          {
               console.log(error.message)
               return;
          }
           setError(true);
           setLoading(false);
        } })()
        //cleanup function
        return()=>{controller.abort()}
    },[search]);

    // if(error){
    //   return(
    //   <h1  style={{color:"red"}}>Something went Wrong</h1>
    // );
    // }

    // if(loading)
    // {
    //   <h1>Loading......</h1>
    // }

  return (
    <>
          <h1>Chai and API Handling</h1>  
            <input type="text" placeholder="Search" 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}
            
            /><br></br>
             {loading && <h1 style={{color:"blue"}}>Loading......</h1>}
         {  error && <h2  style={{color:"red"}}>Something went wrong</h2> }
         <h2  >Number of Products are : {products.length} </h2>
    </>
  )
}

export default App

// const ReactQuery=(url)=>
// {
// const [products, setproducts] = useState([])
//    const[error,setError]=useState(false);
//    const [loading,setLoading]=useState(false)
//   useEffect(()=>{
//      //ife immeadiately invoked function
//       ;(async()=>{
//         try{
//           setLoading(true)
//           setError(false)
//           const response=await axios.get(url)
//         console.log(response.data);
//          setproducts(response.data);
//         }catch(error) {
//            setError(true);
//            setLoading(false);
//         }
       
//       })()
//     },[]);

//     return [loading,error,products];
// }