import './App.css';
import AvengersIndex from './AvengersIndex';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import AvengerShow from './AvengerShow';


const App = () => {
  return (
    <div className="App">
      <div className='App-title'>
        <h1>Avengers App</h1>
      </div>
      <Routes>
        <Route 
          exact 
          path="/" 
          render={() => <AvengersIndex />}/>
        <Route 
          exact 
          path="/avenger/:avenger_id"
          render={routeProps => <AvengerShow {...routeProps}/>}
          />
      </Routes>
    </div>
  );
}

export default App;
