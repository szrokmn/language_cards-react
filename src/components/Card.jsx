
import  Container  from 'react-bootstrap/Container'
import Language from './Language'

const Card = () => {
  return (
    <Container className="rounded-4" style={{background:"#f48b29"}}>
        <h1>Language</h1>        
        <Language/>
    </Container>
  )
}

export default Card;