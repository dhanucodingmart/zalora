import './App.css';
import Navbar from './Components/Common/Navbar/Navbar'
import Footer from './Components/Common/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main'
function App() {
  return (
    <>
      <Navbar/>
      <div style={{height:'84px'}}></div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
