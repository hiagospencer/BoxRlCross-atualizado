import { Container } from "./styles";

import logo from "../../../assets/logo2.jpeg";

function index() {
  return (
    <Container>
      <div className="description">
        <span>
          A melhor maneira de conhecer o CrossFit é fazendo. Por isso,
          oferecemos uma aula experimental para você conhecer essa modalidade e
          descobrir que entrar em forma pode ser divertido e descontraído.
          Esqueça as planilhas de academia e comece a ter resultados agora
          mesmo.
        </span>
      </div>
      <div className="title">
        <img src={logo} alt="" />
        <h2>RL CROSS TRAINING</h2>
        <p>
          PARA AGENDAR UMA AULA EXPERIMENTAL, PREENCHAR OS CAMPOS
          ABAIXO, VOCÊ SERÁ DIRECIONADO PARA O WHATSAPP
        </p>
      </div>
      <form action="." method="get">
        <input type="text" name="firstName" id="firstName" placeholder="Nome" required/>

        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sobrenome"
          required
        />

        <input type="email" name="email" id="email" placeholder="Email" required />

        <input type="number" name="phone" id="phone" placeholder="Telefone" required/>

        <button type="submit">IR PARA WHATSAPP</button>
      </form>
    </Container>
  );
}

export default index;
