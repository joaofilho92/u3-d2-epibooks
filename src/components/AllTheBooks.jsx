import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books1 from "../books/fantasy.json";
import books2 from "../books/history.json";
import books3 from "../books/horror.json";
import books4 from "../books/romance.json";
import books5 from "../books/scifi.json";
import '../App.css';

class AllTheBooks extends Component {
    render() {
      return (
        <Container className="pb-5">
          <h2 className="pt-5 Sezione">Sezione Fantasy:</h2>
          <Row className="pt-3 flex-rap justify-content-center">
            {books1.map((book, index) => (
              <Col key={`Fantasy-${index}`} className="pb-3 px-2">
                <Card className="shadow libri" id="card">
                  <Card.Img variant="top" className="img-fluid w-100 h-100" id="image-card" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate title">{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className=" pt-5 Sezione">Sezione History:</h2>
          <Row className="pt-3 flex-rap justify-content-center">
            {books2.map((book, index) => (
              <Col key={`History-${index}`} className="pb-3 px-2">
                <Card className="shadow libri" id="card">
                  <Card.Img variant="top" className="img-fluid w-100 h-100" id="image-card" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate title">{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className=" pt-5 Sezione">Sezione Horror:</h2>
          <Row className="pt-3 flex-rap justify-content-center">
            {books3.map((book, index) => (
              <Col key={`Horror-${index}`} className="pb-3 px-2">
                <Card className="shadow libri" id="card">
                  <Card.Img variant="top" className="img-fluid w-100 h-100" id="image-card" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className=" pt-5 Sezione" id="Sezione">Sezione Romance:</h2>
          <Row className="pt-3 flex-rap justify-content-center">
            {books4.map((book, index) => (
              <Col key={`Romance-${index}`} className="pb-3 px-2">
                <Card className="shadow libri" id="card">
                  <Card.Img variant="top" className="img-fluid w-100 h-100" id="image-card" src={book.img} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className=" pt-5 Sezione">Sezione Sci-fi:</h2>
          <Row className="pt-3 flex-rap justify-content-center">
            {books5.map((book, index) => (
              <Col key={`Scifi-${index}`} className="pb-3 px-2">
              <Card className="shadow libri" id="card">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;