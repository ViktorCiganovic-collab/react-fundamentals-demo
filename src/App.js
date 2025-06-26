import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SimpleProductCard from './SimpleProductCard';
import Footer from './Footer';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Menu from './Menu';

function App() {

const [products, setProducts] = useState([]); 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5173/Product/viewproducts'); //change this to an API endpoint from where you can fetch data
        setProducts(res.data);
        console.log(res.data); 
      } catch (error) {
        console.error("Fel vid hämtning av produkter:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">   
        <Menu />    
      </header>
      <h2 className="text-warning mt-5">Products</h2>
      <div className='buttons'>
      <button className="btn btn-primary m-2" onClick={() => setProducts([...products].sort((a, b) => a.price - b.price))}>Sort by price: Low to high</button>
      <button className="btn btn-danger" onClick={() => setProducts([...products].sort((a, b) => b.price - a.price))}>Highest price</button>
      </div>

      <Container>
        <Row className="d-flex flex-row justify-content-center mt-5">  
          {products.map((product) => 
          <Col lg={3} md={4} sm={6} key={product.id}>
            <ProductCard product={product} />
          </Col>)}
        </Row>
      </Container>
    
    <Footer />
    </div>    
  );
}

export default App;
