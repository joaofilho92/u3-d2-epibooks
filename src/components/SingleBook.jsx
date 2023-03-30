import { Component } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    SearchString: "",
  };
  filterBookList = (books) => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(this.state.SearchString.toLowerCase())
    );
  };

  InpuValue = (e) => {
    this.setState({ SearchString: e.target.value });
  };

  render() {
    return (
      <Container fluid>
        <div className="d-flex  px-4 justify-content-between">
          <h2>Elenco Libri</h2>
          <Form.Control
            type="text"
            placeholder="cerca il tuo libro"
            className="input-search"
            value={this.state.SearchString}
            onChange={this.InpuValue}
          />
        </div>
        <Row xs={2} md={4} lg={6} className="my-5">
          {!this.state.SearchString &&
            this.props.generi.map((book, index) => {
              return <SingleBook libro={book} key={"my-first-" + index} />;
            })}
          {this.state.SearchString &&
            this.filterBookList(this.props.generi).map((book, index) => {
              return <SingleBook libro={book} key={"my-second-" + index} />;
            })}
        </Row>
        <Row className="justify-content-center">
          {this.state.SearchString &&
            this.filterBookList(this.props.generi).length === 0 && (
              <Col xs={10} className="my-4">
                <Alert variant="danger">
                  I caratteri inseriti non Corrispondono a nessun libro
                </Alert>
              </Col>
            )}
        </Row>
      </Container>
    );
  }
}

export default BookList;