import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logos from './images/logo.png';
import Search from './Search'
import Caro from './Carousel';

function Heading() {
  return (
    <div className='container-fluid  banner mb-5'>


      <Navbar className="navmain " bg="dark" variant="dark" >
        <Container className='d-flex justify-content-center '>

          <Nav className="navitem gap-4">
            <Nav.Link href="#best-seller" className=' navlink'>Best Seller</Nav.Link>
            <Nav.Link href="#gift-idea" className=' navlink'>Gift Ideas</Nav.Link>
            <Nav.Link href="#new-releases" className=' navlink'>New Releases</Nav.Link>
            <Nav.Link href="#deals" className=' navlink'>Today's Deals</Nav.Link>
            <Nav.Link href="#service" className=' navlink'>Customer Service</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
      <div className='d-flex justify-content-center p-4'>
        <img src={Logos} alt="" className='' />
        
      </div >
      <Search />
      <Caro />
    </div>)
};

export default Heading;