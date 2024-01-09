import { Container } from "./styles";

import logo from "../../../assets/logo2.jpeg";

function index() {
  const sendToWhatSapp = () => {
    const nome = document.querySelector("#firstName").value;
    const sobrenome = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const telefone = document.querySelector("#phone").value;
    const errorMensagem = document.querySelector("#errorMensagem");

    const numeroDestino = "+5584987137129";
    const mensagem =
      "Olá, gostaria de fazer parte da família RL Cross Training!";

    const url =
      "https://wa.me/" +
      numeroDestino +
      "?text=" +
      mensagem +
      "%0a%0a" +
      "Nome: " +
      nome +
      "%0a" +
      "Sobrenome: " +
      sobrenome +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Telefone: " +
      telefone +
      "%0a";

    if (nome === "" || sobrenome === "" || email === "" || telefone === "") {
      errorMensagem.setAttribute("class", "error");
    } else {
      window.open(url, "_blank").focus();
    }
  };

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
          PARA AGENDAR UMA AULA EXPERIMENTAL, PREENCHA OS CAMPOS ABAIXO, VOCÊ
          SERÁ DIRECIONADO PARA O WHATSAPP
        </p>
      </div>
      <form>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nome"
          required
        />

        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sobrenome"
          required
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          className="phone"
          type=" text"
          name="phone"
          id="phone"
          placeholder="Telefone: DDD 9 9999 9999"
          maxLength="14"
          required
        />

        <p id="errorMensagem">* Preencha os campos corretamente!</p>

        <button type="button" onClick={sendToWhatSapp}>
          IR PARA WHATSAPP
        </button>
      </form>
    </Container>
  );
}

export default index;
