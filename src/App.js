import React from "react";
import { BrowserRouter } from "react-router-dom";

// Rotas
import Routes from "./routes";

// Components
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
