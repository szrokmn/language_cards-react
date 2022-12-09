import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  console.log(data);
  return (
    <Container className="rounded-4 mt-4" style={{ background: "#f48b29" }}>
      <h1>Language</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col key={index} sm={6} md={4} lg={3}>
              <Language {...lang}  />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
