import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplicationForm, goToLoginPage } from "../../router/goToPages";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <p> Pagina Inicial </p>
      <button onClick={() => goToLoginPage(history)}>Ir para login Adm </button>
      <button onClick={() => goToApplicationForm(history)}>
        Inscreverse para viagem
      </button>
    </div>
  );
};
export default HomePage;
