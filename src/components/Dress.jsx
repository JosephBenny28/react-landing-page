import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Fashion = [

  {
    "id": 1,
    "category": "Men clothing",
    "product": "Coat Suit",
    "price": 120,
    "image": "men-1.jpeg"
  },
  {
    "id": 2,
    "category": "Women Clothing",
    "product": "Cocktail",
    "price": 79,
    "image": "women-1.jpeg"
  },
  {
    "id": 3,
    "category": "Men clothing",
    "product": "Blazer",
    "price": 120,
    "image": "men-2.jpeg"
  },
  {
    "id": 4,
    "category": "Kid cloth",
    "product": "Frock",
    "price": 60,
    "image": "kid-1.jpeg"
  },
  {
    "id": 5,
    "category": "Women Clothing",
    "product": "MiniDress",
    "price": 79,
    "image": "women-2.jpeg"
  },
  {
    "id": 6,
    "category": "Men clothing",
    "product": "Casual Wear",
    "price": 120,
    "image": "men-3.jpeg"
  },
  {
    "id": 7,
    "category": "Women Clothing",
    "product": "Jumpsuit",
    "price": 79,
    "image": "women-3.jpeg"
  },
  {
    "id": 8,
    "category": "Kid cloth",
    "product": "Shirt",
    "price": 60,
    "image": "kid-2.jpeg"
  }
]


function Dress() {


  return (
    <Container className='my-3' >
      <h1 className='d-flex justify-content-center'>New Fashion</h1>
      <Row className='justify-content-center'>
        {Fashion.map((product) =>

          <Card key={product.id} style={{ width: '18rem' }} className=' product m-3'>
            <Card.Img variant="top" src={require(`./images/${product.image}`)} />
            <Card.Body>
              <Card.Title>{product.product}</Card.Title>
              <Card.Text >
                ${product.price}
              </Card.Text>
              <Button variant="btn btn-outline-dark">Buy Now</Button>
            </Card.Body>
          </Card>

        )}


      </Row>
    </Container>
  )
}

export default Dress