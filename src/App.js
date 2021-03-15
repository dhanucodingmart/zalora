import './App.css';
import Navbar from './Components/Common/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main'
function App() {
  return (
    <>
      <Navbar/>
      <div style={{height:'48px'}}></div>
      <Main/>
    </>
  );
}

export default App;
