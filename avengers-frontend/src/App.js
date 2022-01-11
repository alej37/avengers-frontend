import './App.css';
import AvengersIndex from './AvengersIndex';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import AvengerShow from './AvengerShow';


const App = () => {
  return (
    <div className="App">
      <h1>Avengers App</h1>
      <Routes>
        <Route 
          exact 
          path="/" 
          render={() => <AvengersIndex />}/>
        <Route 
          exact 
          path="/avenger/:id"
          render={routeProps => <AvengerShow {...routeProps}/>}
          />
      </Routes>
    </div>
  );
}

export default App;
