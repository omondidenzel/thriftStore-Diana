import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Body from './components/Body';

const App = () => {
  const d = new Date();
  let year = d.getFullYear();
  
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>

      <hr></hr>
      <p>Copyright &copy; thriftStore. All rights reserved. {year}</p>
           
    </div>
  )
}

export default App;
