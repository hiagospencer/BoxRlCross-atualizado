import { Container } from "./styles"
import horarios from '../../../assets/horarios.jpg'


function index() {
  return (
    <Container>
        <div className="img">
            <img src={horarios} alt="" />
        </div>
    </Container>
  )
}

export default index
