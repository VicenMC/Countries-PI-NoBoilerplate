import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Activity from "./pages/Activity/activity.jsx";
import Details from "./pages/Details/Details.jsx";
import Landing from "./pages/Landing/landing.jsx";
import MainPage from "./pages/MainPage/mainPage.jsx";

/*Una vez creada, añadimos la ruta al registro*/
//La propiedad indica que la url debe ser exacta para ingresar a la página
export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={MainPage} />
      <Route exact path="/activity" component={Activity} />
      <Route exact path="/details/:id" component={Details} />
    </BrowserRouter>
  );
}
