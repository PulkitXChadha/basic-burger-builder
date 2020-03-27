import React from "react";
import Layout from "./components/Layout/Layout.jsx";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
