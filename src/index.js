import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppV1 from './App-v1';
 import App from './App';
// import StarRating from './StarRating';
// function Test(){
//   const [movieRating,setMovieRating]=useState(0);
//   return (
//     <div>
//       {/* <StarRating color='blue' maxRating={5} onSetRating={setMovieRating}/> */}
      
//     </div>
//   ) 
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

