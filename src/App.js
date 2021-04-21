import PersonalPicutre from './PersonalPicture.png';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <img src={PersonalPicutre} alt="PersonalPicture" className="picture" />
    </div>
  );
}

export default App;
