import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToTripDetailsPage,
  goToListTripsPage
} from "../../router/goToPages";

const CreatTripPage = () => {
  const history = useHistory();

  return (
    <div>
      <p> Pagina de criar viagens </p>
      <button onClick={() => goToHomePage(history)}>Home</button>
      <button onClick={() => goToTripDetailsPage(history)}>
        Detalhes viagem
      </button>
      <button onClick={() => goToListTripsPage(history)}>
        Lista de viagens{" "}
      </button>
    </div>
  );
};
export default CreatTripPage;
