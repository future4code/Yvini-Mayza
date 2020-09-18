import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToListTripsPage,
  goToCreateTripPage
} from "../../router/goToPages";

const TripDetailsPage = () => {
  const history = useHistory();
  return (
    <div>
      <p> Detalhes viagem</p>
      <button onClick={() => goToHomePage(history)}> home</button>
      <button onClick={() => goToListTripsPage(history)}> LISTA VIAGENS</button>
      <button onClick={() => goToCreateTripPage(history)}>
        {" "}
        Criar viagem{" "}
      </button>
    </div>
  );
};
export default TripDetailsPage;
