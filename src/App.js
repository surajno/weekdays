import './App.css';
import ApiCalls from './components/FilterableJobs';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
     <Filters/>
      <ApiCalls/>
    </div>
  );
}

export default App;
