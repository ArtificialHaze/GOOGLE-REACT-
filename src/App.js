import "./App.css";
import React, { useState } from "react";
import { Navbar, Footer, RoutesComponent } from "./components";
import { MainContainer } from "./global-styles";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <MainContainer className={darkTheme ? "dark" : ""}>
      <div>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesComponent />
        <Footer />
      </div>
    </MainContainer>
  );
};

export default App;
