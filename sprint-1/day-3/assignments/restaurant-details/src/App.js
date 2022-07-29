import './App.css';
import Filter from './components/Filter';
import Restaurants from './components/Restaurants';
import restaurantData from "./data/db.json"


function App() {

  return (
    <div className="App">
      <Filter restaurantData={restaurantData}/>
      <Restaurants data={restaurantData}/>
    </div>
  );
}

export default App;
