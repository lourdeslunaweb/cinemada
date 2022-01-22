import 'bootswatch/dist/cyborg/bootstrap.min.css'
import './App.css';
import {Navbar, Footer, Detail, DetailBelow} from './components';

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
