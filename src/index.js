import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Searchprovider } from './components/Context/Searchcontext';
import { GlobalProvider } from './components/Context/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
    <Searchprovider>
    <BrowserRouter>
    
      <App />
     
    </BrowserRouter>
    </Searchprovider>
    </GlobalProvider>
  </React.StrictMode>
);


