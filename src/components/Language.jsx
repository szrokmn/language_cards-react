import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);
  console.log(showImage);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-3 h-100 lang-card"
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container>
          <Image src={img} width="70%" className="lang-logo"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
