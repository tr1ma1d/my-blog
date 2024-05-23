import React from 'react';
import Header from './Components/Header'
import Content from './Components/Content';
import Footer from './Components/Footer';
import { BrowserRouter as Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Route>
        <Header/>
        <Content/>
        <Footer/>
      </Route>
      
    </div>

  )
}

export default App;

