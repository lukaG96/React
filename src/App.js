import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Team from "./Components/teams/Team";
import TeamDetails from "./Components/teams/TeamDetails";
import store from "./redux/store";
import Navbar from "./Components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Provider store={store}>
          <Navbar />
          <Route exact path="/" component={Team} />
          <Route path="/details/:team_id" component={TeamDetails} />
        </Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
