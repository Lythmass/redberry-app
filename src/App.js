import React from 'react'
import styled from 'styled-components'

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './Components/Landing Page Components/LandingPage.js'
import WorkerInfoPage from './Components/Worker Info Components/WorkerInfoPage.js'

export default function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path = "/" element = {<LandingPage />} />
                    <Route path = "/workerinfo" element = {<WorkerInfoPage />} />
               </Routes>

          </BrowserRouter>
     );
}
