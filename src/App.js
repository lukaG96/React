import React from "react";

import { Provider } from "react-redux";
import Team from "./Components/teams/Team";
import store from "./redux/store";
import { Router } from "react-router-dom";
import TeamDetails from "./Components/teams/TeamDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Team path="/" />
          <TeamDetails path="/details/:id" />
        </Provider>
      </Router>
    </div>
  );
};

export default App;
