import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Email from './components/Email';
import GitHub from './components/GitHub';

function App() {
  return (
    <div className="container">
      <Header />
      <Summary /> 
      <Email />
    </div>
  );
}

export default App;
