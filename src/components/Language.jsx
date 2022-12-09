import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
   
  return (
    <Container style={{background:"peachpuff"}} className="p-4 rounded-3">
        <Image src={img} width="60%"></Image>
        <h3 className="display-6">{name}</h3>
    </Container>
  )
}

export default Language