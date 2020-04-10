import React from "react";

import { Provider } from "react-redux";
import Team from "./Components/teams/Team";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Team />
      </Provider>
    </div>
  );
};

export default App;
