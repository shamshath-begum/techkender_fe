
import './App.css';
import Connect from './components/Connect';
import Discover from './components/Discover';
import FirstContent from './components/FirstContent';
import Footer from './components/Footer';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Reason from './components/Reason';
import Seal from './components/Seal';
import Showcase from './components/Showcase';
import Trust from './components/Trust';
import Work from './components/Work';
// export const url="http://localhost:8000"
export const url="https://techkender-be.onrender.com"

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstContent/>
      <MainImage/>
      <Work/>
      <Discover/>
      <Showcase/>
      <Connect/>
      <Seal/>
      <Reason/>
      <Trust/>
      <Footer/>
    </div>
  );
}

export default App;
