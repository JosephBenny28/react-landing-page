import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa";

function Offcan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="none" className={''} onClick={handleShow}>
        <FaBars/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header  closeButton >
         Categories
        </Offcanvas.Header>
        <Offcanvas.Body className=' categories d-flex flex-column '>
          <a href="home">Home</a>
          <a href="fashion">Fashion</a>
          <a href="electronic">Electronic</a>
          <a href="jewellery">Jewellery</a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcan;