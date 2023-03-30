import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/MyNav";
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <TopBar brand="EpiBooks" claim="La migliore libreria online" />
      <Welcome />
      <Container className='pb-5'>
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
