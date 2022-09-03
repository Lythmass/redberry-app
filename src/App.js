import React from 'react'
import styled from 'styled-components'

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from './Components/Landing Page Components/LandingPage.js'
import WorkerInfoPage from './Components/Worker Info Components/WorkerInfoPage.js'
import LaptopsPage from './Components/Laptops Page Components/LaptopsPage.js'
import SuccessPage from './Components/Success Page Components/SuccessPage.js'
import ListPage from './Components/List Page Components/ListPage.js'
import UniquePage from './Components/Unique Page Components/UniquePage.js'

export default function App() {
     const [image, setImage] = React.useState('');
     const [pageCounter, setPageCounter] = React.useState([]);
     const [listPages, setListPages] = React.useState([]);

     //Add each page for specific laptop
     React.useEffect(() => {
          if(pageCounter.length > 0) {
               setListPages(() => {
                    return pageCounter.map(eachPage => {
                         return (
                              <Route
                                   path = {`page-${eachPage}`}
                                   element = {<UniquePage id = {eachPage} />}
                                   key = {eachPage}
                              />
                         )
                    });
               })
          }
     }, [pageCounter]);
     return (
          <BrowserRouter>
               <Routes>
                    <Route path = "/" element = {<LandingPage />} />
                    <Route path = "/workerinfo" element = {<WorkerInfoPage />} />
                    <Route path = "/laptopspage" element = {<LaptopsPage setImage = {setImage} />} />
                    <Route path = "/successpage" element = {<SuccessPage image = {image}/>} />
                    <Route path = "/list" element = {<ListPage setPageCounter = {setPageCounter}/>} />
                    {listPages}
               </Routes>

          </BrowserRouter>
     );
}
