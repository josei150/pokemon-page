import './App.css';
import { GetPokemones } from './pages/GetPokemones';
import { LegendariesPokemons } from './pages/LegendariesPokemons';
import { PokeBall } from './components/PokeBall';
import { PokeBallOpen } from './components/PokeBallOpen';

function App() {
  return (
    <div className="App">
      <GetPokemones/>
    </div>
  );
}

export default App;
