import React from 'react';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Labs/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
