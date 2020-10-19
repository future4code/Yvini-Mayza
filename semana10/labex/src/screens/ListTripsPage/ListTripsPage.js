import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToTripDetailsPage,
  goToCreateTripPage
} from "../../router/goToPages";

const ListTripPage = () => {
  const history = useHistory();

  return (
    <div>
      <p> lista de viagens </p>
      <button onClick={() => goToHomePage(history)}> HOME </button>
      <button onClick={() => goToTripDetailsPage(history)}>
        {" "}
        Detalhes Viagem{" "}
      </button>
      <button onClick={() => goToCreateTripPage(history)}> Criar viagem</button>
    </div>
  );
};
export default ListTripPage;
