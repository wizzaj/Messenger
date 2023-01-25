import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MsgContext} from "./Context/msgContext"
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MsgContext>
    <App/>
  </MsgContext>
  </BrowserRouter>
);


