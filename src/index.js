import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Card from './components/Card';
import Explore from './components/Explore';
import Manali from './Manali/Manali';
import Chandigarh from './Chandigarh/Chandigarh';
import Shimla from './components/Shimla';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<App/>}/>
      <Route path='/Chandigarh' element={<Chandigarh/>}/>
      <Route path='/Shimla' element={<Shimla/>}/>
      <Route path='/Manali' element={<Manali/>}/>
     

     </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
