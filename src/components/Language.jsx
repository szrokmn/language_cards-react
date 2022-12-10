import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  console.log(showDesc);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-3"
      onClick={() => setShowDesc(!showDesc)}
    >
      {!showDesc && (
        <Container>
          <Image src={img} width="60%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {showDesc && (
        <ol>
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
