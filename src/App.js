
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';

function App() {
   return (

    <>
    <Router> 

      <Header />
      <Footer />

    </Router> 
    
    </>
  );
}

export default App;
