import './styles/app.css';
import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HelloWorld />
      <div className="samplecss">Hello app CSS</div>
    </div>
  );
}

export default App;
