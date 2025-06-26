import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#!" className="text-light me-3">Privacy Policy</a>
            <a href="#!" className="text-light">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;