import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./state/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      {/* this provider is to let any compopoent to access the store */}
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
