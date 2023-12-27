import Head from "../../components/Head/index";
import Footer from "../../components/Footer/index";

import imgCultura from "../../assets/img-cultura.jpg";
import imgRodrigo from "../../assets/rodrigo.jpeg";
// import imgFrenteAcademia from "../../assets/frente.jpeg";

import { Container, CardCultura, CardCoach } from "./styles";

export default function index() {
  return (
    <Container>
      <Head title="SOBRE" />
      <CardCultura>
        <div className="cultura">
          <h1>NOSSA CULTURA</h1>
          <p>
            A RL Cross Training tem como cultura proporcionar qualidade de vida
            ao maior número de pessoas. Queremos tirar as pessoas do sofá e
            fazer com que sintam o prazer de ter uma vida saudável, praticando
            esportes e se alimentando corretamente. Para alcançar nossos
            objetivos, nos conectamos verdadeiramente às pessoas para
            entendê-las e trabalharmos juntos. Temos parcerias com excelentes
            profissionais da saúde para trazer um pacote completo para você.
            CrossFit é para todos! Venha mudar de vida com a gente.
          </p>
        </div>

        <div className="img-cultura">
          <img src={imgCultura} alt="Nossa cultura" />
        </div>
      </CardCultura>

      <div className="title-coach">
        <h1>NOSSO COACH</h1>
      </div>

      <CardCoach>
        <div className="img-coach">
          <img src={imgRodrigo} alt="Imagem de Rodrigo Leonardo" />
        </div>
        <div className="description">
          <h1>Rodrigo Leonardo de Góis Souza</h1>
          <p>
            Graduado em Educação Física licenciatura, bacharelado, Medicina
            chinesa, massoterapeuta, licença da CBF e Graduando Fisioterapia
            5/10. Somos um centro de treinamento que conta com estrutura moderna
            e aparelhos de ultima geração, com aulas ministrada por Rodrigo
            Leonardo um profissional qualificado. Para quem busca saúde e
            longevidade através dos esportes, a RLCROSS TRANING é o lugar certo;
            Aqui tudo foi pensado com carinho para atender a sua vontade. porque
            saúde é primordial!
          </p>
        </div>
      </CardCoach>
      <Footer />

    </Container>
  );
}
