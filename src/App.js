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
import LaptopsPage from './Components/Laptops Page Components/LaptopsPage.js'
import SuccessPage from './Components/Success Page Components/SuccessPage.js'

export default function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path = "/" element = {<LandingPage />} />
                    <Route path = "/workerinfo" element = {<WorkerInfoPage />} />
                    <Route path = "/laptopspage" element = {<LaptopsPage />} />
                    <Route path = "/successpage" element = {<SuccessPage />} />
               </Routes>

          </BrowserRouter>
     );
}
