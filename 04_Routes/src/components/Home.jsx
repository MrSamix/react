import { useEffect, useState } from "react"
import Card from "./Card";
import Menu from "./Menu";

async function FetchProducts() {
  const res = await fetch('https://dummyjson.com/products')
  return await res.json()
}


function Home() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    FetchProducts().then(data => setProducts(data.products));
  }, []);
  
  return (
    <div>
      {/* <Menu /> */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', padding: '16px', marginTop: '42px' }}>
          {products.map((product) => (
              <Card key={product.id} {...product} />))}
      </div>
    </div>
  )
}

export default Home