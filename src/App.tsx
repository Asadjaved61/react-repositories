import React from "react";
import "./App.css";
import RepositoryList from "./components/repository-list";

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>React Repositories</h1>
      </div>
      <RepositoryList />
    </div>
  );
}

export default App;
