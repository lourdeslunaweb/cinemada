import 'bootswatch/dist/cyborg/bootstrap.min.css'
import './App.css';
import {Detail, DetailBelow, Footer, Navbar} from './components';

const App = () => {
  return (
    <>
    <Navbar/>
    <Detail/>
    <DetailBelow/>
    <Footer/>
    </>
  );
}

export default App;
