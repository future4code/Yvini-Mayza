import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import LoginPage from "../screens/LoginPage/LoginPage";
import CreateTripPage from "../screens/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../screens/TripDetailsPage/TripDetailsPage";
import ListTripPage from "../screens/ListTripsPage/ListTripsPage";
import ApplicationForm from "../screens/ApplicationForm/ApplicationForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/CreateTripPage">
          <CreateTripPage />
        </Route>

        <Route exact path="/TripDetailsPage">
          <TripDetailsPage />
        </Route>

        <Route exact path="/ListTripPage">
          <ListTripPage />
        </Route>

        <Route exact path="/ApplicationForm">
          <ApplicationForm />
        </Route>

        <Route>
          <div> Erro </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
