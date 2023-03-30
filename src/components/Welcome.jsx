import { Container } from "react-bootstrap";

const Welcome = () => (
  <Container fluid className="bg-light shadow-sm " style={{ paddingBlock: "90px" }}>
    <h1 className="display-2">EpiBooks!</h1>
    <p className="lead">La migliore libreria online di tutta Italia</p>
  </Container>
);

export default Welcome;