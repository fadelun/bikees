import React from "react";
import { Routes, Route } from "react-router-dom";
import Collection from "./components/Collection";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/main/Details";
import Overview from "./components/main/Overview";
import "./swiperCustom.css"

function App() {
  return (
    <div className="App bg-primary relative">
      <Header />
      <Routes >
        <Route path="/" element={<Main />}>
          <Route path=":id" element={<Overview />} />
        </Route>
        <Route path="/collection" element={<Collection />} />


      </Routes>
    </div>
  );
}

export default App;
