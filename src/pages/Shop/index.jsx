import Produtos from "../../components/Produtos";
import Head from "../../components/Head";

import { Container } from "./styles";

function index() {
  return (
    <Container>
      <Head title="LOJA" />
      <div>
        <h1>Acessórios e Suplementos</h1>
      </div>
      <p>*Retirada dos produtos somente na Acadêmia</p>
      <Produtos />
    </Container>
  );
}

export default index;
