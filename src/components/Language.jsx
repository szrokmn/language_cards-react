import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
   
  return (
    <Container>
        <Image src={img} width="70%"></Image>
    </Container>
  )
}

export default Language