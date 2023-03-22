import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/index.css';
import GifExpertApp from "./GifExpertApp";

const App = ()=> {
  return (
    <div className="App_Container">
      <GifExpertApp />
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

