import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../router/goToPages";

const ApplicationForm = () => {
  const history = useHistory();

  return (
    <div>
      <p>Formulario para se inscrever </p>
      <button onClick={() => goToHomePage(history)}> Voltar para Home </button>
    </div>
  );
};

export default ApplicationForm;