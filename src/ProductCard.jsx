import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product}) {
  
    return (
    <Card className="mb-4 shadow-sm">
      <Card.Img 
      variant="top" 
      src={product.imageUrl}
      alt={product.name}
      className="img-fluid"
      style={{ height: '200px', objectFit: 'cover'}}
       />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>    
        {product.description}     
        </Card.Text>
        <h5>${product.price}</h5>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;