import './App.css';
import Footer from './components/Footer';
import SurvivalRate from './components/survivalRate';
import CustomizedTables from './components/Table';
import CustomizedTables1 from './components/Table1';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>TITANIC PROJECT</h1>
      </header>

      <header className="App-header">
      <h3>TITANIC SURVIVOR RATE BY PASSENGER CLASS</h3>
        <SurvivalRate />
      </header>
      <header className="App-header">
      <h3>TABLE OF RESULTS</h3>
        <CustomizedTables />
      </header>
      <header className="App-header">
      <h3>PASSENGERS DETAILS</h3>
        <CustomizedTables1 />
      </header>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
