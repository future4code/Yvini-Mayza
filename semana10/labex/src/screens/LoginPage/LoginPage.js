import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToListTripsPage } from "../../router/goToPages";

const LoginPage = () => {
  const history = useHistory();

  return (
    <div>
      <p>Pagina Login</p>
      <button onClick={() => goToHomePage(history)}> Voltar para home</button>
      <button onClick={() => goToListTripsPage(history)}>
        {" "}
        ver lista de viagem{" "}
      </button>
    </div>
  );
};
export default LoginPage;
